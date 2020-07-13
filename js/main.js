const catalogBtn = document.querySelector('.catalog_btn'),
    catalogMenu = document.querySelector('.categories-menu')   

catalogBtn.addEventListener('click', (e) => {
    catalogBtn.classList.toggle('active')
    catalogMenu.classList.toggle('open')
    e.stopPropagation();
})

catalogMenu.addEventListener('click', (e) => {
    e.stopPropagation();
})


document.addEventListener('click', ({target}) => {
    if (!target.closest('.catalog_btn') || !target.closest('.categories-menu') ) {
        catalogBtn.classList.remove('active')
        catalogMenu.classList.remove('open')
    }
})