//                JAVA SCRIPT CRASCOURSE


// 1. ways to print in javascript
// console.log("hello world");
// alert("me");
// document.write("this is a document")


// 2. javascript console API
// console.log gives the output only in the console area of the web
// console.log("Hello World");
// console.warn("This is a warning");
// console.error("This is an error");
// console.assert(4 == 4);


// 3. javascript variables 
// What are variables?- containers to store values
var number1 = 34;
var number2 = 76;
console.log(number1 + number2);



// 4. Data types in javascript 
    //  strings 
var str1 = "this is a string";
var str2 = "this is also a string";
    //  numbers 
var num1 = 44;
var num2 = 34.87;
    // objects 
var marks = {
    ravi: 78,
    shubham: 56,
    jol: 89.988
}
console.log(marks);

    //  booleans 
var a = true;
var b = false;
// here the value of und is undefined by start 
var und = undefined;
var und;
var n = null;
console.log(und, n)
/*

At a very high level, there are two types of data types in js
 1. primitive data types: undefined, null, numbers, string, boolean, symbol  
 2. Reference data types: arrays and objects 

*/ 


// 5. Arrays 
var arr = [1, 2, 3,"loll", 4, 5, 6,]



// 6. Operators in js 
    // Arthimetic operators
var c = 55;
var d = 44;
console.log("the value of c + d is", c+d);
console.log("the value of c - d is", c-d);
console.log("the value of c * d is", c*d);
console.log("the value of c / d is", c/d);

    //  Assignment Operators 
var c = d;
c += 2;
c -= 2;
c *= 2;
c /= 2;
console.log(c);

    //  Comparison operator 
var x = 88;
var y = 33;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

    // Logical operators 
            //  AND 
           // both should be true to return TRUE 

console.log(true && true); 
console.log(false && true);
console.log(false && false);
            //  OR 
            // anyone can be true to return TRUE 
console.log(true || true); 
console.log(true || false); 
console.log(false || false); 
            // NOT
            // gives opposite results 
console.log(! true); 
console.log(! false);


// 7. Functions in js 
function avg(a, b){
    return (a + b)/2;
}
c1 = avg(3,9);
c2 = avg(7,46);
console.log(c1, c2);


// 8. Conditonals in js 
    // it has if, if-else, if-else-if 
var age = 4;
if(age > 8){
    console.log('you are not a kid');
}
else{
    console.log('you are a kid');
}

// LOOPS IN JS 
    //  FOR LOOP 
    var arr = [1, 2, 3, 4, 5, 6, 7];
    console.log(arr);
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(function(element){
    console.log(element);
})
// var ka scope function ke bahar khatam ho jata h 
    //   WHILE LOOP 
let j = 0;
// "const" is used to make a variable constant and doesn't let us rewrite it 
while(j < arr.length){
    console.log(arr[j]);
    j++;
}
       
     //  DO-WHILE LOOP 
do{
    console.log(arr[j]);
    j++;
} while(j<arr.length);


// 9. METHODS ON ARRAY 
let myarr = ["fan", "camera", 34, null, true];
let  ab = [21, 2, 44, 6566, 9, 1];

      // console.log(myarr.length); 
      // myarr.pop(); to take a element FROM LAST OUT 

      // myarr.push("lol"); to ADD element AT LAST

      // myarr.shift(); removes the FIRST elemnet 

      // myarr.unshift("lol"); ADD the element in FIRST POSITION 

      // console.log(myarr.unshift("lol")); this RETRUNS THE LENGTH + SAME FNC AS UNSHIFT 

      // myarr.toString(); converts everything as a string

console.log(ab.sort());
console.log(myarr);


// 10. STRING METHOS IN JAVA 
let str = "coding is cool and nice to do"

      console.log(str.length);

    //   console.log(str.indexOf("cool")); returns the FIRST INDEX 

      // console.log(str.lastIndexOf("cool")); return THE LAST INDEX 

      console.log(str.slice(0,5)); 

      o = str.replace("coding", "how");
      console.log(o, str);
      // but it REPLACES only one occurence of word 


// 10. DATE IN JS 

     let mydate = new Date();
     console.log(mydate.getTime());
// many more methods of date are there to be explored >3


