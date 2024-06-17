/* 

console.log("hello")

window.alert("this is an alert")

// single line comment


mutli line

comment





document.getElementById("header1").textContent = "hello edit"
document.getElementById("para2").textContent = "lorem1"




let x ;

x = 100 ;



console.log(x)

console.log(typeof x)

console.log(`your age is ${x}`)





// variables and strings and boolean


let name1 = "hemant"
let marks =  100
let lastname = "singh"
let age = 25
let truth = true




document.getElementById("header1").textContent = `Name is : ${name1}`
document.getElementById("para2").textContent = `marks is : ${marks}`
document.getElementById("lastname").textContent = `last name is : ${lastname}`
document.getElementById("age").textContent = `age is : ${age}`
document.getElementById("")





// enter username

let username;

username = window.prompt("enter username :");



console.log(`your username ${username}`);



//


let inp

document.getElementById("mysubmit").onclick = function(){

    inp=document.getElementById("myinput").value;
    document.getElementById("header1").textContent = `Hi ${inp}`;

}





// type converstion


let x , y, z ;

x = 1
y = "abc";
z = true


x = String(x) 
y = Number(y)

console.log(x,typeof x)
console.log(y,typeof y)
console.log(z,typeof z)




// program to calculated radius of a circle

const PI = 3.14;
let cir;
let radius;


//radius = window.prompt("enter your radius:");
radius = Number(radius);


cir = 2*PI*radius;
console.log(cir);



document.getElementById("mysubmit").onclick = function(){


    radius = document.getElementById("myinput").value;
    radius =  Number(radius);

    cir = 2*PI*radius

    document.getElementById("myoutput").textContent = `the circ is ${cir}`
    
}



//wap to increase and decrease counter



let counter
counter = 0 ;

const increase = document.getElementById("increaseBtn")
const decrease = document.getElementById("decreaseBtn")
const reseter = document.getElementById("resetBtn")
const counterlabel =  document.getElementById("countLabel")


increase.onclick = function(){
    counter++;
    counterlabel.textContent = counter
}

decrease.onclick = function(){
    counter--;
    counterlabel.textContent = counter
}

reseter.onclick = function(){
    counter = 0;
    counterlabel.textContent = counter
}





//roll a dice


const roller =  document.getElementById("myButton");
const value = document.getElementById("myLabel");
let rand = 0;
const max = 6;
const min = 1;
let logic = 0

roller.onclick = function(){

    logic = Math.floor(Math.random() * max ) + min;
    value.textContent = logic;

}





//vote elgiobility script

const age = document.getElementById("myinput");
const button1 = document.getElementById("mybutton");
const output1 = document.getElementById("myoutput");


button1.onclick = function(){
    console.log(age.value)

    if(age.value>=100){

        output1.textContent = "age is greater than 100";
    }

    else if(age.value == 0){

        output1.textContent = "age is invalid ";

    }

    else if(age.value >=18){

        output1.textContent = "eligilble to vote";
    }

    else if (age.value <18){

        output1.textContent = "ineligible for voting";
    }
    else{

        output1.textContent = "enter correct age"
    }

}






const mycheckbox = document.getElementById("mycheckbox")
const visabutton = document.getElementById("visabutton")
const masterclassbtn = document.getElementById("masterclassbtn")
const paypalbtn = document.getElementById("paypalbtn")
const mysubmit = document.getElementById("mysubmit")
const subresult = document.getElementById("subresult")
const paymentresult = document.getElementById("paymentresult")





mysubmit.onclick = function (){


    if(mycheckbox.checked){

        subresult.textContent = " you are subbed"

    }

    else{

        subresult.textContent = " you are not subbed"
    }


    if(visabutton.checked){

        paymentresult.textContent = " visa mode"
    }

    else if(masterclassbtn.checked){

        paymentresult.textContent = " mastercard mode"
    }

    else if(paypalbtn.checked){

        paymentresult.textContent = " paypal mode"
    }

    else{

        paymentresult.textContent = " please select a valid payment mode"
    }


}

//ternary operator


let age = 18 ;
let elegibility = age >= 18 ? "eligible": "not eligible" 
console.log(elegibility)



// switch case method

let testscore = 70;
let grade;



switch(true){

    case testscore >= 90:
        console.log("grade A");
        break;
    
    case testscore >= 80:
        console.log("grade B");
        break;

    case testscore >= 70:
        console.log("grade C");
        break;
    
    case testscore >= 60:
        console.log("grad D");
        break;
    default:
        console.log("fail")
        break;
}


// string method




const email = "bro@gmail.com";
let username = email.slice(0,email.indexOf("@"));
let mailadd =  email.slice(email.indexOf("@")+1);

console.log(username);
console.log(mailadd);




let fullname = window.prompt("enter your username :");
fullname = fullname.trim();

let firstname = fullname.charAt(0).toUpperCase();
let restname = fullname.slice(1).toLocaleLowerCase();
let capName = firstname.concat(restname);



//method chaining

let fullname = window.prompt("enter your username :");


let capName = fullname.trim().charAt(0).toUpperCase() + fullname.trim().slice(1).toLowerCase();

console.log(capName)




//logical operators



const isSunny =  true;


if(!isSunny){

    console.log("it is sunny");
}

else{

    console.log("it is not sunny");
}








// equality vs strict equality operator




const PI = 3.14;


if(PI == "3.14"){

    console.log("is is equal");
}
else{

    console.log("not equal")
}


if(PI === ""){

    console.log("not equal due to strict condition")
}
else{

    console.log("equal due usingstrict condition")
}




// while loop

let username;




while (username === "" || username === null || username === undefined){

    username = window.prompt("enter your username : ");
}


console.log(username);





// while loop 2




let loggedin = false
let user = ""
let pass = ""


while(!loggedin){


    user = window.prompt("enter user :")
    pass = window.prompt("enter pass :")


    if(user === "user1" && pass === "pass1"){

        loggedin = true
        console.log(`you have logged in ${user}`)
    }
    else{
        console.log("please enter correct crednetials")
    }
}




// for loop



let i = 1;


for( i=1 ; i<21 ; i++ )
    {

    if(i == 13){
        continue;
    }
    console.log(i);

}
console.log("happy new year !!");



let j = 1;


for( j=1 ; j<21 ; j++ )
    {

    if(j == 13){
        break;
    }
    console.log(j);

}
console.log("happy new year !!");







// number guessing game 

const minnum = 1 ;
const maxnum = 3 ;
const answer = Math.floor(Math.random()*(maxnum-minnum+1)) + minnum;
console.log(answer)
running = true


while(running){

    let numb = window.prompt(`enter number between ${minnum} and ${maxnum}`);

    if(isNaN(numb)){

        console.log("enter a not a valid number");

    }
    else if(numb > maxnum || numb < minnum){

        console.log(`please a valid number in the range ${minnum} and ${maxnum}`);
    }

    else{

        if(numb>answer){
            console.log("number too high");
        }

        else if(numb<answer){

            console.log("number too low");
        }
        else{
            console.log(`${numb} is matched`);
            running = false;
        }

    }

}





// function in js



function add(a,b){

    return a + b;
}

console.log(add(1,6))


function isEven(a){

    if(a%2 == 0  && a >0){

        return 'it is even'
    }
    else if(a<=0){
        return "please enter number greater than 0"
    }
    else{

        return 'not even'
    }
}


console.log(isEven(0))

function isEven(a){

    res = a%2 === 0 ? true : false

    return res
}


console.log(isEven(8))


*/


//

const inp = document.getElementById("myInput");
const far= document.getElementById("tof");
const cel = document.getElementById("toc");
const check = document.getElementById("check");
const out= document.getElementById("output");



check.onclick = function(){
    temp = inp.value;

    if(isNaN(temp)){

        output = "not a number";

        out.textContent = ` ${temp} is not a valid input `;
    }

    else if(far.checked){

        output = (temp * (9/5))+32;
        out.textContent = ` ${output} F `;

    }
    else if (cel.checked){

        output = (temp -32)*(5/9);

        out.textContent = ` ${output} C `;
    }
    else
    {

        console.log("please check the radio box");
    }
}

