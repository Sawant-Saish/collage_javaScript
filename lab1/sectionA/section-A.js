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


function factorial(){

}