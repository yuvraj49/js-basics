
var prime = document.getElementById("prime");
var resultFour = document.getElementById("result-four")

var primeSubmit = document.getElementById("prime-submit");
primeSubmit.onclick = function(){

	var strValue = prime.value;
	var compute = parseInt(strValue);
	var result = 1;
	var output = '';
	
	 for (var counter = 0; counter <= compute; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            output += ' ' + counter;
        }
    }



	resultFour.innerHTML = output;
	resultFour.setAttribute("opacity","0");
};