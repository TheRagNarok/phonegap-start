if (window.localStorage.getItem("first") === null )// if item first does not exist
 {
	window.localStorage.setItem("first", "no"); // create first, with a value of no
	window.localStorage.setItem("filmstore",JSON.stringify(films)); //set initial filmstore list from the default film array in films.js
	items = JSON.parse(window.localStorage.getItem("filmstore")); //set items to equal this list
}
else {
	items = JSON.parse(window.localStorage.getItem("filmstore")); // if not being run for the first time then get the items list from filmstore
	
}


var filtered = items; // set up global variables
var one = "select";
var two = "select";
var aOne = "select";
var aTwo = "select";
var fTitle = "none";


// all ractive based scripts go here, e.g. new ractives and ractive events such as ractive.on and ractive.observe
function ractiveSetup(){ 
	
searchF = new Ractive({ //search page (home) ractive
	el: '.genrePad',
	template:'#searchPage',
		data:{
			  genreinfo: genre,
			 }

  });
	
	searchF.on({
		<!----------------------------------- genrePad select --------------------------------------------------->
		
		select: function (event, value, id){ // linked to on-tap event of each genre list item
			
		if (one == value){one = "select"; this.set({genre1:one});$('#' + id).css("opacity", 1.0);} // unselect first
		else if (two == value){two = "select"; this.set({genre2:two});$('#' + id).css("opacity", 1.0);} // unselect second
		
		else if (one == "select" && two != "select"){
			one = value;
			this.set({genre1:one}); // first selected if second has a value and first does not
			$('#' + id).css("opacity", 0.3); // change opacity of the selected genre	
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
		
		find: function (event) { // triggered on-tap on find button
			
			if (one != "select" || two != "select")
				{			
				filtered = items.filter(function (el) // filter item by genre one or one and two
				    {
					return (el.genreA === one || el.genreA === two || el.genreB === one || el.genreB === two);
					}); 
				
				filmdb.set({filminfo: filtered}); // update ractive
				}			
			else {
				filtered = items.sort(function() { return Math.random() - 0.5;}) // sort items list into a random order				
				filmdb.set({filminfo: filtered}); // update filminfo variable in filmdb					
			     }
		}
	});
	

addF = new Ractive ({ // add film page ractve
	el: 'addFilm',
	template:'#addPage',
	data:{
		  genreinfo: genre,
		 }
	});
	<!----------------------------------- add new film ------------------------------------------------------>
	
		addF.on({	// add film ractive sub-functions
		 
		add: function ( event, fTitle) { // linked to add film button
			
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
	
		reset: function ( event ) { // linked to reset button
			window.localStorage.removeItem('first');
			alert("app reset");
			window.location = "index.html";
		},
		
		
		
		select: function (event, value, id2){ // linked to on-tap event of each genre list item
			
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




	filmdb = new Ractive({ // film database results page ractive
	
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
  $("#rlist").trigger("create");  // observe when filminfo list is changed, then trigger 'JQM create' on the results list to re-enhance page
});


	filmdb.on( { // add film ractive sub-functions
	
	<!----------------------------------- sort films -------------------------------------------------------->
	
		sort: function ( event, column ) { // sort column
			this.set( 'sortColumn', column );
			
		},
	
	<!----------------------------------- remove selected film -------------------------------------------->	
	  
		remove: function ( event, title) { // Remove item
			var sortedTitle = title;
			var titleArrayPosition;

		   for (var i=0, iLen=items.length; i<iLen; i++) {  // loop through objects in items array
			if (items[i].title == sortedTitle) 
				titleArrayPosition = items[i];  // search for title
		    }	
			
			var titleArrayIndex = items.indexOf(titleArrayPosition);
			alert(sortedTitle + ' has been removed.');
				
			items.splice(titleArrayIndex, 1);  // remove object (defined by index number) from items array
			window.localStorage.setArray("filmstore", items); // update changes
			window.location = "index.html#results";
				
			
		},	
		
		save: function(event, fave, title, genreA, genreB) {
			var sortedTitle = title;
			genreA = gA;
			genreB = gB;
			var titleArrayPosition;
			for (var i=0, iLen=items.length; i<iLen; i++) {  // loop through objects in items array
			if (items[i].title == sortedTitle) 
				titleArrayPosition = items[i];  // search for title
				choice1 = "Add to watch list";
		    }	
			var titleArrayIndex = items.indexOf(titleArrayPosition);
			alert(fave);
			if (fave === "Remove from watch list"){
				alert("trying to remove");
				var newFilm = {
			 genreA: gA,
			 genreB: gB,
			 title: sortedTitle,
			 fave: "Add to watch list"
			};
				items.splice(titleArrayIndex, 1);
				items.push( newFilm );
			window.localStorage.setItem("filmstore",JSON.stringify(items));
				alert(title + "removed");
			}
			else {
				alert("trying to add");
				var newFilm = {
			 genreA: gA,
			 genreB: gB,
			 title: sortedTitle,
			 fave: "Remove from watch list"
			};
			items.splice(titleArrayIndex, 1);
			 

			items.push( newFilm );
			window.localStorage.setItem("filmstore",JSON.stringify(items));
			alert("added");
			}
			
		}
		
	});
	
	
	faveF = new Ractive({ // favourites / watch list page ractive
		
  el: 'faves',
  template: '#favePage',
  data: {

    filminfo: items.filter(function (el) {return (el.fave === "Remove from watch list");}),
	
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