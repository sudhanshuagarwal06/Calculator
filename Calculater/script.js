var firstOperant = 0;
var secondOperant = 0;
var opType = "";

function setOperation(opSymbol)
{

	firstOperant = document.getElementById('displayMain').innerHTML;
	opType = opSymbol;
	document.getElementById('displayTop').innerHTML = firstOperant + opType;
	document.getElementById('displayMain').innerHTML = '0';
	
}

function clearDisplay() 
{
	
	document.getElementById('displayMain').innerHTML = '0';
	document.getElementById('displayTop').innerHTML = '0';
	firstOperant = 0;
	secondOperant = 0;
	opType = "";
	
}

function inputDigits(addedNumber)
{
	
	var currentnumber;
	currentNumber = document.getElementById('displayMain').innerHTML;
	currentNumber = currentNumber + addedNumber;
	currentNumber = trimLead(currentNumber);
	document.getElementById('displayMain').innerHTML = currentNumber;
	
}

function trimLead(displ) 
{
	
	if ((displ.startsWith('0')) && !(displ.startsWith('0.')))
	{
		newNum = displ.substr(1);
		return newNum;
	} 
	else 
	{
		return displ;
	}
	
}

function insertDecimal(x) 
{
	
	var Currentnumber;
	currentNumber = document.getElementById('displayMain').innerHTML;
	if (!(currentNumber.includes('.')))
	{
		inputDigits(x);
	}
}

function opDivide() 
{
	if (secondOperant == 0) 
	{
		alert("DIVIDE BY 0 ERROR");
	} 
	else 
	{
		document.getElementById('displayMain').innerHTML = firstOperant / secondOperant;
		document.getElementById('displayTop').innerHTML = firstOperant + opType + secondOperant + '=';
	}
}

function opMultiply() 
{
	document.getElementById('displayMain').innerHTML = firstOperant * secondOperant;
	document.getElementById('displayTop').innerHTML = firstOperant + opType + secondOperant + '=';
}

function opSubstract() 
{
	document.getElementById('displayMain').innerHTML = firstOperant - secondOperant;
	document.getElementById('displayTop').innerHTML = firstOperant + opType + secondOperant + '=';
}

function opAdd() 
{
	document.getElementById('displayMain').innerHTML = Number(firstOperant) + Number(secondOperant);
	document.getElementById('displayTop').innerHTML = firstOperant + opType + secondOperant + '=';
}

function opPower() 
{
	//var multi=1;
	/*for(int i=0;i<secondOperant;i++)
	{
		multi = multi * firstOperant;
	}*/
	document.getElementById('displayMain').innerHTML = Math.pow(firstOperant,secondOperant);
	document.getElementById('displayTop').innerHTML = firstOperant + opType + secondOperant + '=';
}

function opMod() 
{
	document.getElementById('displayMain').innerHTML = Number(firstOperant) % Number(secondOperant);
	document.getElementById('displayTop').innerHTML = firstOperant + opType + secondOperant + '=';
}

function calculateTotal() 
{
	secondOperant = document.getElementById('displayMain').innerHTML;
	switch (opType) {
		case '/':
			opDivide();
			break;
		case '*':
			opMultiply();
			break;
		case '+':
			opAdd();
			break;
		case '-':
			opSubstract();
			break;
		case '^':
			opPower();
			break;
		case '%':
			opMod();
			break;
	}
}