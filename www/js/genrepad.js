$$('ul li').each(function(){
	$$(this).tap(function(){
		if($$(this).attr('rel') != "delete"){
			var num = $$(this).attr('rel');
      var temp = $$(".input-number").val() + num;
      $$(".input-number").val(temp);
		}else{
			var temp = $$(".input-number").val();
      temp = temp.slice(0,temp.length-1);
      $$(".input-number").val(temp);
		}
	});
});