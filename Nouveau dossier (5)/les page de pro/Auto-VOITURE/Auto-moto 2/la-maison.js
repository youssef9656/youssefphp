let images_des_produits = [
    'automoto/ca1.png',
    'automoto/ca2.png',
    'automoto/ca3.png',
    'automoto/ca4.png',
    'automoto/ca5.png',
    'automoto/ca6.png',
    'automoto/ca7.png',
    'automoto/ca8.png',
    'automoto/ca9.png',
    'automoto/ca10.png',
    'automoto/ca11.png',
    'automoto/ca12.png',
    'automoto/ca13.png',
    'automoto/ca14.png',
    'automoto/ca15.png',
    'automoto/ca16.png',
    'automoto/ca17.png',
    'automoto/ca18.png',
    'automoto/ca19.png',
    'automoto/ca20.png',
    'automoto/ca21.jpeg',
    'automoto/ca22.jpeg',
    'automoto/ca23.jpeg',
    'automoto/ca24.jpeg',
    'automoto/ca25.webp',
    'automoto/ca26.webp',
    'automoto/ca27.webp',
    'automoto/ca28.webp',
    'automoto/ca28.webp',
    'automoto/ca30.png',
    'automoto/ca31.png',
    'automoto/ca32.png',
    'automoto/ca33.png',
    'automoto/ca34.png',
    'automoto/ca35.png',
    'automoto/ca36.png',
    'automoto/ca37.png',
    'automoto/ca38.png',
    'automoto/ca39.png',
    'automoto/ca40.png',
    'automoto/ca41.png',
    'automoto/ca42.png',
    'automoto/ca43.png',
    'automoto/ca44.png',
    'automoto/ca45.png',
    'automoto/ca46.png',
    'automoto/ca47.png',
    'automoto/ca48.png',
    'automoto/ca49.png',
];

var camera = document.getElementById('cameras');
let main = document.getElementById("main")
let maindiv = document.querySelectorAll(".main>div")
let ione = document.getElementById('i1')
let itwo =  document.getElementById('i2')
function mouad_youssef() {

    var tsawarr = document.querySelectorAll('.imgbg')

    for (let i = 0; i < tsawarr.length; i++) {
        

        tsawarr[i].src = images_des_produits[i]

     

     }
    
}
window.onload = function(){
    mouad_youssef()
    main.style.opacity = 1
    
    setTimeout(function(){
        main.style.filter = 'none'
        document.body.style.opacity = 1;
        document.body.style.filter = 'none'
        } , 500)
        
        


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




function change() {
    window.alert('Nous sommes désolés, mais ce produit est temporairement en rupture de stock');
}


function i1(){
    main.style.opacity = '0'
    ione.style.display = 'block'

    setTimeout(function(){
        main.style.display = 'none'
        ione.style.opacity = 1
    } , 1000)

  
    setTimeout(function(){
        var tsawarr = document.querySelectorAll('.imgbg')
        for (let i = 0; i < tsawarr.length; i++) {
        
            tsawarr[i].style.opacity = 1;
            tsawarr[i].style.filter = 'none' ;
    
         
    
         }

    } , 2000)
    
    
    
    setTimeout(function(){
        let buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
            button.style.filter = 'none';
        });
        
    } , 3000)
    
    
    
    setTimeout(function(){
        
    if (camera) {
        camera.style.backgroundSize = '540px';
        camera.style.backgroundPositionX = '-5px';
        
    } else {
        console.error("L'élément n'a pas été trouvé.");
    }
    
    
}, 3000);

setTimeout(function(){
    var tsawarr = document.querySelectorAll('.imgbg')
    tsawarr.forEach(imageElement => {
        imageElement.style.transition = '0.3s';
    })
console.log('done x 4')
} , 4000)
}


let Occasion = document.getElementById('occasion')
function i2(){

    Occasion.style.display = "flex"
    setTimeout(function(){
        Occasion.style.opacity = 1
    } , 0)
    document.body.style.overflow = 'hidden'

}



function vv(){
    document.body.style.overflow = 'auto'
    Occasion.style.opacity = 0

    setTimeout(function(){
        Occasion.style.display = 'none'
    } , 1000)
    
    console.log('done')

    // window.close()
}

// i1()

function search() {
    let promix = document.querySelectorAll('.promix')
    let searchBar = document.querySelector(".input").value.toUpperCase(); // Appel de la fonction toUpperCase
    let products = document.querySelectorAll(".card");

    promix.forEach(pro=>{
        pro.style.height = "70px"
    })

    if (searchBar.trim() !== "") {
        document.getElementById("mercedes").style.display = 'none';
        document.getElementById("BMW").style.display = 'none';
        document.getElementById("Toyota").style.display = 'none';
        document.getElementById("Kawasaki").style.display = 'none';
        document.getElementById("Yamaha").style.display = 'none';
        document.getElementById("Ducati").style.display = 'none';
        for (let i = 0; i < products.length; i++) {
            let productName = products[i].querySelector(".descriptiontitre").innerHTML.toUpperCase(); 
            
            if (productName.indexOf(searchBar) >= 0) {
                products[i].style.display = 'block'; 
            } else {
                products[i].style.display = 'none';
            }
        }
    } else {
        document.getElementById("mercedes").style.display = 'block';
        document.getElementById("BMW").style.display = 'block';
        document.getElementById("Toyota").style.display = 'block';
        document.getElementById("Kawasaki").style.display = 'block';
        document.getElementById("Yamaha").style.display = 'block';
        document.getElementById("Ducati").style.display = 'block';
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = 'block';
        }
    }
}




function search2() {
    let promix = document.querySelectorAll('.promix')
    let searchBar = document.querySelector(".input2").value.toUpperCase(); // Appel de la fonction toUpperCase
    let products = document.querySelectorAll(".card");

    promix.forEach(pro=>{
        pro.style.height = "70px"
    })

    if (searchBar.trim() !== "") {
        document.getElementById("mercedes").style.display = 'none';
        document.getElementById("BMW").style.display = 'none';
        document.getElementById("Toyota").style.display = 'none';
        document.getElementById("Kawasaki").style.display = 'none';
        document.getElementById("Yamaha").style.display = 'none';
        document.getElementById("Ducati").style.display = 'none';
        for (let i = 0; i < products.length; i++) {
            let productName = products[i].querySelector(".descriptiontitre").innerHTML.toUpperCase(); 
            
            if (productName.indexOf(searchBar) >= 0) {
                products[i].style.display = 'block'; 
            } else {
                products[i].style.display = 'none';
            }
        }
    } else {
        document.getElementById("mercedes").style.display = 'block';
        document.getElementById("BMW").style.display = 'block';
        document.getElementById("Toyota").style.display = 'block';
        document.getElementById("Kawasaki").style.display = 'block';
        document.getElementById("Yamaha").style.display = 'block';
        document.getElementById("Ducati").style.display = 'block';
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = 'block';
        }
    }
}




