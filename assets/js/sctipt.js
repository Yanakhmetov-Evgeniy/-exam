function showMenu(nav, btn, hide){
   const navMenu = document.getElementById(nav);
   const navBtn = document.getElementById(btn);

   if(navMenu && navBtn){
       navBtn.addEventListener('click', function(){
           navMenu.classList.toggle(hide);
       })
   }   
}
showMenu('menu-nav', 'menu-btn', 'active');

showMenu('discount', 'discount-btn', 'discount_none');
showMenu('header', 'discount-btn', 'header_padding_none');
showMenu('menu-nav', 'discount-btn', 'menu_padding_none');
showMenu('feautures', 'menu-btn', 'active' );
showMenu('feautures', 'discount-btn', 'feautures_paddong_none');
showMenu('btn-style', 'menu-btn', 'bx-x');
showMenu('catalog', 'catalog__btn', 'catalog__max-width');

