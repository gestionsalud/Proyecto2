(function(){
    const sliders = [...document.querySelectorAll('.asesoras__body')];
    const buttonNext =  document.querySelector('#next');
    const buttonBefore =  document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
    
    const changePosition = (add)=>{
        const currentServicios = document.querySelector('.asesoras__body--show').dataset.id;
        value = Number(currentServicios);
        value+= add;

        sliders[Number(currentServicios)-1].classList.remove('asesoras__body--show');
        if(value ===sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('asesoras__body--show');
    }
 
})();