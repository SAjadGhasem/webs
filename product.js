let HelpButton=document.getElementById('help')
let Div_button=document.querySelector('.help')
let Div_items=document.querySelector('.itemss')
let HeadElem=document.querySelector('.header')
let Nav1=document.querySelector('.Nav1')
let Nav2=document.querySelector('.Nav2')
let Nav3=document.querySelector('.Nav3')
let adidasAfter=document.getElementById('adidas')
let pic1Elem=document.querySelector('.picture1')

pic1Elem.addEventListener('mouseover',function() {
    adidasAfter.src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4edb30d4255e49b8acd2aba301159a50_9366/Gazelle_Shoes_Grey_FW0716_02_standard_hover.jpg'
    
})

pic1Elem.addEventListener('mouseleave',function(){
adidasAfter.src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4ba95791c644db095a8aba301158e9b_9366/Gazelle_Shoes_Grey_FW0716_01_standard.jpg'
})

HelpButton.addEventListener('click',function(event){
    console.log(event)
    Div_button.style.marginLeft=event.pageX
    Div_items.classList.remove('hidden')

    
    
})


// document.body.addEventListener('load',function(){
//    let temp= document.querySelectorAll('div')
//    temp.style.visibility='hidden'
//     document.body.style.display='block'
// })