// ++++++++++++++++++++++++++++++++++++++++++++++++++
// All Selectors Are Here

// AddTask All Selectors Here 
const addTask = document.querySelectorAll('#title')
const first = document.querySelector('.title1')
const description = document.querySelector('.title2')
const priority = document.querySelector('.title3')
const btnSub = document.getElementById('btnSub')
const resbtn = document.getElementById('resBtn')
const taskSave = []
// AddTask All Selectors ended

// Filter Tasl All Selectors here
const filteredCategory = document.getElementById('All')
const projectTaskCon = document.getElementById('projectTaskCon')
// const filterSave = [];
const filteredSaved = {};
filteredSaved.filter(filteredCategory)

// All Selectors Are ended
// ++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// Add Task Submit button Functionality here
function submitt() {
    btnSub.addEventListener('click', () => {
        Object.keys(taskSave.push(first.value))
        first.value = "";
        // console.log(taskSave);
        Object.keys(taskSave.push(description.value))
        description.value = "";
        // console.log(taskSave);
        Object.keys(taskSave.push(priority.value))
        priority.value = "";
        // console.log(taskSave);
        priority.value = "Low";
    })
}
// Add Task Submit button Functionality ended
// ++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// Add Task Reset button Functionality here
function resett() {
    resbtn.addEventListener('click', function () {
        first.value = "";
        description.value = "";
        priority.value = "";
        // console.log(priority);
        priority.value = "Low";
        // console.log(first, description, priority);
    })
}
// Add Task Reset button Functionality ended
// ++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// FilterTask status and priority here
function filteredTask() {
    console.log("filteredCategory", filteredCategory);
    if (filteredSaved === projectTaskCon) {
        projectTaskCon = filteredCategory.value
        console.log("filterSave", filterSave);
    }
}
// FilterTask status and priority ended
// ++++++++++++++++++++++++++++++++++++++++++++++++++