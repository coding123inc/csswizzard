/* Insert jQuery first, then this script */
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

if (typeof $ !== "undefined") {
  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });
} else {
  throw new Error("jQuery is not integraded. CSSWizzard script may not work");
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