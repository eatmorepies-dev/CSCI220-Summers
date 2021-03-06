

var addButtonClicked = document.getElementById('btnToAddTask'); //All element ids are referenced in my html script

var list = document.getElementById('listToAddTo');

list.addEventListener('click', function(e) { //e stands for "event". Runs when an item is clicked
	checkItem(e);}, false);
var clearButton = document.getElementById('btnToClearList');
clearButton.addEventListener('click', function(){
	clearElements(list);},false);

addButtonClicked.addEventListener('click', buttonClick, false);

function getTarget(e)
{
	return e.target || e.srcElement;
}
function buttonClick()
{
	var textBox = document.getElementById('taskToAdd');
	if (textBox.value.length != 0) //Only add element if textbox content is not empty
		{
			list.innerHTML += "<li>" + textBox.value + "</li>"; //Adds a new list element
		}
	textBox.value = "";
}
function checkItem(e)
{
	var target = getTarget(e);
	target.style.textDecoration = "line-through"; //Sets the textDecoration of the clicked line
}
function clearElements()
{
	list.innerHTML = ""; //Clears list
}