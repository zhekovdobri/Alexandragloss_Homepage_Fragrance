let sidenavheader = document.querySelector('.header');
menuLink = document.querySelectorAll('.header a');
menuLi = document.querySelectorAll('.header li');

(function() {
    sidenavheader.style.opacity = '0.6';
    sidenavheader.style.width = '1350px';
    sidenavheader.style.marginLeft = '40px';
    sidenavheader.style.fontFamily = 'serif';

    console.log(menuLink);

    Array.from(menuLink).forEach((link)=> {
        link.style.textDecoraton = 'none'
        link.style.color = '#af7407'
        link.style.fontWeight = 'bold'
        link.style.fontSize = '25px'
        link.style.margin = '10px'
        
    })

    Array.from(menuLi).forEach((link)=> {
        link.style.display = 'inline'
    })

    document.getElementById("logo").style.fontWeight = "900"
    document.getElementById("logo").style.fontSize = "56px"
    document.getElementById("services").style.color = "#000"
    document.getElementById("ACTS").style.color = "#000"
    document.body.style.backgroundColor = "#fff"

    
})()
