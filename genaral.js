// this code is used to load the sections in the webpage on scroll(reveal on scroll)

const observer= new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
         }
        else{
            entry.target.classList.remove('show');
        } //check if the windows came to the correct viewpoint
    });
});


const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));