num1 = prompt("Enter a Nth term of fibonacci");

var a=0, b=1, next=0;
var string1= "";

if(num1<1){
    console.log("Please enter number greater than ZERO");
}

else{
       

    for(i=1; i< num1; i++){
        string1= (string1 + b + " ");
	next = a + b;
	a = b;
	b = next;
	
    }
    alert("The " + num1+"th" + " term in fibonacci series is = " + a)
    
}
