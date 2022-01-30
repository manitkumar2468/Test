num1 = prompt("Enter a positive number");
num1 = parseInt(num1);

var counter = 0;

for(i=1; i<=num1; i++){
    for(j=1; j<=i; j++){
        if(i%j == 0){
            counter = counter +1 ;
        }
    }
    
    if(counter <=2){
	console.log(i)
    }

    counter = 0;
}