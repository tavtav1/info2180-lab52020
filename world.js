/*global require*/

window.onload = function () {
    "use strict";
    
    document.getElementById("lookup").addEventListener('click', function () {
        var httpreq;
        let dataCo = document.getElementById("country").value;
        
        httpreq = new XMLHttpRequest();
        httpreq.open('GET',"http://localhost/info2180-lab5/world.php?country=" +  dataCo + "&context=none" );
        httpreq.send();
        httpreq.onreadystatechange = function(){
            let response = httpreq.responseText;
            document.getElementById("result").innerHTML = response;
        }
    });

    document.getElementById("lookup2").addEventListener('click',function(){
        var httpreq; 
        let dataCo = document.getElementById("country").value;
        
        httpreq = new XMLHttpRequest();
        httpreq.open('GET',"http://localhost/info2180-lab5/world.php?country=" +  dataCo + "&context=cities");
        httpreq.send();
        httpreq.onreadystatechange = function(){
            let response = httpreq.responseText;
            document.getElementById("result").innerHTML = response;
        }
    })
} //end of function