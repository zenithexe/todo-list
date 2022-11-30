var taskCount = 0;

function noTask(){
    var noTaskContainer = document.createElement("div");
    noTaskContainer.className="no-task-container";

    var noTaskMessage = document.createElement("p");
    noTaskMessage.className="no-task-message";
    noTaskMessage.innerHTML="No Task";

    var addTaskContainer = document.getElementsByClassName("main-container");

    addTaskContainer[0].appendChild(noTaskContainer);
    noTaskContainer.appendChild(noTaskMessage);
}


function addTaskEnter(event){
    if (event.key=="Enter"){
        addTask();
    }
}

function addTask(){

    var value = document.getElementById("task-input-field").value;
    if(value==""){
        alert("Please Enter a Task Name🌚");
        return;
    }


    taskCount+=1;
    
    var htmlCode = `
    <div id="tc${taskCount}"class="task-container">
        <div class="task-name-check-container">
            <input id="c${taskCount}" class="task-checkbox" type="checkbox" oninput="onChecked(id.substring(1))" />
            <p id="tn${taskCount}" class="task-name">${value}</p>
        </div>
        
        <i id="d${taskCount}" onclick="deleteTask(id.substring(1))" class="fa-solid fa-circle-minus"></i>
    </div>`;

    var noTask = document.getElementsByClassName("no-task-container");
    if(taskCount==1){
        noTask[0].remove();
    }

    if(taskCount==1){
        var taskListContainer = document.createElement("div");
        taskListContainer.className="task-list-container";

        var mainContainer = document.getElementsByClassName("main-container");
        mainContainer[0].appendChild(taskListContainer);

        taskListContainer.innerHTML = htmlCode;
    }
    else{
        var taskListContainer = document.getElementsByClassName("task-list-container");
        taskListContainer[0].innerHTML += htmlCode;
    }

    
    document.getElementById("task-input-field").value = "";
    
    console.log(taskCount);

}


function onChecked(id){
    var checkbox = document.getElementById("c"+id);
    if(checkbox.checked){
        document.getElementById("tn"+id).style.textDecoration = "2px line-through";
    }
    else {
        document.getElementById("tn"+id).style.textDecoration = "none";
    }
}

function deleteTask(id){
    document.getElementById("tc"+id).remove();
    taskCount-=1;
    console.log(taskCount);

    if(taskCount==0){
        var list = document.getElementsByClassName("task-list-container");
        list[0].remove();
        noTask();
    }
}