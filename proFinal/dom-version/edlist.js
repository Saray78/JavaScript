/**
 * Created by Blue Butterfly on 12/09/2016.
 */
//Manera 1: manipular el DOM

var newTask = document.getElementById('new-task');//Nueva tarea
var taskList = document.getElementById('task-list'); //lista tareas

//Funcion capturar lo que escribes
//Escuchar eventos
//Para saberlo pasar e
function addTask(e) {
    e.preventDefault();
    if(e.which === 13){
        //Crear nuevo elemento
        var newTaskEl = document.createElement('li');
        var newTask = document.createElement('span');
        //Añadir checkbox
        var newTaskCheckbox = document.createElement('input');
        newTaskCheckbox.type = "checkbox";
        //Meter texto que había en el input
        newTask.textContent = this.value;
        newTaskEl.appendChild(newTaskCheckbox);
        newTaskEl.appendChild(newTask);
        //Meter dentro de task list(vacío)
        taskList.appendChild(newTaskEl);
        this.value = "";
        completeTask();
    }

}

//Recorrer todos los elementos de checkbox y escuchar evento
function completeTask() {
    //childre.length devuelve array con todos los hijos
    for(var i=0;i<taskList.children.length;i++){
        //Te permite seleccionar un elemento
        var check = taskList.children[i].querySelector('input');
        //evento para los input
        check.addEventListener('change',function() {
            if(this.checked){
                //subir nivel DOM
                //padre es li
                //se deja que css lo haga cambiando de clase
                this.parentElement.classList.add('completed');
            }
        });
    }

}


newTask.addEventListener('keyup',addTask);