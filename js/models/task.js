'use strict';

  function Task(description, priority, list) { 
    this.description = description
    this.priority = priority            
    this.list = list
    this.list.tasks.push(this)
    this.id = this.list.tasks.length-1
  }

   Task.prototype.liEl = function() {
    var str = `<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`
    return str
  }

  Task.prototype.build = function() {
    $(`#list-${this.list.id}`).append(this.liEl())
  }
      




