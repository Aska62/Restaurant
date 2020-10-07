import switchTabContent from './tabs';

window.onload = () => {
    // Existing content div
    const content = document.getElementById('content');

    // Section for image and description
    const section = document.createElement('section');
    section.setAttribute('id', 'top');

    // Top image
    const image = document.createElement('img');
    image.setAttribute('id', 'main-img');
    image.setAttribute('src', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5');
    image.setAttribute('alt', 'interior');
    section.appendChild(image);

    // Title
    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'message');
    h1.textContent = 'My Restaurant';
    section.appendChild(h1);

    // Restaurant Description
    const p = document.createElement('p');
    p.setAttribute('id', 'desc');
    p.textContent = 'We are located on a quiet corner of small street in Manhattan. Take a break from busy city life and have a quality time with slowly cooked food. During lunch time, we offer special meal of the day. Afternoon is cafe hour, feel free to bring your lap top and do some work with coffee. For dinner, we offer variety of courses and a la carte. We welcome you with satisfactory food and drink, plus smile!';
    section.appendChild(p);

    // Append all elements to top section
    content.appendChild(section);

    // Create tab section
    const tabsSection = document.createElement('section');
    tabsSection.setAttribute('id', 'tabs');

    const tabs = document.createElement('div');
    tabs.setAttribute('id', 'tabs-box');

    // Contact tab
    const contact = document.createElement('p');
    contact.setAttribute('id', 'contact');
    contact.textContent = 'Contact';
    tabs.appendChild(contact);

    // Menu tab
    const menu = document.createElement('p');
    menu.setAttribute('id', 'menu');
    menu.textContent = 'Menu';
    tabs.appendChild(menu);

    tabsSection.appendChild(tabs);

    // Add tab index to content
    content.appendChild(tabsSection);

    // Tab content; contact
    const tabContent = document.createElement('div');
    tabContent.setAttribute('class', 'content-txt');
    tabContent.setAttribute('id', 'contact-txt');

    const p1 = document.createElement('p');
    p1.textContent = 'Address: 175 Sunset Ave. Manhattan, New York City';
    tabContent.appendChild(p1);
    const p2 = document.createElement('p');
    p2.textContent = 'Phone: 347-111-1111';
    tabContent.appendChild(p2);
    const p3 = document.createElement('p');
    p3.textContent = 'Email: myrestaurant@aska.com';
    tabContent.appendChild(p3);
    const p4 = document.createElement('p');
    p4.textContent = 'Opening Hours: Tue to Sun 11am - 23:30pm daily';
    tabContent.appendChild(p4);

    tabsSection.appendChild(tabContent);


    // Tab content; menu
    const menuTabContent = document.createElement('div');
    menuTabContent.setAttribute('class', 'content-txt');
    menuTabContent.setAttribute('id', 'menu-txt');

    const pa = document.createElement('p');
    pa.textContent = 'Lunch Course: Soup, Main, Dessert, Coffee or Tea';
    menuTabContent.appendChild(pa);
    const pb = document.createElement('p');
    pb.textContent = 'Dinner Course: Appetizer, Soup, Pasta, Main, Dessert, Coffee or Tea';
    menuTabContent.appendChild(pb);
    const pc = document.createElement('p');
    pc.textContent = 'Snacks: Nachos, Fish and Chips, Chicken Wings';
    menuTabContent.appendChild(pc);
    const pd = document.createElement('p');
    pd.textContent = 'Drinks: Coffee, tea, Soda, Beer, Wine';
    menuTabContent.appendChild(pd);

    tabsSection.appendChild(menuTabContent);

    switchTabContent();
};


