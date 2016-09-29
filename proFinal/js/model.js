"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Blue Butterfly on 12/09/2016.
 */
var Task = function () {
    function Task(name) {
        _classCallCheck(this, Task);

        this.name = name;
        this.isComplete = false;
    }

    _createClass(Task, [{
        key: "edit",
        value: function edit(newName) {
            this.name = newName;
        }
    }, {
        key: "complete",
        value: function complete() {
            this.isComplete = true;
        }
    }, {
        key: "removeTask",
        value: function removeTask(i) {
            //elimina tomando indice
            this.tasks.splice(i);
        }
    }]);

    return Task;
}();

var List = function () {
    function List(name) {
        _classCallCheck(this, List);

        this.name = name;
        this.tasks = [];
    }

    _createClass(List, [{
        key: "addTask",
        value: function addTask(task) {
            this.tasks.push(task);
        }
    }]);

    return List;
}();

/*var trabajo = new List('trabajo');
trabajo.addTask('Preparar el informe');
trabajo.addTask('Propuesta para el cliente');
console.log(trabajo.tasks);
  */