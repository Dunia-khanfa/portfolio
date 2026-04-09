gsap.registerPlugin(ScrollTrigger);

// Custom Cursor (Yonatan Style)
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
    });
});

// Reveal sections on scroll
const revealElements = gsap.utils.toArray('.reveal');
revealElements.forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 60,
        duration: 1.5,
        ease: "power4.out"
    });
});

// H1 Entrance Animation
gsap.from("h1", {
    opacity: 0,
    x: -100,
    duration: 2,
    ease: "expo.out",
    delay: 0.5
});
