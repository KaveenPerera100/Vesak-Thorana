function on(){

        const sidetop = document.querySelector('.side-top');
        sidetop.style.animation = 'flicker_1 1.5s infinite alternate ';

        const sidetop2 = document.querySelector('.side-top2');
        sidetop2.style.animation = 'flicker_1 1.5s infinite alternate ';

        const mid1 = document.querySelector('#mid-1');
        mid1.style.animation = 'flicker_2 1.5s infinite alternate ';

        const mid2 = document.querySelector('#mid-2');
        mid2.style.animation = 'flicker_3 1.5s infinite alternate ';

        const midtop = document.querySelector('.mid-top');
        midtop.style.animation = 'flicker_4 1.5s infinite alternate ';

        const midbtm = document.querySelector('.mid-btm');
        midbtm.style.animation = 'flicker_5 1.5s infinite alternate ';

        document.getElementById('start_aud').play();

        setTimeout(()=> {
                document.getElementById('song').play();
        }
        ,8000);

}   


function off(){

        const sidetop = document.querySelector('.side-top');
        sidetop.style.animation = 'none';

        const sidetop2 = document.querySelector('.side-top2');
        sidetop2.style.animation = 'none';

        const mid1 = document.querySelector('#mid-1');
        mid1.style.animation = 'none';

        const mid2 = document.querySelector('#mid-2');
        mid2.style.animation = 'none';

        const midtop = document.querySelector('.mid-top');
        midtop.style.animation = 'none';

        const midbtm = document.querySelector('.mid-btm');
        midbtm.style.animation = 'none';

        document.getElementById('start_aud').pause();

        document.getElementById('song').pause();

}   