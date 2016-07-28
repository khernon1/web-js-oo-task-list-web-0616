'use strict';

const store = {
  lists: []
}

function List(title) {
    store.lists.push(this)
    this.title = title          
    this.id = store.lists.length-1
    this.tasks = []          
}

    List.prototype.listEl = function() {
      var str = `<div class="list"><h2><button class="destroy-list">x</button> ${this.title}</h2><ul id="list-${this.id}" data-id="${this.id}"></ul></div>`
      return str
    }

    List.prototype.optionEl = function() {
      var str = `<option value="${this.id}">${this.title}</option>`
      return str
    }

    List.prototype.build = function() {
      $('#lists').append(this.listEl())
      $('#select_list').append(this.optionEl())
      this.destroy()
    }

    List.prototype.destroy = function() {
      $(".destroy-list").click(function(){
        var list_id = parseInt($(this).parents('.list').find('ul').attr('data-id'))
        for (var i = 0; i < store.lists.length; i++) {
          if (list_id === store.lists[i].id) {
                store.lists.splice(i,1)
          }
        }

        $(this).parents('.list').remove()
      })
    }



