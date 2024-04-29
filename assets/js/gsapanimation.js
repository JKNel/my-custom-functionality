function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -300;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 300;
      y = 0;
    }
    else if (elem.classList.contains("gs_reveal_fromTop")) {
      x = 0;
      y = -900;
    }
    else if (elem.classList.contains("gs_reveal_fromBottom")) {
      x = 0;
      y = 900;
    }
    else if (elem.classList.contains("gs_reveal_fromBottomLeft")) {
      x = -300;
      y = 900;
    }
    else if (elem.classList.contains("gs_reveal_fromBottomRight")) {
      x = 300;
      y = 900;
    } 
    else if (elem.classList.contains("gs_reveal_fromTopLeft")) {
      x = -300;
      y = -900;
    }
    else if (elem.classList.contains("gs_reveal_fromTopRight")) {
      x = 300;
      y = -900;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.8, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
  
      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
