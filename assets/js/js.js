let sidenavheader = document.querySelector('.header');
menuLink = document.querySelectorAll('.header a');
menuLi = document.querySelectorAll('.header li');
addressbook = document.querySelectorAll('#addressBook a');

(function() {
    sidenavheader.style.opacity = '0.6';
    sidenavheader.style.width = '1350px';
    sidenavheader.style.marginLeft = '40px';
    sidenavheader.style.fontFamily = 'serif';


    console.log(menuLink);

    Array.from(menuLink).forEach((link)=> {
        link.style.textDecoration = 'none'
        link.style.color = '#af7407'
        link.style.fontWeight = 'bold'
        link.style.fontSize = '25px'
        link.style.margin = '10px'
    })

    Array.from(menuLi).forEach((link)=> {
        link.style.display = 'inline'
    })

    Array.from(addressbook).forEach((link)=> {
        link.style.color = '#000'
    })

    document.getElementById("logo").style.fontWeight = "900"
    document.getElementById("logo").style.fontSize = "56px"
    document.getElementById("io").style.color = "#000"
    document.getElementById("pro").style.color = "#000"
    document.getElementById("home").style.color = "#000"
    document.body.style.backgroundColor = "#fff"

    console.log(menuLink)
})()

// SEARCH
function search () {
    let input, inputValue, contacts, contactText;
    input = document.getElementById('globalSearch');
    inputValue = input.value.toLowerCase();
    contacts = document.querySelectorAll('#addressBook li a');

    Array.from(contacts).forEach((contact) => {
        // console.log('innerText',contact.innerText)
        // console.log('textContent', contact.innerText)
        contactText = contact.innerText;

        if (contactText.toLowerCase().indexOf(inputValue) > -1) { 
            contact.parentElement.style.display = '';
        } else {
            contact.parentElement.style.display = 'none';
        }
    })
}
// HAMBURGER MENU
let sideNav = document.querySelector('.sidenav');
    menuLink = document. querySelectorAll('.sidenav a');

(function() {
    sideNav.style.backgroundColor = 'grey';
    sideNav.style.height = '100%';
    sideNav.style.width = '0';
    sideNav.style.position = 'fixed';
    sideNav.style.top = '0';
    sideNav.style.left = '0';
    sideNav.style.paddingTop = '60px';
    // sideNav.style.marginTop = '500px';
    // sideNav.style.paddingLeft = '20px'; 

    console.log(menuLink)
    Array.from(menuLink).forEach((link) => {
        link.style.display = 'block';
        link.style.textDecoration = 'none'
        link.style.color = '#fff';
        link.style.lineHeight = '36px';
        link.style.fontSize = '24px';

    })
})();

function openSideNav() {
    if (sideNav.style.width !== '250px') { 
        sideNav.style.width = '250px';
        document.querySelector('.container1').style.marginLeft = '250px';
    } else { 
        sideNav.style.width = '0px';
        document.querySelector('.container1').style.marginLeft = '0px';
    }
    document.querySelector('.sidenav').style.transition = '1s';
}





