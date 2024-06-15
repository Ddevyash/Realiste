let toggle = document.querySelector('.hamburger');
    toggle.addEventListener('click', function (){
    document.querySelector('.nav-menu').style.display='block';
    this.style.display='none';
})