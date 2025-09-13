  //console.log("hello worled");
  //console.error('error');
  //console.warn("nor");
  //window.alert('heelo');
  //alert("helo");
  //data Tybes
  /**
   * number
   * string
   * boolean
   * undefined
   * null
   *
   */
  //console.log(typeof (null));
  //console.log("nourhan ahmed elteib %c front end developer","color:red");

  /*console.log(x);
  var x =12;
  let y=14;

 console.log(55.55.toFixed(1));
 console.log(Number.isInteger(" nourhan 123"));
 console.log(parseInt("nourhan 123"));

let str =' nourhan ahmed ';

console.log(str.length);
//console.log(str.charAt(5));
console.log(str.trim());
console.log(str.toUpperCase());
let mystr='narnora elteib';
console.log(mystr.lastIndexOf('n'))
console.log(mystr.slice(2,6));
console.log(str.indexOf(15))

let arr=[['nourhan','ahmed','omar','mohammed','amr','hossam'],['ahmed','omar','mohammed','amr','hossam']];
arr.pop();
console.log(arr.includes)
let nums=[2,9,5,3,1,6];
console.log(nums.sort().reverse())

function say(){
  console.log('hello worled');
}

say();
//caling or invoking function
function say(param){
 console.log('hi',param);
}
say('nourhan');

function add(a,b){
 return a+b;
}
console.log(add(3,5));

let sum=0;
function reat(...num){
  //console.log(Array.isArray(num));
  for(let i=0;i<num.length;i++){
    sum+=num[i];
  }
  return sum;
}

let res=reat(4,3,6,2,4);
console.log(res)

let summ =(a,b)=>{
return a*b;
}
console.log(summ(3,2));

*/

//higher order function == call back function -->
// map higher order function
//let newArr=[];
/*
for(let i=0;i<arr.length;i++){
  newArr.push(arr[i]*2);

}

let arr=[2,3,4,6];
console.log(arr);

 let newArr=arr.map( (element)=>{

return element*2;
 });

 console.log(newArr);

 let str="LamIAA";

 console.log(str.split("").join(''))
newStr=str.split("").map(function(element ,index,arr){

 return element ===element.toUpperCase() ?element.toLowerCase():element.toUpperCase();
});
console.log(newStr.join(''));

let nums=[-1,2,-4,2,6];
let newNums=nums.map((element)=>{

  return -element

})

console.log(newNums);

//isNan -->is not a number
//statWith--> stat with ...
let str="front34end88";

let strr=str.split("").map((element,index)=>{

if(parseInt(element)){

}
else{
  return element;
}

});
console.log(strr.join(''));

let friends =['nourhan ', 'ahmed','noureen','nour','ali'];

let arr=friends.filter(function(element,index,array){

 return element.startsWith('n');
});
console.log(arr);


let nums=[2,9,4,5,6];

let even=nums.filter(function(element){

  return (element%2===0) ;
})

console.log(even);

//split f there is nothing cut it into leters & if hers is one space then eill cut it into words

let str="I am a frontend web developer";

let strr=str.split(" ").filter((element,index,aray)=>{

 return element.length>4;
})

console.log(strr.join(' '));

// map not change in structure <-->
let str="front34end88";

let strr=str.split("").filter((element)=>{

if(parseInt(element)){

}
else{
  return element;
}

});
console.log(strr);


let nums=[2,3,2,5,8];  //20

let sum=nums.reduce((accum,currentVal,currIndex,sourceArray)=>{

  console.log(`this accum ${accum}`);
  console.log(`this currentVal ${currentVal}`);
  console.log(`this currIndex ${currIndex}`);
  console.log(`this sourceArray ${sourceArray}`);

  return accum+currentVal;
});

console.log(sum);

*

let arr=['i','am','frontend','web','developer'];

let bigWord=arr.reduce((accum,currentVal,currIndex,sourceArray)=>{

  return accum.length>currentVal?accum:currentVal;
});

console.log(bigWord);

let arr=['@','f','r','o','@','n','t','@'];

let letter=arr.filter((element)=>{

  return element.startsWith('@')!=true;

})
console.log(letter.join(''));
let bascket=['banana','apple','mango'];

bascket.forEach(function(element){

  console.log('i love ',element);

});\\*/


// let user={
//   name:'nourhan',
//   age:30,
//   isAdmin:true,
//   "likes birds":true,

//   adress:{
//     city:"qena",
//     street:"elnoor elmouhamady",
//   },

//   skills:['html','css','js','bootstrap'],


// };


// let users = Object.create(user);
// console.log(user);

// let x='name';

// let person=new Object();
// //console.log(user.adress.city);
// //console.log(user["adress"]["city"]);

// console.log(user[x]);

// let obj1={
//   a:2,
//   b:3
// }

// let obj2={
//   c:3,
//   b:2
// }
// let obj3={
//   c:3,
//   b:2,
//   a:10,
// }

// let obj=Object.assign({},obj1,obj2,obj3);
// console.log(obj);

// let header =document.getElementById('header');
// console.log(header)

// let para =document.getElementsByClassName('para')
// console.log(para)


// let paras=document.getElementsByTagName('p')
// console.log(paras[0]);

// let element =document.querySelector('p');

