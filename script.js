document.addEventListener("DOMContentLoaded", () => {

    // Initial reveal for hero items
    const hiddenElements = document.querySelectorAll('.hidden-onload');
    setTimeout(() => {
        hiddenElements.forEach((el, index) => {
            el.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);

    // Scroll Animation Observer
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Smooth Scroll for Internal Links (Bonus padding for sticky navbar)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Custom Cursor Logic
    const cursorOuter = document.querySelector(".cursor-outer");
    const links = document.querySelectorAll("a, button, .btn, .icon-link");

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smoothler outer circle follower
    const animateCursor = () => {
        // Linear interpolation for smooth following
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.2;

        cursorOuter.style.left = cursorX + "px";
        cursorOuter.style.top = cursorY + "px";

        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Hover effect for cursor
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursorOuter.classList.add("cursor-hover");
        });
        link.addEventListener("mouseleave", () => {
            cursorOuter.classList.remove("cursor-hover");
        });
    });

    // Hide cursor when it leaves the window
    document.addEventListener("mouseleave", () => {
        cursorOuter.style.display = "none";
    });

    document.addEventListener("mouseenter", () => {
        cursorOuter.style.display = "block";
    });
});
