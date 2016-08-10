//back-end


//front-end(user)

$(document).ready(function(){

  $("#holidaybev").submit(function(){
    event.preventDefault();
    //do something
    var hbevInput = $("input:radio[name=hbev]:checked").val();
    alert(hbevInput);
  });

  $("#hotdaybev").submit(function(){
    event.preventDefault();
    var hdbevInput = $("input:radio[name=hdbev]:checked").val();
    alert(hdbevInput);
  });


});
