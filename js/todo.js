
$("#inputButton").on("click", function(){	
	var itemID = 
	$("#listToDo").append($("<li>",{
		text: $("#inputField").val()
	}).append("<input type='checkbox' class='checkBox'/>"))
	$("li").css("color", "red");
	$("#inputField").val("");
	$('.checkBox').on("click",function(){
		console.log("demands!");
		$("li")().css("color", "black");

});
})