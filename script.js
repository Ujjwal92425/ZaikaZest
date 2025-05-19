document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

const inp = document.getElementById("num");
const res = document.getElementById("submit");
const result = document.getElementById("result");

res.addEventListener("click", function () {
  let val = parseInt(inp.value.trim());
  let random = Math.floor(Math.random() * 5) + 1;

  // Reset result
  result.innerHTML = "";
  result.className = "active"; // make it visible

  const para = document.createElement("p");

  if (val === random) {
    para.innerText = `Hey buddy 🙌, You won ${val * 10}% discount 🎁 `;
    para.style.padding = "1rem"; // ✅ Correct
    para.style.color = "black";
    result.classList.add("green");
  } else {
    para.innerText = `Hey buddy ❌, Better Luck Next Time 😔`;
  }

  result.appendChild(para);
});

const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
      revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('reveal');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    //GSAP

    // --------------- HERO ---------------
gsap.from(".hero-content h1", {
  opacity: 0,
  y: 60,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-content p", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".hero-content button", {
  opacity: 0,
  scale: 0.6,
  duration: 0.8,
  delay: 0.7,
  ease: "back.out(1.7)"
});
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",      // when card enters viewport
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,
    duration: .6,
    ease: "power2.out"
  });
});
gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%"
  },
  y: 100,
  opacity: 0,
  duration: .8,
  ease: "power2.out"
});
