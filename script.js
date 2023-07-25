const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("Task can't be empty")
    }
    else
    {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //parent elem is li elem so it gets removed
        saveData();
    }
},false)

//when we refresh the website , all the tasks will get removed but we want to store them
//to store them we save them in browser storage
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showSavedTasks(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showSavedTasks();