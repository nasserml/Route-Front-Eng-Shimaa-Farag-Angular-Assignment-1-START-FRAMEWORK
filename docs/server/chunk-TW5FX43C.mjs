import './polyfills.server.mjs';
import{B as y,F as k,I as h,J as S,a as l,b as C,c as d,d as f,e as u,f as t,g as e,h as r,i as p,j as o,k as m,l as w,m as b,r as v,u as _,w as M,x as P,y as O}from"./chunk-K6LLLL3J.mjs";var E=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=l({type:n,selectors:[["app-home"]],standalone:!0,features:[m],decls:12,vars:0,consts:[[1,"home"],[1,"home-text-image"],["src","images/avataaars.svg","alt","",1,"w-[250px]"],[1,"title"],[1,"line-star-line"],[1,"line"],[1,"fa-solid","fa-star"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"div",1),r(2,"img",2),t(3,"div",3)(4,"h2"),o(5,"START FRAMEWORK"),e(),t(6,"div",4),r(7,"div",5)(8,"i",6)(9,"div",5),e(),t(10,"p"),o(11,"Graphic Artist - Web Designer - Illustrator "),e()()()())},styles:[".container[_ngcontent-%COMP%]{width:100%;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container[_ngcontent-%COMP%]{max-width:576px}}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{max-width:992px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.home[_ngcontent-%COMP%]{display:flex;min-height:100lvh;flex-wrap:wrap;align-items:center;justify-content:center;--tw-bg-opacity: 1;background-color:rgb(26 188 156 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.home-text-image[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;text-align:center}.home-text-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:1rem;display:block;text-align:center;vertical-align:middle}.title[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1rem;padding-top:1.5rem;font-size:2.5rem;font-weight:700;line-height:3rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.line-star-line[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex;align-items:center;justify-content:center}.line-star-line[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{margin-right:1rem;height:.25rem;width:5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.line-star-line[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:1rem;display:block;font-size:1rem;line-height:1.5rem;font-weight:900}"]})}return n})();var W=n=>({"padding-y-8px":n}),G=(n,j)=>({" height-full":n," height-zero":j}),x=n=>({"clicked-active":n}),L=(()=>{class n{isNavOpen=!1;activeLink="";isScrolled=!1;toggleNav(){this.isNavOpen=!this.isNavOpen}setActiveLink(c){this.activeLink=c}onWindowScroll(){let c=window.scrollY;this.isScrolled=c>0}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=l({type:n,selectors:[["app-navbar"]],hostBindings:function(i,a){i&1&&p("scroll",function(B){return a.onWindowScroll(B)},!1,C)},standalone:!0,features:[m],decls:17,vars:16,consts:[[1,"navbar-tw",3,"ngClass"],[1,"container"],["routerLink","/",1,"logo",3,"click"],["data-collapse-toggle","navbar-default","type","button","aria-controls","navbar-default","aria-expanded","false",1,"navbar-toggler-tw",3,"click"],[1,"navbar-toggler-icon-tw"],["id","navbar-default",1,"nav-links-tw",3,"ngClass"],[1,"ul-links-tw"],[1,"nav-item-tw"],["routerLink","/about",1,"nav-link-tw",3,"click","ngClass"],["routerLink","/portfolio",1,"nav-link-tw",3,"click","ngClass"],[1,"nav-item-tw",3,"click","ngClass"],["routerLink","/contact",1,"nav-link-tw"]],template:function(i,a){i&1&&(t(0,"nav",0)(1,"div",1)(2,"a",2),p("click",function(){return a.setActiveLink("/")}),o(3,"START FRAMEWORK"),e(),t(4,"button",3),p("click",function(){return a.toggleNav()}),r(5,"span",4),e(),t(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),p("click",function(){return a.setActiveLink("/about")}),o(10,"ABOUT"),e()(),t(11,"li",7)(12,"a",9),p("click",function(){return a.setActiveLink("/portfolio")}),o(13,"PORTFOLIO"),e()(),t(14,"li",10),p("click",function(){return a.setActiveLink("/contact")}),t(15,"a",11),o(16,"CONTACT"),e()()()()()()),i&2&&(f("ngClass",w(5,W,a.isScrolled)),d(6),f("ngClass",b(7,G,a.isNavOpen,!a.isNavOpen)),d(3),f("ngClass",w(10,x,a.activeLink==="/about")),d(3),f("ngClass",w(12,x,a.activeLink==="/portfolio")),d(2),f("ngClass",w(14,x,a.activeLink==="/contact")))},dependencies:[M,h],styles:[".container[_ngcontent-%COMP%]{width:100%;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container[_ngcontent-%COMP%]{max-width:576px}}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{max-width:992px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.navbar-tw[_ngcontent-%COMP%]{position:fixed;top:0;right:0;left:0;z-index:50;display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;--tw-bg-opacity: 1;background-color:rgb(44 62 80 / var(--tw-bg-opacity));padding-top:1.5rem;padding-bottom:1.5rem;transition-property:padding;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.6s;transition-timing-function:cubic-bezier(.4,0,1,1)}@media (min-width: 992px){.navbar-tw[_ngcontent-%COMP%]{flex-wrap:nowrap}}.navbar-tw[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}@media (min-width: 992px){.navbar-tw[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{flex-wrap:nowrap}}.navbar-tw[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-right:1rem;padding-top:.313rem;padding-bottom:.313rem;font-size:2rem;font-weight:700;line-height:3rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.navbar-tw[_ngcontent-%COMP%]   .navbar-toggler-tw[_ngcontent-%COMP%]{display:block;cursor:pointer;align-items:flex-start;border-radius:.375rem;border-width:1.5px;border-style:solid;border-color:#00000026;background-color:transparent;padding:.25rem .75rem;font-size:1.25rem;font-weight:400;line-height:1.25rem;color:#000000a6;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-width:0px}@media (min-width: 992px){.navbar-tw[_ngcontent-%COMP%]   .navbar-toggler-tw[_ngcontent-%COMP%]{display:none}}.navbar-toggler-tw[_ngcontent-%COMP%]   .navbar-toggler-icon-tw[_ngcontent-%COMP%]{display:inline-block;height:1.875rem;width:1.875rem;background-image:url(/images/navbar-toggler.svg);background-size:100%;background-position:center;background-repeat:no-repeat;vertical-align:middle}.navbar-tw[_ngcontent-%COMP%]   .nav-links-tw[_ngcontent-%COMP%]{flex-grow:1;flex-basis:100%;align-items:center;overflow:hidden;transition-property:height;transition-duration:.6s;transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width: 992px){.navbar-tw[_ngcontent-%COMP%]   .nav-links-tw[_ngcontent-%COMP%]{display:flex;flex-basis:auto}}.nav-links-tw[_ngcontent-%COMP%]   .ul-links-tw[_ngcontent-%COMP%]{margin-left:auto;margin-bottom:.5rem;display:flex;list-style-type:none;flex-direction:column;padding-left:0}@media (min-width: 992px){.nav-links-tw[_ngcontent-%COMP%]   .ul-links-tw[_ngcontent-%COMP%]{margin-bottom:0;flex-direction:row}}.nav-links-tw[_ngcontent-%COMP%]   .nav-item-tw[_ngcontent-%COMP%]{margin-right:1rem}.nav-item-tw[_ngcontent-%COMP%]   .nav-link-tw[_ngcontent-%COMP%]{display:block;width:fit-content;border-radius:.5rem;padding:.5rem;font-size:1rem;line-height:1.5rem;font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.clicked-active[_ngcontent-%COMP%]{border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(26 188 156 / var(--tw-bg-opacity))}.padding-y-8px[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.height-full[_ngcontent-%COMP%]{height:128px}@media (min-width: 992px){.height-full[_ngcontent-%COMP%]{height:100%}}.height-zero[_ngcontent-%COMP%]{height:0px}@media (min-width: 992px){.height-zero[_ngcontent-%COMP%]{height:100%}}"]})}return n})();var A=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=l({type:n,selectors:[["app-footer"]],standalone:!0,features:[m],decls:28,vars:0,consts:[[1,"footer"],[1,"footer-info"],[1,"location"],[1,"inner"],[1,"web"],[1,"icons"],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-twitter"],[1,"fa-brands","fa-linkedin-in"],[1,"fa-solid","fa-globe"],[1,"freelancer"],[1,"copyright"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3"),o(5,"LOCATION"),e(),t(6,"p"),o(7,"2215 John Daniel Drive"),e(),t(8,"p"),o(9,"Clark, MO 65243"),e()()(),t(10,"div",4)(11,"div",3)(12,"h3"),o(13,"AROUND THE WEB"),e(),t(14,"div",5),r(15,"i",6)(16,"i",7)(17,"i",8)(18,"i",9),e()()(),t(19,"div",10)(20,"div",3)(21,"h3"),o(22,"ABOUT FREELANCER"),e(),t(23,"p"),o(24,"Freelance is a free to use, licensed Bootstrap theme created by Route "),e()()()()(),t(25,"div",11)(26,"p"),o(27,"Copyright \xA9 Your Website 2021"),e()())},styles:[".container[_ngcontent-%COMP%]{width:100%;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container[_ngcontent-%COMP%]{max-width:576px}}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{max-width:992px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.footer[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(44 62 80 / var(--tw-bg-opacity))}.copyright[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(26 37 47 / var(--tw-bg-opacity))}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem;font-weight:400;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:500;line-height:2.125rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.footer[_ngcontent-%COMP%]{padding:2.5rem;text-align:center;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.footer-info[_ngcontent-%COMP%]{margin:1.5rem}@media (min-width: 576px){.footer-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}}.location[_ngcontent-%COMP%], .web[_ngcontent-%COMP%], .freelancer[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column}@media (min-width: 576px){.location[_ngcontent-%COMP%], .web[_ngcontent-%COMP%], .freelancer[_ngcontent-%COMP%]{margin-bottom:0;display:flex;flex-shrink:0;flex-grow:1;flex-basis:0px;border-radius:.375rem}}.footer-info[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{flex-shrink:1;flex-grow:1;flex-basis:auto;padding:1rem;text-align:center}.inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:.5rem;padding-top:1.25rem}.inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:.25rem;margin-right:.25rem;border-radius:9999px;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));padding:.625rem;font-size:1rem;font-weight:400;line-height:1rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4){font-weight:900}.copyright[_ngcontent-%COMP%]{padding:.625rem}.copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem;padding-top:.625rem;text-align:center}"]})}return n})();var T=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=l({type:n,selectors:[["app-about"]],standalone:!0,features:[m],decls:18,vars:0,consts:[[1,"about"],[1,"about-content"],[1,"title"],[1,"line-star-line"],[1,"line"],[1,"fa-solid","fa-star"],[1,"about-text"],[1,"container"],[1,"row-tw"],[1,"right-text"],[1,"left-text"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),o(4,"ABOUT COMPONENT"),e(),t(5,"div",3),r(6,"div",4)(7,"i",5)(8,"div",4),e()(),t(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"p"),o(14,"Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization."),e()(),t(15,"div",10)(16,"p"),o(17," Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. "),e()()()()()()())},styles:[".container[_ngcontent-%COMP%]{width:100%;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container[_ngcontent-%COMP%]{max-width:576px}}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{max-width:992px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.about[_ngcontent-%COMP%]{display:flex;min-height:100lvh;align-items:center;justify-content:center;--tw-bg-opacity: 1;background-color:rgb(26 188 156 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.title[_ngcontent-%COMP%]{width:100%;text-align:center}.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1rem;padding-top:1.5rem;font-size:2.5rem;font-weight:700;line-height:3rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.line-star-line[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex;align-items:center;justify-content:center}.line-star-line[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{margin-right:1rem;height:.25rem;width:5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.line-star-line[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:1rem;display:block;font-size:1rem;line-height:1.5rem;font-weight:900}.about-text[_ngcontent-%COMP%]   .row-tw[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding-left:3rem;padding-right:3rem}.row-tw[_ngcontent-%COMP%]   .right-text[_ngcontent-%COMP%]{max-width:100%;padding-right:.75rem}@media (min-width: 768px){.row-tw[_ngcontent-%COMP%]   .right-text[_ngcontent-%COMP%]{width:50%;flex-shrink:0;flex-grow:0;flex-basis:auto;padding-left:3rem}}.row-tw[_ngcontent-%COMP%]   .left-text[_ngcontent-%COMP%]{max-width:100%;padding-right:3rem;padding-left:.75rem}@media (min-width: 768px){.row-tw[_ngcontent-%COMP%]   .left-text[_ngcontent-%COMP%]{width:50%;flex-shrink:0;flex-grow:0;flex-basis:auto}}.row-tw[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:1rem;line-height:1.5rem;font-weight:400;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}"]})}return n})();var N=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=l({type:n,selectors:[["app-portfolio"]],standalone:!0,features:[m],decls:42,vars:0,consts:[[1,"portfolio"],[1,"portfolio-content"],[1,"title"],[1,"line-star-line"],[1,"line"],[1,"fa-solid","fa-star"],[1,"portfolio-images"],[1,"container"],[1,"row-tw"],[1,"item-image"],[1,"inner"],["src","images/poert1.png","alt",""],[1,"overlay"],[1,"fa-solid","fa-plus"],["src","images/port2.png","alt",""],["src","images/port3.png","alt",""]],template:function(i,a){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),o(4,"portfolio component"),e(),t(5,"div",3),r(6,"div",4)(7,"i",5)(8,"div",4),e()(),t(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10),r(14,"img",11),t(15,"div",12),r(16,"i",13),e()()(),t(17,"div",9)(18,"div",10),r(19,"img",14),t(20,"div",12),r(21,"i",13),e()()(),t(22,"div",9)(23,"div",10),r(24,"img",15),t(25,"div",12),r(26,"i",13),e()()(),t(27,"div",9)(28,"div",10),r(29,"img",11),t(30,"div",12),r(31,"i",13),e()()(),t(32,"div",9)(33,"div",10),r(34,"img",14),t(35,"div",12),r(36,"i",13),e()()(),t(37,"div",9)(38,"div",10),r(39,"img",15),t(40,"div",12),r(41,"i",13),e()()()()()()()())},styles:[".container[_ngcontent-%COMP%]{width:100%;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container[_ngcontent-%COMP%]{max-width:576px}}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{max-width:992px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.portfolio[_ngcontent-%COMP%]{margin-bottom:1.5rem;margin-top:6.625rem;min-height:100lvh;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.portfolio-content[_ngcontent-%COMP%]{padding-top:1.5rem}.portfolio-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-transform:uppercase;--tw-text-opacity: 1;color:rgb(44 62 80 / var(--tw-text-opacity))}.line-star-line[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(44 62 80 / var(--tw-text-opacity))}.line-star-line[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(44 62 80 / var(--tw-bg-opacity))}.container[_ngcontent-%COMP%]   .row-tw[_ngcontent-%COMP%]{display:grid;gap:3rem}@media (min-width: 768px){.container[_ngcontent-%COMP%]   .row-tw[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]   .row-tw[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}}.item-image[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{position:relative;overflow:hidden;border-radius:.5rem}.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:.5rem}.item-image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;height:100%;width:100%;cursor:pointer;align-items:center;justify-content:center;background-color:#1abc9ce6;--tw-text-opacity: 1;color:rgb(33 37 41 / var(--tw-text-opacity));opacity:0;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.6s;transition-timing-function:cubic-bezier(.4,0,1,1)}.item-image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]:hover{opacity:1}.overlay[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:6rem;line-height:1;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}"]})}return n})();var F=(()=>{class n{userLabel=!1;userAgeLabel=!1;uesrEmailLabel=!1;userPasswordLabel=!1;userNameLapbel(){this.userLabel=!0}setUserAgeLapbel(){this.userAgeLabel=!0}setUserEmailLapbel(){this.uesrEmailLabel=!0}setUserPasswordLapbel(){this.userPasswordLabel=!0}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=l({type:n,selectors:[["app-contact"]],standalone:!0,features:[m],decls:26,vars:8,consts:[[1,"contact"],[1,"contact-content"],[1,"title"],[1,"line-star-line"],[1,"line"],[1,"fa-solid","fa-star"],[1,"conatct-form"],[1,"container"],["action",""],["for","userName"],["type","text","placeholder","userName","id","userName","name","userName",1,"input",3,"input"],["for","userAge"],["type","text","placeholder","userAge","id","userAge","name","userAge",1,"input",3,"input"],["for","uesrEmail"],["type","email","placeholder","uesrEmail","id","uesrEmail","name","uesrEmail",1,"input",3,"input"],["for","userPassword"],["type","password","placeholder","userPassword","id","userPassword","name","userPassword",1,"input",3,"input"],["type","button",1,"send-message-btn"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),o(4,"conatct section"),e(),t(5,"div",3),r(6,"div",4)(7,"i",5)(8,"div",4),e()(),t(9,"div",6)(10,"div",7)(11,"form",8)(12,"label",9),o(13,"userName : "),e(),t(14,"input",10),p("input",function(){return a.userNameLapbel()}),e(),t(15,"label",11),o(16,"userAge : "),e(),t(17,"input",12),p("input",function(){return a.setUserAgeLapbel()}),e(),t(18,"label",13),o(19,"uesrEmail : "),e(),t(20,"input",14),p("input",function(){return a.setUserEmailLapbel()}),e(),t(21,"label",15),o(22,"userPassword : "),e(),t(23,"input",16),p("input",function(){return a.setUserPasswordLapbel()}),e(),t(24,"button",17),o(25,"send Message"),e()()()()()()),i&2&&(d(12),u("top-label-0",!!a.userLabel),d(3),u("top-label-0",!!a.userAgeLabel),d(3),u("top-label-0",!!a.uesrEmailLabel),d(3),u("top-label-0",!!a.userPasswordLabel))},styles:[".container[_ngcontent-%COMP%]{width:100%;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container[_ngcontent-%COMP%]{max-width:576px}}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{max-width:992px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.contact[_ngcontent-%COMP%]{margin-bottom:1.5rem;margin-top:6.625rem;min-height:100lvh;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.contact-content[_ngcontent-%COMP%]{padding-top:1rem}.contact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .line-star-line[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(44 62 80 / var(--tw-text-opacity))}.line-star-line[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(44 62 80 / var(--tw-bg-opacity))}.conatct-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:3rem;width:58.333333%;padding:1rem}.conatct-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative;top:2.5rem;margin-bottom:7px;display:inline-block;--tw-text-opacity: 1;color:rgb(26 188 156 / var(--tw-text-opacity));transition-property:top;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.6s}.conatct-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{position:relative;display:block;width:100%;border-radius:.375rem;border-width:0px;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(222 226 230 / var(--tw-border-opacity));padding:1rem .75rem;outline:2px solid transparent;outline-offset:2px;transition-property:box-shadow;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.conatct-form[_ngcontent-%COMP%]   .send-message-btn[_ngcontent-%COMP%]{margin-top:1.5rem;margin-inline-end:auto;display:block;cursor:pointer;border-radius:.375rem;--tw-bg-opacity: 1;background-color:rgb(26 188 156 / var(--tw-bg-opacity));padding:.375rem .75rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.conatct-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label.top-label-0[_ngcontent-%COMP%]{top:0}"]})}return n})();var z=(()=>{class n{title="home";static \u0275fac=function(i){return new(i||n)};static \u0275cmp=l({type:n,selectors:[["app-root"]],standalone:!0,features:[m],decls:3,vars:0,template:function(i,a){i&1&&r(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[k,L,A]})}return n})();var D=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=l({type:n,selectors:[["app-notfound"]],standalone:!0,features:[m],decls:15,vars:0,consts:[[1,"min-h-lvh","lg:px-24","lg:py-24","md:py-20","md:px-44","px-4","py-24","items-center","flex","justify-center","flex-col-reverse","lg:flex-row","md:gap-28","gap-16"],[1,"xl:pt-24","w-full","xl:w-1/2","relative","pb-12","lg:pb-0"],[1,"relative"],[1,"absolute"],[1,""],[1,"my-2","text-gray-800","font-bold","text-2xl"],[1,"my-2","text-gray-800"],["routerLink","/",1,"sm:w-full","lg:w-auto","my-2","border","rounded","md","py-4","px-8","text-center","bg-indigo-600","text-white","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-indigo-700","focus:ring-opacity-50"],["src","https://i.ibb.co/G9DC8S0/404-2.png"],["src","https://i.ibb.co/ck1SGFJ/Group.png"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),o(6," Looks like you've found the doorway to the great nothing "),e(),t(7,"p",6),o(8,"Sorry about that! Please visit our hompage to get where you need to go."),e(),t(9,"button",7),o(10,"Take me there!"),e()()(),t(11,"div"),r(12,"img",8),e()()(),t(13,"div"),r(14,"img",9),e()())},dependencies:[h]})}return n})();var R=[{path:"",component:E},{path:"about",component:T},{path:"portfolio",component:N},{path:"contact",component:F},{path:"**",component:D}];var H={providers:[v({eventCoalescing:!0}),S(R),O()]};var J={providers:[y()]},U=_(H,J);var I=()=>P(z,U),Tt=I;export{Tt as a};
