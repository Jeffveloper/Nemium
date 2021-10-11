document.addEventListener('DOMContentLoaded', function (){
    inicarApp();
});


function inicarApp() {
    sliders();
}

function sliders() {
    const bullets = document.querySelectorAll('.slider-bullet')
    bullets.forEach(bullet =>{
        bullet.addEventListener('click', ()=>{
            const bulletActivo = document.querySelector('.bullet-on');
            
            bulletActivo.classList.remove('bullet-on');
            bullet.classList.add('bullet-on');
        })
    });
}
