function onOpanClick() {
    let main = document.querySelector(`main`)
    main.style.transition = "all 2s ease"
    main.style.backgroundColor = "black"

    let openContainer = document.querySelector(`#openContainer`)
    openContainer.lastElementChild.style.boxShadow = "none"
    openContainer.style.transition = "all 1s ease"
    openContainer.style.opacity = "0"
    setTimeout(() => {
        openContainer.style.display = "none"

        let welcomecontainer = document.querySelector(`#welcomeContainer`)
        welcomecontainer.classList.remove("d-none")
        welcomecontainer.style.opacity = "0"
        welcomecontainer.style.transition = "all 2s ease"

        setTimeout(() => {
            welcomecontainer.style.opacity = "1"
        }, 500);

    }, 1000);



}