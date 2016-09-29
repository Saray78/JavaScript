/**
 * Created by Blue Butterfly on 12/09/2016.
 */
class Task{
    constructor(name){
        this.name = name;
        this.isComplete = false;
    }
    edit(newName){
        this.name = newName;
    }

    complete(){
        this.isComplete = true;
    }

    removeTask(i){
        //elimina tomando indice
        this.tasks.splice(i);
    }
}

class List{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push(task);
    }
}

/*var trabajo = new List('trabajo');
trabajo.addTask('Preparar el informe');
trabajo.addTask('Propuesta para el cliente');
console.log(trabajo.tasks);
  */