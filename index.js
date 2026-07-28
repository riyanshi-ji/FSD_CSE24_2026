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
loginHandler("riya","12345",login) //with incorrect details