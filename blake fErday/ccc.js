let a=document.querySelectorAll("h1");
console.log(a[3])

function aa(){
    a[3].innerHTML-=1;
    if (a[3].innerHTML==="0"){
      a[3].innerHTML=59;
      a[2].innerHTML-=1;

      if(a[2].innerHTML==="0"){
      a[2].innerHTML=59;
      a[1].innerHTML-=1;
      }
      if(a[1].innerHTML==="0"){
        a[1].innerHTML=59;
        a[0].innerHTML-=1;
        }
        
      
    }
  
}












































































































































































































































let S=setInterval(aa,1000);