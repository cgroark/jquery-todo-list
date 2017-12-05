
$("#inputButton").on("click", function(){	
	$("#listToDo").append($("<li>",{
		text: $("#inputField").val()
	}))
	$("li").css("color", "black").css("font-size", "22px").css("list-style-position", "inside").css("margin-bottom", "0px").css("margin-right", "30px");
	$("#inputField").val("");
	$("li").on("click",function(){
		console.log("clicked");
		this.remove();

})});
