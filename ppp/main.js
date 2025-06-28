document.addEventListener("DOMContentLoaded", () => {
  // Typed.js Animation
  const typedTargets = document.querySelectorAll(".typed-text");
  typedTargets.forEach(el => {
    new Typed(el, {
      strings: [
        "Android Developer",
        "Mobile App Developer",
        "Java & Kotlin Programmer",
        "ML Kit Integrator"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });
  });

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  // Sticky Navbar Shadow Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.style.boxShadow =
      window.scrollY > 30
        ? "0 4px 15px rgba(100, 255, 218, 0.3)"
        : "0 0 20px rgba(100, 255, 218, 0.2)";
  });

  // Particle Background (optional)
  const canvas = document.getElementById("particles");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particlesArray;
    const colors = ["#64FFDA", "#FF00C8", "#00BFA6"];

    const createParticles = () => {
      particlesArray = [];
      for (let i = 0; i < 80; i++) {
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(animateParticles);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animateParticles();
  }
});
