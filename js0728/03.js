let nav=document.querySelector('nav');
let navlink=document.querySelector('nav ul li a');
//頁面捲動時
window.addEventListener('scroll',()=>{
    //console.log(window.pageYOffset);
    if (Window.pageYOffset>100){
        nav.style.backgroundColor="rgba(0,0,0,.7)"
        navlink.forEach(a=>{
            a.style.color="#fff"
        })
    }else{
        nav.style.background="#ccc"
        navlink.forEach(a=>{
            a.style.color="#333"
        })
    }
    // nav.style.backgroundColor="rgba(0,0,0,.5)"
    // nav.style.color="fff"
});
