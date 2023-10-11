
const bar1=document.querySelector('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');

if (bar1)
{
    bar1.addEventListener('click',function(){
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
