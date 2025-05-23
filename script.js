window.addEventListener('scroll',()=>{

    if(window.pageYOffset>10){
        document.querySelector('nav').style.backgroundColor = '#0C0C0C';
        document.querySelector('#brand').style.color = '#FEFBF6';
        document.querySelectorAll('.link-container ul li a').forEach(atag=>{
            atag.style.color = '#FEFBF6';
        });
        document.querySelector('.menu-icon').style.color = '#FEFBF6';

    }else{
        document.querySelector('nav').style.backgroundColor = 'transparent';
        document.querySelector('#brand').style.color = '#0C0C0C';
        document.querySelectorAll('.link-container ul li a').forEach(atag=>{
            atag.style.color = '#0C0C0C';
        })
        document.querySelector('.menu-icon').style.color = '#0C0C0C';
    }
})

const mobileNav = document.getElementById('mobile-link-container');
const navStyle = window.getComputedStyle(mobileNav);
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

const togleNav = () =>{

    console.log(navStyle.display);
    

    if(navStyle.display === 'none'){
        mobileNav.style.display = 'block';
        document.querySelector('nav').style.backgroundColor = '#0C0C0C';
        document.querySelector('#brand').style.color = '#FEFBF6';
        document.querySelector('.menu-icon').style.color = '#FEFBF6';

        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline';

        if(!window.pageYOffset<10){
             document.querySelector('nav').style.backgroundColor = '#0C0C0C';
        }
        
    }else{
        mobileNav.style.display = 'none';
        menuIcon.style.display = 'inline';
        closeIcon.style.display = 'none';

        if(window.pageYOffset>10){
            document.querySelector('nav').style.backgroundColor = '#0C0C0C';
        }else{
            document.querySelector('nav').style.backgroundColor = 'transparent';
        }
    }
}


window.onscroll = () =>{
    mobileNav.style.display = 'none';
    menuIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
}