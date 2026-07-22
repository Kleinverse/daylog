const genNavbar = () => {
    const nav = document.getElementsByTagName('nav')[0];
    nav.classList.add("uk-navbar-container", "uk-margin");
    const container = document.getElementById('div');
    container.classList.add("uk-container", "uk-container-expand");
    nav.appendChild(container);
    const navbar = document.createElement('div');
    navbar.setAttribute('uk-navbar', null);
    nav.appendChild(navbar);

}

const genNavbarPart = (position) => {
    const navbar = document.createElement('div');
    navbar.classList.add(`uk-navbar-${position}`);
    return navbar;
}

const genNavbarLogo = (title, href) => {
    const logo = document.createElement('a');
    logo.classList.add("uk-navbar-item", "uk-logo", "uk-text-bold");
    logo.href = href;
    logo.innerHTML = title;
    return logo;
}

// format of menus' element {title: TITLE, href: URL}
const genNavbarMenuList = (menus) => {
    const ul = document.createElement('ul');
    for(let i=0; i<menus.length; i++){
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = menus[i].href;
        a.innerHTML = menus[i].title;
        li.appendChild(a);
        ul.appendChild(li);
    }
    return ul;
}