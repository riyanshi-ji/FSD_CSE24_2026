const container=document.getElementById("container");
const button=document.getElementById("btn");
const h1=document.createElement('h1');
h1.innerHTML="RIYANSHI JAIN";
const h2=document.createElement('h2');
h2.innerHTML="ABES Engineering College";
const h3=document.createElement('h3');
h3.innerHTML="B.Tech CSE 2024-2028";
const h4=document.createElement('h4');
const loader=document.createElement('h2');
container.appendChild(loader);
function ping(){
    try{
        loader.innerHTML='<h2>Loading...</h2>';
        container.appendChild(h1);
        container.appendChild(h2);
        container.appendChild(h3);
        container.appendChild(h4);
    }
    catch(err){
        loader.innerHTML='<h2 style="color:red">Error: '+err+'</h2>';
    }
    finally{
        loader.innerHTML='<h2>Loaded!</h2>';
    }
}
button.addEventListener('click',ping);