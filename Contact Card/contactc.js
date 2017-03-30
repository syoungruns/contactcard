$(document).ready(function(){
  $('#submit').click(function(){
    $('.column').append("<div class='cards'><h3>" + $('#first_name').val() + " " + $("#last_name").val() + "</h3><p>" + "Click here for a small description." + "</p> <p class='hidden'>" + $("#description").val() + "</p></div>")

    return false;

    })



    $(document).on('click', '.cards', function(){
      $(this).children().toggle()

    });



});
