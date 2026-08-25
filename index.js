// console.log("Hello, welcome!!");

// const sum=function sum(a,b){
//   return Math.sqrt(a)+Math.sqrt(b);
// }
//console.log(sum(4,9));

// const sum=(a,b)=>{return a+b};
// console.log(sum(4,9));

// (()=>{
//     console.log("Hey, I'm an IIFE function");
// })(); 

// var a=23;
// if(a<40){
//     var a=40;
//     console.log("value of a inside block="+a);
// }
// console.log("value of a outside block="+a);

// let a=23;
// if(a<40){
//     let a=40;
//     console.log("value of a inside block="+a);
// }
// console.log("value of a outside block="+a);

// function sum(a,b){
//     return a+b;
// }
// function msgWithsum(clbk,msg){
//     const result=clbk(40,50);
//     console.log("Hii, "+msg+" your result is="+result);
// }
// msgWithsum(sum,"Riyanshi");

function login(error,msg){
    if(error){
        console.log("Error is: "+ error);
    }
    else{
        console.log(msg);
    }
}
function loginHandler(username,password,clbk){
    if(username=="riya_ji" && password=="12345"){
        clbk(null,"LOGIN SUCCESSFUL!!")
    }
    else{
        clbk("Username or password is incorrect", null)
    }
}
// loginHandler("riya_ji","12345",login) // with correct details
// loginHandler("riya","12345",login) //with incorrect details

// console.log("one");
// for(i=0;i<1000;i++){
//     console.log("i="+i);
// }
//  setTimeout(()=>{console.log("two")},1000) (asynchronous function)
//  console.log("three");


const container=document.getElementById("container");
const button=document.getElementById("btn");
    const h1=document.createElement('h1');
    console.log(h1);
    h1.innerText="ABESEC";
    const loader=document.createElement('h2');
    container.appendChild(loader);
    const img=document.createElement('img');
// console.log(container);
// console.log(button);
function ping(){
    // alert("server ping")
    try{
    container.innerHTML='<h2 style="color:red">Welcome to DOM</h2>';
    h1.style.backgroundColor="yellow";
    h1.style.color="blue";
    container.appendChild(h1);
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn7MzvDzec0gUA_h4mHK2IOxXCce7oMpnKqR3dP5FwAw&s=10";
    img.setAttribute("width",200);
    img.setAttribute("height",200);
    container.appendChild(img);
}
    catch(err){
        loader.innerHTML='<h2 style="color:red">Error: '+err+'</h2>';
    }
    finally{
        loader.innerHTML='<h2>Loaded!</h2>';

}
}

button.addEventListener('click',ping);