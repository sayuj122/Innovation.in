$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
           fname:{
               required:true,
               minlength:4
           },
           number:{
               required:true,
               number:true
           },
           class:{
               required:true
           }
        }
      
    })
})