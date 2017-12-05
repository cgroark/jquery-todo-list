
// $("#inputButton").on("click", function(){	
// 	var itemID = 
// 	$("#listToDo").append($("<li>",{
// 		text: $("#inputField").val()
// 	}).append("<input type='checkbox' class='checkBox'/>"))
// 	$("li").css("color", "red");
// 	$("#inputField").val("");
// 	$('.checkBox').on("click",function(){
// 		console.log("demands!");
// 		$("li")().css("color", "black");

// });
// })

$("#inputButton").on("click", function(){
var listItem = $("#inputField").val()	
	$("#listToDo").append($("<li class ='items' id=" + listItem + ">" + listItem +"</li>",{
}))
$("li").css("color", "red");
$("#inputField").val("");

$(".items").on("click", function(){
	console.log("clicked");
	this.remove();
	// $("listToDone").append("li");
})


})

