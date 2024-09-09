var typed = new Typed(".typing",{
    strings:["","Web Developer","Graphic Designer","Web Designer","Student"],
    typeSpeed:100,
    Backspeed:60,
    loop:true
})  

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.aside .nav a');


document.querySelector('.aside .nav a[href*="#home"]').classList.add('active');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.aside .nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

