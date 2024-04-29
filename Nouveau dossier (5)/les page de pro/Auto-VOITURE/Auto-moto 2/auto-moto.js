function change() {
    window.alert('mazal makhadamach had l3ayba');
}






var tsawarr = document.querySelectorAll('.imgbg')
var smartphone = document.getElementById('smartphones');




window.onload = function(){

    setTimeout(function(){
        document.body.style.opacity = 1;
        document.body.style.filter = 'none'
    } , 500)

    setTimeout(function(){

        tsawarr.forEach(imageElement => {
            imageElement.style.opacity = 1;
            imageElement.style.filter = 'none' ;
        })
        
                
            
    } , 2000)

    setTimeout(function(){
        let buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
        button.style.filter = 'none';
    });

    } , 3000)

    
    setTimeout(function(){
        smartphone.style.backgroundSize = '640px';
        smartphone.style.backgroundPositionX= '-12px';
        smartphone.style.backgroundPositionY= '-5px';
        if(smartphone){
            console.log('done')
        }
        
      
    }, 3000);

    setTimeout(function(){
        for (let i = 0; i < tsawarr.length; i++) {
        tsawarr[i].style.transition = '0.3s';
        
     }
    } , 4000)

}



function Tla3Lfo9(){
    let tla3 = document.querySelector('.tla3')
    if(window.scrollY >= 100){
        // tla3.style.opacity = 1
        tla3.style.filter = 'none'
        
    }else{
        
        // tla3.style.opacity = 0
        tla3.style.filter = 'blur(100px)'
    }
    
}
window.onscroll = Tla3Lfo9
