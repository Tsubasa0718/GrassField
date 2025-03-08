const MenuBtn = document.getElementById('menu-btn')

MenuBtn.addEventListener('click',()=>{
    const Expanded = MenuBtn.getAttribute('aria-expanded');
    const Nav = document.getElementById('nav')

  if(Expanded === 'false'){
    MenuBtn.setAttribute('aria-expanded', 'true');
    Nav.setAttribute('aria-hidden', 'false');
   }else{
    MenuBtn.setAttribute('aria-expanded', 'false');
    Nav.setAttribute('aria-hidden', 'true');
   }

})