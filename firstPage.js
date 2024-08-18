let seller=document.querySelectorAll('.seller')
let index=0;
seller.forEach(function(sell) {
    sell.addEventListener('mouseover',function(event){
        console.log(event.target);
        sell.className=''
        sell.classList.add('sellerAfter')
        let tmp=sell.firstChild;
        tmp.innerHTML='مشاهده بوتیک...'
        tmp.innerHTML='مشاهده بوتیک...'
    })
    sell.addEventListener('click',function(){
        window.open.target='_self'
        window.open("../codes/porduct.htm",'_self')
       
    })
    
});
for(i=0 ; i<seller.length ; i++){
    let index=i;
    seller[i].addEventListener('mouseleave',function(event){
        event.target.className=''
        event.target.className='seller seller'+(index+1)
        event.target.firstChild.innerHTML=''
    })
}
