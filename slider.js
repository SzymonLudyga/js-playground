function checking(){
	
	let numberOne = document.getElementById("firstValue").value;
	let numberTwo = document.getElementById("secondValue").value;

	// document.write(number);
	let finalResult = "";
	if (numberOne > numberTwo)
	{
		for (let i = numberOne; i >= numberTwo; i--)
		{
			finalResult = finalResult + i + " ";
		}
		document.getElementById("result").innerHTML = finalResult;
	}
	else if (numberOne < numberTwo)
	{	
		for (let i = numberOne; i <= numberTwo; i++)
		{
			finalResult = finalResult + i + " ";
		}
		document.getElementById("result").innerHTML = finalResult;
	}
	else if (numberOne == numberTwo)
	{
		document.getElementById("result").innerHTML = "Takie same";
	}
	else if (isNaN(numberOne))
	{
		document.getElementById("result").innerHTML = "W lewym nie jest liczbą";
	}
	else if (isNaN(numberTwo))
	{
		document.getElementById("result").innerHTML = "W prawym nie jest liczbą";
	}
	
	// if (numberOne > numberTwo) document.getElementById("result").innerHTML = "first one is bigger";
	// else if (numberOne < numberTwo) document.getElementById("result").innerHTML = "second one is bigger";
	// else document.getElementById("result").innerHTML = "it's the same";
}