let pre=document.getElementById('pre');
let next=document.getElementById('next');
let quse=document.getElementById('quse');


 let ques=document.createElement('div');
 ques.innerHTML=`
        
        <p>"Which HTML tag is used to create a hyperlink?"</p> 
        <p>"Which CSS property controls the text size?"</p>
        <p>"What is the correct HTML element for inserting a line break?"</p>
        <p>"Which JavaScript keyword is used to declare a variable?"</p>
 `

 let current=0;
  next.onclick=()=>{
   
  if (current < ques.children.length) { //4
    quse.innerHTML="";
   quse.appendChild(ques.children[current].cloneNode(true));
   current++;
   next.classList.remove('active');
   pre.classList.remove('active');
  } 
  if(current==4){
    next.classList.add('active');
  }
  
  
}
 function dispaly(){
    
    if(current==0){
         pre.classList.add('active');
    }
   else if(current==3){
    next.classList.add('active');
   }
   else{
    pre.classList.remove('active');
    next.classList.remove('active');
   }
 }
 ()=>{
  console.log('hello');
 }
pre.onclick=()=>{
     if(current>0){
      current--;
       quse.innerHTML="";
       quse.appendChild(ques.children[current].cloneNode(true));
       
       pre.classList.remove('active');
       next.classList.remove('active');
     }
     else{
       pre.classList.add('active');
     }
 
 
}

   
function nour(){
  console.log('hellll');
}
