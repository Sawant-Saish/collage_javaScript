function checkNumber(){
	const num = prompt ("Enter the number");

	if(num%2===0){
		alert("Number is even");}
	else{
		alert("Number is odd");
	}
}


function largestOfThree(){
	const a = prompt("enter number a");
	const b = prompt("enter number b");
	const c = prompt("enter number c");

	if (a >= b) {
        	if (a >= c)
            		alert(a + " is the largest number.");
        	else
            		alert(c + " is the largest number.");
    	}
    	else {
        	if (b >= c)
           		alert(b + " is the largest number.");
        	else
            		alert(c + " is the largest number.");
    }

}


function calculate(){
	const a = Number(prompt("enter first number"));
	const b = prompt("enter the operation");
	const c = Number(prompt("enter the second number"));

	switch(b) {
	case '+': alert(a+c);
		  break;
	case '-': alert(a-c);
		  break;
	case '*': alert(a*c);
		  break;
	case '/': alert(a/c);
		  break;
	default: alert("Enter the vaild operation");
	}	
}


function dayOfWeek(){
	const d = new Date();
	const s = d.getDay();

	switch(s) {
	case 0: alert("today is sunday");
		  break;
	case 1: alert("today is monday");
		  break;
	case 2: alert("today is tuesday");
		  break;
	case 3: alert("today is wednesday");
		  break;
	case 4: alert("today is thusday");
		  break;
	case 5: alert("today is friday");
		  break;
	case 6: alert("today is saturday");
		  break;
	default: alert("Enter the vaild operation");
	}
}

function getGrade(){
	const num = Number(prompt ("Enter the marks obtained"));

	if(num > 90 && num <= 100){
		alert("O grade");
	}
	else if(num > 80 && num <= 90){
		alert("A+ Grade");
	}
	else if(num > 70 && num <= 80){
		alert("A Grade");
	}
	else if(num > 60 && num <= 70){
		alert("B+ Grade");
	}
	else if(num > 50 && num <= 60){
		alert("B Grade");
	}
	else if(num > 40 && num <= 50){
		alert("C Grade");
	}
	else {
		alert("Better try next time");
	}
}


function factorial() {
	const n = Number(prompt("Enter the number"));
	let fact = 1;
	for(i=1;i<=n;i++){
		fact *= i;
	}
	alert("The factorial of "+ n + " is "+ fact);
}


function numbers(){
	const n = Number(prompt("Enter the break number"));
	let arr=[];
	for(i=0;i<10;i++){
		if(i+1 == n){
			break;
		}
		arr[i]=i+1;
	}
	alert(arr);
}


function numbers1(){
	const n = Number(prompt("Enter the number to skip"));
	let arr=[];
	for(i=0;i<10;i++){
		if(i+1 == n){
			continue;
		}
		else if(i+1 == 8){
			break;
		}else{
			arr[i]=i+1;
		}
	}
	document.querySelector(".parctice-break-continue").innerHTML=arr;
}

function menuApp(){
	let choice;

do {
  choice = parseInt(prompt("Menu:\n" +"1. Addition\n" +"2. Subtraction\n" +"3. Multiplication\n" +"4. Division\n" +"5. Exit\n" +"Enter your choice:"));

  switch (choice) {
    case 1:
      let a1 = parseFloat(prompt("Enter first number:"));
      let b1 = parseFloat(prompt("Enter second number:"));
      alert("Result = " + (a1 + b1));
      break;

    case 2:
      let a2 = parseFloat(prompt("Enter first number:"));
      let b2 = parseFloat(prompt("Enter second number:"));
      alert("Result = " + (a2 - b2));
      break;

    case 3:
      let a3 = parseFloat(prompt("Enter first number:"));
      let b3 = parseFloat(prompt("Enter second number:"));
      alert("Result = " + (a3 * b3));
      break;

    case 4:
      let a4 = parseFloat(prompt("Enter first number:"));
      let b4 = parseFloat(prompt("Enter second number:"));
      if (b4 !== 0) {
        alert("Result = " + (a4 / b4));
      } else {
        alert("Division by zero not allowed");
      }
      break;

    case 5:
      alert("Exiting program...");
      break;

    default:
      alert("Invalid choice. Try again.");
  }

} while (choice !== 5);
}

function loadPage(){
		window.location.href = "quiz.html";
}