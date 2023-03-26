/**============toggle style switcher========== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");

    }
})
/**============theme colors========== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}
/**============theme light and dark========== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

// link active class changes 
const links = document.querySelectorAll(".link");
links.forEach((link) => {
    link.addEventListener("click", () => {
        links.forEach((link) => {
            link.classList.remove("active");
        })
        link.classList.add("active");
        let navigate = document.getElementById(link.getAttribute("to"));
        console.log(navigate);
        link.animate(
                [
                    { transform: 'scale(1)' },
                    { transform: 'scale(1.5)' },
                    { transform: 'scale(1)' },
                ],
                {
                    duration: 500,
                }
            );
        navigate.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
                duration: 1000
            }
        );
    })
})
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    links.forEach((li) => {
        li.classList.remove('active');
        if (li.getAttribute('to') === current) {
            li.classList.add('active');
            
        }
    });
});