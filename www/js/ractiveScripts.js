if (window.localStorage.getItem("first") === null )
 {
	window.localStorage.setItem("first", "no");
	window.localStorage.setItem("filmstore",JSON.stringify(films));
	items = JSON.parse(window.localStorage.getItem("filmstore"));
}
else {
	items = JSON.parse(window.localStorage.getItem("filmstore"));
	
}


var filtered = items;
var one = "select";
var two = "select";
var aOne = "select";
var aTwo = "select";
var fTitle = "none";

function ractiveSetup(){
searchF = new Ractive({
	el: '.genrePad',
	template:'#searchPage',
		data:{
			  genreinfo: genre,
			 }

  });
	
	searchF.on({
		<!----------------------------------- genrePad select --------------------------------------------------->
		
		select: function (event, value, id){
			
		if (one == value){one = "select"; this.set({genre1:one});$('#' + id).css("opacity", 1.0);} // unselect first
		else if (two == value){two = "select"; this.set({genre2:two});$('#' + id).css("opacity", 1.0);} // unselect second
		
		else if (one == "select" && two != "select"){
			one = value;
			this.set({genre1:one}); // first selected if second has a value and first does not
			$('#' + id).css("opacity", 0.3);	
			}
			else if (two == "select"){
			if (one == "select")
			{
			one = value;
			this.set({genre1:one}); // first selected
			$('#' + id).css("opacity", 0.3); 
				
			}
			else {
				two = value;
				this.set({genre2:two});  // second selected
				$('#' + id).css("opacity", 0.3);
				}
			}
			
			},
		
		find: function (event) {
			
			if (one != "select" || two != "select")
				{			
				filtered = items.filter(function (el) {return (el.genreA === one || el.genreA === two || el.genreB === one || el.genreB === two);}); // filter item one or one and two
				filmdb.set({filminfo: filtered}); // update ractive
				}
			
			else {
				filtered = items.sort(function() { return Math.random() - 0.5;})
				
				filmdb.set({
					filminfo: filtered
					
					}); // update ractive
					$('#rlist').listview('refresh');
					
			     }

		}
	});
	

addF = new Ractive ({
	el: 'addFilm',
	template:'#addPage',
	data:{
			  genreinfo: genre,
			 }
	});
	<!----------------------------------- add new film ------------------------------------------------------>
		addF.on({	
		 
		add: function ( event, fTitle) {
			
			if (aTwo != "select" && aOne != "select" && fTitle != "none")
			{
				
			 var newFilm = {
			 genreA: aOne,
			 genreB: aTwo,
			 title: fTitle,
			 fave: 'z'
			};

			items.push( newFilm );
			window.localStorage.setItem("filmstore",JSON.stringify(items));
			alert(fTitle + " has been added.");
			filmdb.set({filminfo: filtered}); // update ractive
			aOne = "select";
			aTwo = "select";
			}
			
			else {
				alert("please enter a title & select two genres");
				}
		
		
		},
		
		<!----------------------------------- reset app ------------------------------------------------------->	
	
		reset: function ( event ) {
			window.localStorage.removeItem('first');
			alert("app reset");
			window.location = "index.html";
		},
		
		select: function (event, value, id2){
			
		if (aOne == value){aOne = "select"; this.set({genre1:aOne});$('#' + id2).css("opacity", 1.0);} // unselect first
		else if (aTwo == value){aTwo = "select"; this.set({genre2:aTwo});$('#' + id2).css("opacity", 1.0);} // unselect second
		
		else if (aOne == "select" && aTwo != "select"){
			aOne = value;
			this.set({genre1:aOne}); // first selected if second has a value and first does not
			$('#' + id2).css("opacity", 0.3);	
			}
			else if (aTwo == "select"){
			if (aOne == "select")
			{
			aOne = value;
			this.set({genre1:aOne}); // first selected
			$('#' + id2).css("opacity", 0.3); 
				
			}
			else {
				aTwo = value;
				this.set({genre2:aTwo});  // second selected
				$('#' + id2).css("opacity", 0.3);
				}
			}
			
			}
		});




	filmdb = new Ractive({
	
  el: 'output',
  template: '#appView',
  data: {
genre1: "select",
genre2: "select",
		
    filminfo: filtered.sort(function() {
   return Math.random() - 0.5;}) ,

	
    sort: function ( array, column ) {
      array = array.slice(); // clone, so we don't modify the underlying data
  
      return array.sort( function ( a, b ) {
        return a[ column ] < b[ column ] ? -1 : 1;
      });
    },
    
  }

  });
observer = filmdb.observe( 'filminfo', function ( newValue, oldValue, keypath ) {
  alert( keypath + ' changed to ' + newValue );
  $("#rlist").trigger("create");
  $('#rlist').listview().listview('refresh');
  $("#rlist").listview().listview('refresh');
});

    <!----------------------------------- filmdb sub-functions  -------------------------------------->
	filmdb.on( {
	<!----------------------------------- sort films -------------------------------------------------------->
	
		sort: function ( event, column ) { // sort column
			this.set( 'sortColumn', column );
			
		},
	
	<!----------------------------------- remove selected film -------------------------------------------->	
	  
		remove: function ( event, title) { // Remove item
			var sortedTitle = title;
			var titleArrayPosition;
	       $('#rlist').listview('refresh');
		   for (var i=0, iLen=items.length; i<iLen; i++) {  // loop through objects in items array
			if (items[i].title == sortedTitle) 
				titleArrayPosition = items[i];  // search for title
		    }	
			
			var titleArrayIndex = items.indexOf(titleArrayPosition);
			alert(sortedTitle + ' has been removed.');
				
			items.splice(titleArrayIndex, 1);  // remove object (defined by index number) from items array
			window.localStorage.setArray("filmstore", items); // update changes
				
			
		},		
		
	});
	
	
	faveF = new Ractive({
		
  el: 'faves',
  template: '#favePage',
  data: {

    filminfo: items.filter(function (el) {return (el.fave === "on watch");}),
	
    sort: function ( array, column ) {
      array = array.slice(); // clone, so we don't modify the underlying data
  
      return array.sort( function ( a, b ) {
        return a[ column ] < b[ column ] ? -1 : 1;
      });
    },
    sortColumn: 'title'
  }
  });
  }