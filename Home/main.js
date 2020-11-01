let envelope = document.querySelector(`.envelope`)
let cover = document.querySelector(`.cover`)
let paper = document.querySelector(`.paper`)
let active = false;

envelope.addEventListener('click', () => {
    if (!active) {

        setTimeout(() => {
            cover.style.zIndex = "-1"
        }, 200);

        cover.style.transition = "all 1s ease"
        cover.style.transform = "rotateX(180deg)"

        paper.style.transition = "all 1s 1s ease";
        paper.style.top = "10%";
    } else {
        setTimeout(() => {
            cover.style.zIndex = "1"
        }, 100);

        cover.style.transition = "all 1s 1s ease"
        cover.style.transform = "rotateX(0deg)"

        paper.style.transition = "all 1s ease";
        paper.style.top = "50%";
    }

    active = !active
})