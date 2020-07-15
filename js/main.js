const catalogBtn = document.querySelector('.catalog_btn'),
    catalogMenu = document.querySelector('.categories-menu'),
    navbarBtn = document.querySelector('.navbar-toggle'),
    mobileMenu = document.querySelector('.top-nav'),
    mobileMenuBg = document.querySelector('.toggle-block-backdrop'),
    mobileMenuUl = document.querySelector('.top-nav-content .menu'),
    closeBtn = document.querySelector('.top-nav-close'),
    mobileSearch = document.querySelector('.search-block'),
    searchCloseBtn = document.querySelector('.search-close'),
    searchBtn = document.querySelector('.search_btn')


catalogBtn.addEventListener('click', (e) => {
    catalogBtn.classList.toggle('active')
    catalogMenu.classList.toggle('open')
    e.stopPropagation()
})

catalogMenu.addEventListener('click', (e) => {
    e.stopPropagation()
})


document.addEventListener('click', ({ target }) => {
    if (!target.closest('.catalog_btn') || !target.closest('.categories-menu')) {
        catalogBtn.classList.remove('active')
        catalogMenu.classList.remove('open')
    }
})

navbarBtn.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('active')
    mobileMenuBg.classList.toggle('active')
    e.stopPropagation()
})

closeBtn.addEventListener('click', (e) => {
    mobileMenu.classList.remove('active')
    mobileMenuBg.classList.remove('active')
    closeDropdown()
})

const closeDropdown = () => {
    menuItemWrap.forEach(i => i.classList.remove('active'))

}
mobileMenuUl.addEventListener('click', e => {
    e.preventDefault();

    const { target } = e;
    const menuItem = target.closest('.js-toggle-block');
    const menuItemWrap = target.closest('.submenu-toggle');

    if (menuItem) {
        if (menuItemWrap.classList.contains("active")) {
            menuItemWrap.classList.remove('active')
        } else {
            menuItemWrap.classList.add('active')
        }

    }

}, false);

searchBtn.addEventListener('click', (e) => {
    mobileSearch.classList.toggle('active')
    e.stopPropagation()
})

searchCloseBtn.addEventListener('click', (e) => {
    mobileSearch.classList.remove('active')
})


window.addEventListener("load", function() {
    // store tabs variable
    var myTabs = document.querySelectorAll("ul.nav-tabs > li");

    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".tab-pane");
        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks)
    }
});
