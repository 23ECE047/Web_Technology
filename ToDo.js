var listOfData=[]
//creating array to store the list
var input=document.getElementById("input");
//DOM should collab with html forms
var todo=document.getElementsById("todo");
//Creating ul list
document.getElementById("button").onclick=click;
/inserting a data
functionclick(){
    listOfData.push(input.value)
    console.log(listOfData);
    input.value=""
    showList()
}
function showList(){
    todo.innerHTML=""

listOfData.forEach(function(n,i){
    listOfData.innerHTML=(
    "<a onclick='edit("+i+")'>Edit</a>" + "<a onclick='deletelst("+i+")'>&times | </a></li>")
})
}
function edit(i){
    var newVal= prompt("please insert new value")
    listOfData.splice(i,1,newVal)
    showList()
}
function deletelst(i){
    listOfData.splice(i,1)
    showList()
}