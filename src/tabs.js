const switchTabContent = () => {
    const contactBtn = document.getElementById('contact');
    const menuBtn = document.getElementById('menu');
    const contactTxt = document.getElementById('contact-txt');
    const menuTxt = document.getElementById('menu-txt');
    contactBtn.addEventListener('click', () => {
        contactTxt.setAttribute('style', 'display: block');
        contactBtn.setAttribute('style', 'border-bottom: solid');
        menuTxt.setAttribute('style', 'display: none');
        menuBtn.setAttribute('style', 'border-bottom: none');
    });
    menuBtn.addEventListener('click', () => {
        contactTxt.setAttribute('style', 'display: none');
        contactBtn.setAttribute('style', 'border-bottom: none');
        menuTxt.setAttribute('style', 'display: block');
        menuBtn.setAttribute('style', 'border-bottom: solid');
    });
};

export default switchTabContent;