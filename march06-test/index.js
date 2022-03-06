function samsung_show(){
    refrence()

    samsung.classList.replace("details_hide", "samsung")
    apple.classList.replace("apple","details_hide");
    oneplus.classList.replace("oneplus","details_hide");
    realme.classList.replace("realme","details_hide");
    

}


function apple_show(){
    refrence()

    samsung.classList.replace("samsung", "details_hide");
    apple.classList.replace("details_hide","apple");
    oneplus.classList.replace("oneplus","details_hide");
    realme.classList.replace("realme","details_hide");
}

function oneplus_show(){
    refrence()

    samsung.classList.replace("samsung", "details_hide");
    apple.classList.replace("apple","details_hide");
    oneplus.classList.replace("details_hide","oneplus");
    realme.classList.replace("realme","details_hide");
}


function realme_show(){
    
    refrence()
    samsung.classList.replace("samsung", "details_hide");
    apple.classList.replace("apple","details_hide");
    oneplus.classList.replace("oneplus","details_hide");
    realme.classList.replace("details_hide","realme");
}

function refrence(){
    var samsung = document.getElementById("samsung");
    var apple = document.getElementById("apple");
    var oneplus = document.getElementById("oneplus");
    var realme = document.getElementById("realme");
}


function show(refdata){
    var data = document.getElementById(refdata);

    if(data.classList.contains("details_hide")){
        data.classList.replace("details_hide","details_show");
    }

    else{
        data.classList.replace("details_show","details_hide");
    }
}