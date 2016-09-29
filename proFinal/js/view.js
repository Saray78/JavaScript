'use strict';

/**
 * Created by Blue Butterfly on 12/09/2016.
 */

//Imprimir datos en DOM

function printTask(name) {
    var taskLi = document.createElement('li');
    //facilitar css
    taskLi.classList.add('task-item');
    var taskCheckBox = document.createElement('input');
    taskCheckBox.type = "checkbox";
    var taskEl = document.createElement('span');
    taskEl.setAttribute('contenteditable', '');
    //contiene texto tarea
    //metemos texto tarea
    taskEl.textContent = name;
    //Propiedad html5 que hace que us pueda modificar literalmente
    taskEl.setAttribute('contenteditable', '');
    var taskRemove = document.createElement('a');
    taskRemove.textContent = 'x';
    //Para que funcione enlace
    taskRemove.href = "";
    //Contenedor de todos
    taskLi.appendChild(taskCheckBox);
    taskLi.appendChild(taskEl);
    taskLi.appendChild(taskRemove);
    //A todo contendor tareas
    taskList.appendChild(taskLi);
    editTask();
    completeTask();
    removeTask();
}