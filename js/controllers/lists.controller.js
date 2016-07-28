'use strict';

function ListsController() {

}

  ListsController.prototype.init = function() {
    this.onReady()
    // this.destroy()
  };

  ListsController.prototype.onReady = function() {
  $(document).on('ready', function(){
    $('form').on('submit', function(event){
      event.preventDefault()
      var title = $('[name="list_title"]').val()
      var list = new List(title)
        list.build()        
      $('[name="list_title"]').val('')
      })
    })
  }

    // List.prototype.destroy = function() {
    //   $(".destroy-list").click(function(){
    //     $(this).parents('.list').remove()      
    //   })



