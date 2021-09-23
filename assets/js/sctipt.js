function showMenu(nav, btn){
   const navMenu = document.getElementById(nav);
   const navBtn = document.getElementById(btn);

   if(navMenu && navBtn){
       navBtn.addEventListener('click', function(){
           navMenu.classList.toggle('active');
       })
   }   
}
showMenu('menu-nav', 'menu-btn');

function showMenu(discount, btn){
   const navMenu = document.getElementById(discount);
   const navBtn = document.getElementById(btn);

   if(navMenu && navBtn){
       navBtn.addEventListener('click', function(){
           navMenu.classList.toggle('active');
       })
   }   
}
showMenu('discount', 'discount__btn_none');