
var factorial = document.getElementById("factorial");
var resultOne = document.getElementById("result-one")

var factSubmit = document.getElementById("fact-submit");
factSubmit.onclick = function(){

	var strValue = factorial.value;
	var compute = parseInt(strValue);
	var result = 1;
	for(var i=1;i<=compute;i++)
	{
		result *= i;
	}

	resultOne.innerHTML = result;
	resultOne.setAttribute("opacity","0");
};