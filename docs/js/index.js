const genNavbar = (subtitle = null) => {
    const title = subtitle ? `<span>daylog</span>::<span class="uk-text-muted">${subtitle}</span>` : "daylog";
    const nav = document.createElement('nav');
    nav.classList.add("uk-navbar-container");
    const container = document.createElement('div');
    container.classList.add("uk-container", "uk-container-expand");
    nav.appendChild(container);
    const navbar = document.createElement('div');
    navbar.setAttribute('uk-navbar', null);
    container.appendChild(navbar);
    const leftNav = genNavbarPart('left');
    leftNav.appendChild(genNavbarLogo(title, "/"));
    navbar.appendChild(leftNav);
    const menus = [{title: "Docs", href: "/documents"}, {title: "FAQs", href: "/faqs"}];
    const rightNav = genNavbarPart('right');
    rightNav.appendChild(genNavbarMenuList(menus));
    rightNav.appendChild(genNavbarIconButton("github", "https://github.com/Kleinverse/kai-line-manager"));
    navbar.appendChild(rightNav);
    document.write(nav.outerHTML);
}

const genNavbarPart = (position) => {
    const navbar = document.createElement('div');
    navbar.classList.add(`uk-navbar-${position}`);
    return navbar;
}

const genNavbarLogo = (title, href) => {
    const img = document.createElement('img');
    img.classList.add("uk-margin-small-right");
    img.src = `https://${location.hostname}/images/daylog-icon-96.png`;
    img.style.width = "40px";
    img.style.height = "40px";
    const a = document.createElement('a');
    a.classList.add("uk-navbar-item", "uk-logo", "uk-text-bold");
    a.href = href;
    a.innerHTML = title;
    const logo = document.createElement('div');
    logo.classList.add("uk-flex", "uk-flex-middle");
    logo.appendChild(img);
    logo.appendChild(a);
    return logo;
}

// format of menus' element {title: TITLE, href: URL}
const genNavbarMenuList = (menus) => {
    const ul = document.createElement('ul');
    ul.classList.add("uk-navbar-nav");
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

const genNavbarIconButton = (icon, href) => {
    const item = document.createElement('div');
    item.classList.add("uk-navbar-item");
    const button = document.createElement('a');
    button.classList.add('uk-icon-button');
    button.href = href;
    button.setAttribute('uk-icon', icon);
    item.appendChild(button);
    return item;
}

const genTitleHeader = (title) => {
    const header = document.createElement('div');
    header.classList.add("uk-h1", "uk-text-bold", "uk-text-muted", "uk-text-center");
    const logo = document.createElement('img');
    logo.style.width = "96px"; 
    logo.style.height = "96px";
    logo.classList.add("uk-margin-right");
    logo.src = `https://${location.hostname}/images/daylog-icon-96.png`;
    header.appendChild(logo);
    const label = document.createElement('p');
    label.innerHTML = title;
    header.appendChild(label);
    document.write(header.outerHTML);
}

const linkLineOfficialAccount = (href = "https://lin.ee/9FDmO82") => {
    const a = document.createElement('a');
    a.classList.add("uk-button", "uk-border-rounded", "line-login-button");
    a.href = href;
    const logo = document.createElement('img');
    logo.src = `https://${location.hostname}/images/line_32.png`;
    logo.classList.add("line-login-icon");
    const label = document.createElement('span');
    label.innerHTML = "Official Account";
    a.appendChild(logo);
    a.appendChild(label);
    document.write(a.outerHTML);
}

const identifyLanguage = () => {
    const preferred = navigator.language || navigator.userLanguage;
    var lang = preferred.split('-')[0];
    lang = lang == 'ja' ?? 'en';
    document.documentElement.setAttribute("lang", lang);
}

identifyLanguage();