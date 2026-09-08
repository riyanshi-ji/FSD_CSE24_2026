// console.log("hiii!!");
const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
// const h2=React.createElement('h2',{style:{color:'red'}},'Welcome to React App Developement');
// const h1=React.createElement('h1',{style:{color:'blue'}},'ABES Engineering College');
// const img=React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkVXXpGs0EOJys7sb5hqNkJV_dojJOciO09NZ1Zfx9vTl52Pyf0MoOgpw&s=10',style:{height:'200px',width:'200px'}});
const h21=<h2>Hello Riyanshi baby</h2>; //JSX syntax
//const div=React.createElement('div',{style:{backgroundColor:'yellow',border:'2px solid brown'}},img,h1,h2);
const h22=<h2>ABES Engineering College</h2>
const div=<div>{h21} {h22}</div>
const wrapper=<div style={{border:'2px solid red',backgroundColor:'yellow'}}>
{div}
<h2>Hey using JSX</h2>
</div>
root.render(wrapper);