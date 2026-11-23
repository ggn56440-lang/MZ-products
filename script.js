// =========================================
// 1. REGISTER GSAP PLUGINS
// =========================================
gsap.registerPlugin(ScrollTrigger);

// =========================================
// 2. INITIAL HERO ANIMATIONS (Page Load)
// =========================================
const heroTl = gsap.timeline();

heroTl.to(".hero .reveal", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.2
});

// =========================================
// 3. SCROLL REVEAL ANIMATIONS (All Sections)
// =========================================
const revealElements = document.querySelectorAll('.reveal:not(.hero .reveal)');

revealElements.forEach((el) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// =========================================
// 4. HERO PRODUCT PARALLAX 
// =========================================
gsap.to(".hero-img", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    },
    y: 80, // Moves slightly down as you scroll
    ease: "none"
});

// =========================================
// 5. LIFESTYLE IMAGE PARALLAX
// =========================================
gsap.to(".lifestyle-img", {
    scrollTrigger: {
        trigger: ".brand-lifestyle",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    },
    y: 50,
    ease: "none"
});