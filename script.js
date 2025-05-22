window.addEventListener('scroll',()=>{
    if(window.pageYOffset>10){
        document.querySelector('nav').style.backgroundColor = '#0C0C0C';
        document.querySelector('#brand').style.color = '#FEFBF6';
        document.querySelectorAll('.link-container ul li a').forEach(atag=>{
            atag.style.color = '#FEFBF6';
        })
    }else{
        document.querySelector('nav').style.backgroundColor = 'transparent';
        document.querySelector('#brand').style.color = '#0C0C0C';
        document.querySelectorAll('.link-container ul li a').forEach(atag=>{
            atag.style.color = '#0C0C0C';
        })

    }
})