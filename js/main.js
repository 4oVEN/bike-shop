$(function(){
  $('input, select').styler();


  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
});

});

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu__list');

      function toggleMenu() {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
      }
      hamburger.addEventListener('click', toggleMenu);
      menu.addEventListener('click', toggleMenu);
      

      //modal

      $('[data-modal=modal]').on('click', function(){
        $('.modal', '.top__order').fadeIn();
      });