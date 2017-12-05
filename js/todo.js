
$("#inputButton").on("click", function(){	


	$("#listToDo").append($("<li class="items" id="itemID">" + itemID++,{
		text: $("#inputField").val()
	}).append("<input type='checkbox' class='checkBox'/>"))
	$("li").css("color", "red");
	$("#inputField").val("");
	$('.checkBox').on("click",function(){
		console.log("demands!");
		$("li").css("color", "black");

});
	