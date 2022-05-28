 list =document.getElementById('list')
function getlist(){
    var data = fetch("http://localhost:3000/task")
    .then((x)=>x.json())
    .then((x)=>display(x))
}
getlist()
function display(x){
    x.forEach(element => {
li=document.createElement("li")
li.innerHTML=element.task
list.append(li)
        
    });
}