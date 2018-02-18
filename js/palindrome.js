

var palindrome = document.getElementById("palindrome");
var resultThree = document.getElementById("result-three")

var paliSubmit = document.getElementById("pali-submit");
paliSubmit.onclick = function(){

	var strValue = palindrome.value;
	var compute = parseInt(strValue);
	var result = 1;
	var output='';
	var len = palindrome.value.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (strValue[i] !== strValue[len - 1 - i]) {
            result = 0;
        }
    }
    if (result==0) {
    	output = "number is not palindrome";
    }else {
    	output = "number is palindrome";
    }





	resultThree.innerHTML = output;
	resultThree.setAttribute("opacity","0");
};