// 11. DOM MANIPULATION METHOD 
        // DOM IS DOCUMENT OBJECT MODEL 
        // is used in documents to manipulate them expecially their html 

    // by id 
    let elem = document.getElementById('click');
    console.log(elem);

    // by classes 
    let elemclass = document.getElementsByClassName('container');
    console.log(elemclass);

    // can change the bg by targestin the element 
    // elemclass[0].style.background = "yellow";

    // can add one class to another by "classlist add"
    elemclass[0].classList.add('bg') 
    elemclass[0].classList.add('text-success') 

    // to print inner text or html 
    console.log(elemclass[0].innerText);
    console.log(elemclass[0].innerHTML);

    console.log(elem.innerText);
    console.log(elem.innerHTML);

    // get by tag name 
    tn = document.getElementsByTagName('div')
    console.log(tn)

    // how to add synthetic paras and more created things from here only 
    // made a element through js and fit it in
    // tn[0] aka ist div 
    createdElement = document.createElement('p')
    createdElement.innerText = "this is a created parah"
    tn[0].appendChild(createdElement);

    createdElement2 = document.createElement('b')
    createdElement2.innerText = "this is a created parah"
    tn[0].appendChild(createdElement2);

    // to replace two made childs 
    tn[0].replaceChild(createdElement2, createdElement);


    // SELECTING USING QUERY 
            //   returns only one element 
    sel = document.querySelector('.container')
    console.log(sel);

                //   returns only all elements 

    sel = document.querySelectorAll('.container')
    console.log(sel);
     

    // this is the fnc we can setup for the events 
    function clicked(){
        console.log('the button was clicked');
    }
    
    window.onload = function(){
        console.log('the document was loaded');
    }


// 11. EVENTS IN JS 
// if we want to customize all the movements and responses according to it are called events 

  firstcontainer.addEventListener('click', function(){
    // here we have added a special fnc to pop when we do this specific task 
    document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
    console.log('click on container');
  })

  firstcontainer.addEventListener('mouseover', function(){
    console.log('Mouse on container');
  })

// here the first in bracket of "addEventListener" is THE PLACE ON WHIC WE WANT TO APPLY FNC and 2nd is the fnc itself 

  firstcontainer.addEventListener('mouseout', function(){
    console.log('Mouse out of container');
  })

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;



// this here small way to show first we had store our previous html that was used in MOUSE DOWN and when MOUSE UP is used due to we resetting the new html to old, the result interchanges frequently 

   firstcontainer.addEventListener('mouseup',   function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log('Mouse up when clicked on container');
   })


   firstcontainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
    console.log('Mouse down when clicked on container');
   })


// 12.  ARROW FUNCTIONS 
     // the fnc can be defined neatly or by shortcut for arrow fncs 
      function summ(a, b){
     return a+b;
     }

     summ = (a,b)=>{
    return a+b;
     }


// 13. SET TIME AND SET INTERVAL()
      // in "setTimeout's" bracket the first will be A FUNCTION and 2nd will be AFYER HOW MILISECONDS WE WANT TO RUN IT

      logkaro1 = ()=>{
        document.querySelectorAll('.container')[1].innerHTML = "<b>a set interval fired </b>"
        console.log("I am your log");
      }
      setTimeout(logkaro1, 2000);
       
      //  the "set interval()" fnc repeats itself after the given time 
      logkaro2 = ()=>{
        document.querySelectorAll('.container')[1].innerHTML = "<b>a set interval fired </b>"
        console.log("I am your log");
      }

     clr = setInterval(logkaro2, 2000);

      //   if you want to stop this "setInterval()" pass the values of this to another fnc which is "clearInterval()"
      //  same can be done with "timeout()" with "cleartimeout()"

    
// 14. JS LOCALSTORAGE 
    //  it helps you store the date in user's base in form of a sting 
    // can add lot of data but avoid doing that just store only necessary items 

    localStorage.setItem('name', 'Muskan');
    localStorage.getItem('name');
    localStorage.removeItem('name');
    localStorage.clear();


// 15. JSON (JAVASCRIPT OBJECT NOTATION)
    //  a open standard file format, used to exchange data 
    // we can convert json into string -- transport it -- then use it as js object 

    obj = {name: 'Muskan', length: 1, 
    a : {"this ":"that"}};
    // CONVERTS IT INTO STRING 
    jso = JSON.stringify(obj); 
    console.log(jso);

    parsed = JSON.parse(`{name: 'Muskan', length: 1, 
    a : {"this ":"that"}}`) 
    console.log(parsed);