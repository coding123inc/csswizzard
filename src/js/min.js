const links=document.querySelectorAll(".sm-sc");for(const t of links)t.addEventListener("click",clickHandler);function clickHandler(t){let e;if(t.preventDefault(),t.target.getAttribute("href")?e=t.target.getAttribute("href"):t.target.getAttribute("data-to")&&(e=t.target.getAttribute("data-to")),e){const t=document.querySelector(e).offsetTop;scroll({top:t,behavior:"smooth"})}}if("undefined"==typeof $)throw new Error("jQuery is not integraded. CSSWizzard script may not work");$(window).on("load",function(){$(window).scroll(function(){var t=$(this).scrollTop()+$(this).innerHeight();$(".fade").each(function(){$(this).offset().top+$(this).outerHeight()<t?0==$(this).css("opacity")&&$(this).fadeTo(500,1):1==$(this).css("opacity")&&$(this).fadeTo(500,0)})}).scroll()});var i,acc=document.getElementsByClassName("accordion");for(i=0;i<acc.length;i++)acc[i].addEventListener("click",function(){this.classList.toggle("active");var t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"});document.querySelectorAll(".toastHead .btn-close").forEach(t=>{t.addEventListener("click",function(){this.parentNode.parentNode.style.transition="0.3s",this.parentNode.parentNode.style.opacity="0",setTimeout(()=>{this.parentNode.parentNode.style.display="none",this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)},300)})});