let ipbox=document.querySelector("#input-box");
let list=document.querySelector("#list");
function addTask(){
    if(ipbox.value===""){
        alert("You must write something");
    }
    else{
      let listitem=document.createElement("li");
     
       let span1=document.createElement("span");
        span1.setAttribute("id","abc");
       span1.innerHTML=ipbox.value;
       listitem.appendChild(span1);
       let span2=document.createElement("span");
       span2.setAttribute("id","def");
       span2.innerHTML="\u00d7";
       listitem.appendChild(span2);
       list.appendChild(listitem);
   
    
    
   
   
    }
    ipbox.value="";
    storedata();
}
list.addEventListener("click",function(e){
    if(e.target.id === "abc"){
        e.target.classList.toggle("checked");
        storedata();
    }
    else if(e.target.id === "def"){
        e.target.parentElement.remove();
        storedata();
    }
},false);
function storedata(){
    localStorage.setItem("data",list.innerHTML);
}
function showdata(){
    list.innerHTML=localStorage.getItem("data");

} 
showdata();


