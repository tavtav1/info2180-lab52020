/*global require*/

window.onload = function () {
    "use strict";
    const lookup; 
    var result, search;
    
    lookup = document.querySelector('#lookup');
    result = document.querySelector('#result');
    $.ajax({
      url: 'world.php',
      type: 'GET',
      success: function(response) 
      {result.innerHTML=response;}
    }); 
    lookup.addEventListener('click', function(event) {
        event.preventDefault();
        search =document.getElementById("country").value;
        $.ajax({
          url: 'world.php',
          type: 'GET',
          data: { "country": search},
          success: function(response) 
          {result.innerHTML=response;}

        });         
    });
};