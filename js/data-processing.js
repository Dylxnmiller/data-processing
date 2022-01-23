 //use location object to access querystring (address bar)
 const queryString = window.location.search;
    
 //output to console    
 console.log(queryString);
     
 //separate querystring parameters
 const urlParams = new URLSearchParams(queryString);

 let myData = '';
 urlParams.forEach(function(value, key) {
     myData+= `<p>${key}: ${value}<p/>`;
     //console.log(value, key);
   });
   myData +=`<p><a href=""></a><p/>`
   document.getElementById("output").innerHTML = myData;
  