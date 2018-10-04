var about = document.getElementById("about");
var contact = document.getElementById("contact");
showContent = function(event) {
    var clicked = event.target.id;
    var aboutContent = document.getElementById('show-about');
    var contactForm = document.getElementById('show-form');
    if (clicked == 'about') {
        aboutContent.className = 'unhidden';
        if (contactForm.className == 'unhidden') {
            contactForm.className = 'hidden';
        }
    }
    if (clicked == 'contact') {
        console.log('contact clicked');
        contactForm.className = 'unhidden';
        if (aboutContent.className == 'unhidden') {
            aboutContent.className = 'hidden';
        }
    }
}
about.addEventListener('click', showContent);
contact.addEventListener('click', showContent);
