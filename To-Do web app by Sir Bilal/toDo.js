const addTask = document.querySelectorAll('#title')
const btnSub = document.querySelector('.btnSub')

let taskSave = []

addTask.forEach(function(item){
    btnSub.addEventListener('click',function(){
        if (item.id ){
            item.id.push(taskSave)
            taskSave.addTask = "";
            console.log("success")
        } else{
            console.log("Failed");
            
        }
    })
})