// element.textContent='<h2>hello worled</h2>';

// console.log(element);

// link=document.querySelector('a');


// link.setAttribute("href","https://drive.google.com/drive/folders/1d83jGNIqQJRL-WEGUpJoQU24cs-VuL66");
// console.log(link.getAttribute("href"));

// let span =document.createElement("span");
// span.textContent='hello narnora';
// // console.log(span)
// document.body.appendChild(span);

// let txt=document.createTextNode('hello worled');

// document.body.appendChild(txt);

// let element=document.getElementById("header");

// console.log(element.parentElement) 
// console.log(element.children) 
// console.log(element.nextElementSibling) 
// console.log(element.previousElementSibling) 
// console.log(element.nextSibling)
// console.log(element.previousSibling)
// console.log(element.classList)
//element.classList.add('')
// element.classList.add('active')
// console.log(element.classList)
// element.classList.toggle('test');
// element.style.color='red';
// element.style.fontSize='4px';

//let btn=document.getElementById('btn');

// btn.onmouseenter=() =>{
//   console.log('user mouse enter');
// }
// btn.onmouseleave=() =>{
//   console.log('user mouse leave');
// }
// btn.onclick=() =>{
//   console.log('user mouse cliecked1');
// }
// btn.onclick=() =>{
//   console.log('user mouse cliecked2');
// }

// btn.addEventListener("click",function(){
//   console.log('btn user clicked1');
// })
// btn.addEventListener("click",function(){
//   console.log('btn user clicked2');
// })
// btn.addEventListener("click",function(){
//   console.log('btn user clicked3');
// })
// btn.addEventListener("click",function(){
//   console.log('btn user clicked4');
// })

// window.onload=function(){
//   console.log('page loaded');
// }
// window.onscroll=function(){
//   console.log('page scroll');
// }
// window.resizeBy()=function(){
//   console.log('page resize');
// }

// let btnn=document.getElementById('bttn');
// bttn.onclick=(event)=>{
 
// //  event.preventDefault();
//     console.log('user clicked');
// }

//let products=document.querySelectorAll('.product-item');

// products.forEach((product)=>{
// //console.log(product);

// product.addEventListener("click",()=>{
//   console.log('product clicked :',product.textContent)
// })
// })

// let productContainer=document.querySelector('.product-container');


//  productContainer.addEventListener("click",(event)=>{
   
//   if(event.target.classList.contains("product-item")){
//     console.log(event.target);
//   }

//  })

// let parent=document.getElementById('parent').addEventListener("click",()=>{

//   console.log('parent clicked');
// })
// let child=document.getElementById('child').addEventListener("click",(e)=>{

//   e.stopPropagation();

//   console.log('child clicked');
// })

// window.alert('hello');

// let confirm=window.confirm('are you sure');
// console.log('true');

// let pro=window.prompt('enter your name');
// console.log(pro)

// let int1=setInterval(()=>{
// console.log('hello worled');
// },2000)
// console.log(int1);
// document.getElementById('clearInterval').addEventListener("click",()=>{
//   clearInterval(int1);
// })

// let time1=setTimeout(()=>{
// console.log("hello from setTimeOut in js file");
// },4000)

// document.getElementById('clearTimeOut').addEventListener("click",()=>{
//   clearTimeout(time1);
// })

// window.localStorage.setItem('myname','nourhan');
// window.localStorage.setItem('color','red');

// let item=window.localStorage.getItem('color');

// console.log(item)

// document.body.style.backgroundColor=item;

//modeifires:
/**
 * G : global
 * I : case insenstive
 * M : multiline search
 */

// let str="i'm a frontend developer, i love Frontend";

// let regex=/Frontend/g;
// let pattern= new RegExp("frontend");

// console.log(str.match(regex));
// console.log(regex.test(str));

///[abc]

// let sites='com org edu gov code net Info';

// let regex =/(Com|net)/gi;

// console.log(sites.match(regex));

// let nums = "12336LLpK*#@5";

// let pattern =/[Lp]/gi;

// console.log(nums.match(pattern));

/**
 * . => any char except new line
 * \d =>and char except
 * 
 */
// let emails ="n@@@@g....com H@ggg.com A@y.com o--g.org @.com 1@1.com";
// // let pat=/./gi;
// let pat=/\w(.com|.net)/gi;

// console.log(emails.match(pat));

/**
 * n+ =>one or more
 * n* =>0 or more
 * n? => 0 or one
 * 
 * 
 */
// let emails="n@h.com nour@gmail.com hossam@yahoo.net sherif@mail.ru";

// let pattern=/\w+@\w+.(com|net)/gi;

// console.log(emails.match(pattern));

// let nums="01110 10 150 1000 057350 00 "

// let pat=/0\d+0/gi;

// console.log(nums.match(pat));

// let url="https://google.com http://www.web.net website.com";

// let pattern=/(https?:\/\/(www)?.)?\w+.(com|net)/gi;
// console.log(url.match(pattern));
/**
 * n{x} => num of x
 * n{x,y} => range of times from x to y
 * n{x,} => at least x times
 */

// let serials="S100s S3000s S50000S s950000s"

// let pat=/s\d{5,}s/gi;
// console.log(serials.match(pat));



