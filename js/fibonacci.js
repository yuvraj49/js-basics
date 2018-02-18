
var fibonacci = document.getElementById("fibonacci");
var resultTwo = document.getElementById("result-two")

var fiboSubmit = document.getElementById("fibo-submit");
fiboSubmit.onclick = function(){

	var strValue = fibonacci.value;
	var compute = parseInt(strValue);

	var result = '';


    var a = 0;
    var b = 1;
    var c;
    for (i = 1; i < compute; i++) {
        c = a + b;

        result += '  ' + c; 

        
        a = b + c;
  
  	result += '  ' + a; 
        b = c + a;

        result += '  ' + b;
        i+=3;
 	
    }


	resultTwo.innerHTML = result;
	resultTwo.setAttribute("opacity","0");
};