 list =document.getElementById('list')
function getlist(){
    var data = fetch("http://localhost:3000/task")
    .then((x)=>x.json())
    .then((x)=>display(x))
}
getlist()
function display(x){
    x.forEach((element) => {
li=document.createElement("li")
li.innerHTML=`${element.task}`
 button=document.createElement('button')
 
 button.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
 button.addEventListener('click',()=>{
     console.log(element.id)
    var sai=fetch(`http://localhost:3000/task/${element.id}`,{
        method: "DELETE",
                  
                  headers: {
                      'Content-Type': "application/json"
                  }
      })
getlist()
 })
 li.append(button)
list.append(li)
        
    });
}
function add(){
    var task=document.getElementById('tasks').value
    x={
        "task":task,
        "status":"false"
    }
        fetch('http://localhost:3000/task',{
          method: "POST",
                    body: JSON.stringify(x),
                    headers: {
                        'Content-Type': "application/json"
                    }
        })

    getlist()
}