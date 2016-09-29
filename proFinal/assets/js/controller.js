/**
 * Created by Blue Butterfly on 12/09/2016.
 */
//Detectar interacción

var newTaskEl = document.getElementById('new-task');
var taskList = document.getElementById('task-list');
//Lista predeterminada
var inbox = new List('inbox');

//e: para evento
//lista: a que lista irá cuando us añada
//seleccionar lista
//list = parametroPorDefecto
function addTask(e,list = inbox) {
    e.preventDefault();
    if(e.which === 13){
        //como estás en evento con this
        var newTask = new Task(this.value);
        list.addTask(newTask);
        printTask(this.value);
        this.value = "";
        console.table(list.tasks);
    }
}

function editTask(list=inbox) {
    var listItems = taskList.children;
    for(let i=0;i<listItems.length;i++){
        //buscar cual es el input,texto con la tarea editable
        //objeto = DOM
        listItems[i].querySelector('span').addEventListener('blur',()=>{
            list.tasks[i].edit = listItems[i].querySelector('span').textContent;
            console.table(list.tasks);
        })
    }
}


function completeTask(list=inbox){
    var listItems = taskList.children;
        for(let i=0;i<listItems.length;i++){
            listItems[i].querySelector('input').addEventListener('change',()=>{
                if(listItems[i].querySelector('input').checked){
                list.tasks[i].complete();
                listItems[i].classList.add('complete');
                }
                console.table(list.tasks);
            })
        }
}

function removeTask(list = inbox) {
    var listItems = taskList.children;
    for (let i = 0; i < listItems.length; i++) {
        //buscar cual es el input,texto con la tarea editable
        //objeto = DOM
        listItems[i].querySelector('a').addEventListener('click', (e)=> {
                e.preventDefault();
                var _i = i;
                list.removeTask(_i);
                this.parentElement.remove();
                console.table(list.tasks);
                completeTask();
        })
    }
}

//escuchar elemento keyup
newTaskEl.addEventListener('keyup',addTask);
