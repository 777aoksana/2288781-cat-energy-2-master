document.addEventListener("DOMContentLoaded",()=>{let s=document.querySelector(".navigation"),i=document.querySelector(".navigation__toggle");s&&s.classList.remove("navigation--nojs"),i.addEventListener("click",()=>{s.classList.contains("navigation--closed")?(s.classList.remove("navigation--closed"),s.classList.add("navigation--opened"),i.setAttribute("aria-label","\u0437\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E")):(s.classList.add("navigation--closed"),s.classList.remove("navigation--opened"),i.setAttribute("aria-label","\u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"))});let t=document.querySelector(".slider"),r=t.querySelector(".slider__wrapper-before"),c=document.querySelector(".slider__thumb");if(t){let a=!1,u=t.offsetWidth/2;r.style.width=`${u}px`;let l=e=>{let n=Math.max(0,Math.min(e,t.offsetWidth));r.style.width=`${n}px`,c.style.left=`${n}px`},d=e=>(e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.returnValue=!1,!1);t.addEventListener("mousedown",()=>{a=!0}),t.addEventListener("mouseup",()=>{a=!1}),t.addEventListener("mouseleave",()=>{a=!1}),t.addEventListener("mousemove",e=>{if(!a)return;let n=e.pageX;n-=t.getBoundingClientRect().left,l(n),d(e)}),t.addEventListener("touchstart",e=>{e.preventDefault(),a=!0}),t.addEventListener("touchend",e=>{e.preventDefault(),a=!1}),t.addEventListener("touchcancel",e=>{e.preventDefault(),a=!1}),t.addEventListener("touchmove",e=>{if(e.preventDefault(),!a)return;let n,o;for(o=0;o<e.changedTouches.length;o++)n=e.changedTouches[o].pageX,n-=t.getBoundingClientRect().left,l(n),d(e)})}});
