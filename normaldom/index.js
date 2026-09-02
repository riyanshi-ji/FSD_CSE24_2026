const root=document.getElementById('container');
const button=document.getElementById('btn');
console.log(root)
const h2=document.createElement('h2');
const img=document.createElement('img');
const div=document.createElement('div');

function showData(){
    try{
    // alert("hii");
    h2.innerText='Welcome to DOM';
    h2.style.color='red';
    h2.style.backgroundColor='yellow';
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkVXXpGs0EOJys7sb5hqNkJV_dojJOciO09NZ1Zfx9vTl52Pyf0MoOgpw&s=10';
    img.setAttribute('height','200px');
    img.setAttribute('width','200px');
    div.appendChild(img);
    div.appendChild(h2);
    div.style.border='2px solid black';
    root.appendChild(div);
    h2.remove();    // removing an element 
    }
    catch(e){
        console.log(e);
    }
    finally{

    }
}
button.addEventListener('click',showData);