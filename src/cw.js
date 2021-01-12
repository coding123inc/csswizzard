function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
        return (function(value) {
          var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + "px";
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        })(value);
      }
      return value;
    }
  }

const links = document.querySelectorAll(".sm-sc");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();
  let href;
  if (!e.target.getAttribute("href")) {
      if (e.target.getAttribute("data-to")) {
          href = e.target.getAttribute("data-to");
      }
  } else {
    href = e.target.getAttribute("href");
  }
  if (href) {
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

document.querySelectorAll(".toastHead .btn-close").forEach(el => {
    el.addEventListener("click", function () {
        this.parentNode.parentNode.style.transition = "0.3s";
        this.parentNode.parentNode.style.opacity = "0";
        setTimeout(() => {
            this.parentNode.parentNode.style.display = "none";
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        }, 300);
    });
});

window.addEventListener("load",() => {
    window.addEventListener("scroll", () => {
      let windowBottom = window.pageYOffset + window.innerHeight;
      document.querySelectorAll(".fade").forEach(el => {
        /* Check the location of each desired element */
        let objectBottom = el.offsetTop + el.offsetHeight;
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if (getStyle(el, "opacity")==0) {el.style.opacity = "1";}
        } else { //object goes out of view (scrolling up)
            if (getStyle(el, "opacity")==1) {el.style.opacity = "0";}
        }
      });
    })
});

window.addEventListener("load",() => {
  window.addEventListener("scroll", () => {
    let windowBottom = window.pageYOffset + window.innerHeight;
    document.querySelectorAll(".fade-left").forEach(el => {
      /* Check the location of each desired element */
      let objectBottom = el.offsetTop + el.offsetHeight;
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if (getStyle(el, "opacity")==0) {el.style.opacity = "1";setTimeout(() => {el.style.marginLeft = "0"}, 200);}
      } else {
        if (getStyle(el, "opacity")==1) {el.style.marginLeft = "-5rem";setTimeout(() => {el.style.opacity = "0"}, 200);}
      }
    });
  })
});

window.addEventListener("load",() => {
  document.addEventListener('DOMNodeInserted', e => {
      if (e.target.tagName.toLowerCase() == "button" || e.target.tagName.toLowerCase() == "a") {
        e.target.innerHTML = "<span>"+e.target.innerHTML+"</span>"
      }
  });
  window.addEventListener("scroll", () => {
    let windowBottom = window.pageYOffset + window.innerHeight;
    document.querySelectorAll(".fade-right").forEach(el => {
      /* Check the location of each desired element */
      let objectBottom = el.offsetTop + el.offsetHeight;
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if (getStyle(el, "opacity")==0) {el.style.opacity = "1";setTimeout(() => {el.style.marginLeft = "0"}, 200);}
      } else {
        if (getStyle(el, "opacity")==1) {el.style.marginLeft = "30rem";setTimeout(() => {el.style.opacity = "0"}, 200);}
      }
    });
  })
});

document.querySelectorAll("button, .btn").forEach(el => {
    el.innerHTML = "<span>"+el.innerHTML+"</span>"
});

const openModal = () => {
    document.querySelectorAll(".modal").forEach(el => {
        document.querySelector(".mask").style.display = "block";
        setTimeout(() => {
          el.style.transform = "scale(1,1)";
          el.style["webkit-trasform"] = "scale(1,1)";
          el.style["moz-trasform"] = "scale(1,1)";
          el.style["o-trasform"] = "scale(1,1)";
        }, 20);
    });
};

const closeModal = () => {
    document.querySelectorAll(".modal").forEach(el => {
        el.style.transform = "scale(1,0)";
        el.style["webkit-trasform"] = "scale(1,0)";
        el.style["moz-trasform"] = "scale(1,0)";
        el.style["o-trasform"] = "scale(1,0)";
        setTimeout(() => {
            document.querySelector(".mask").style.display = "none";
            el.removeAttribute("style");
            document.querySelector(".mask").removeAttribute("style");
        }, 300);
    });
};

document.querySelectorAll(".btn-close").forEach(el => {
    el.addEventListener("click", () => {
        closeModal();
    });
});