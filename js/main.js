document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper("main .swiper", {
        navigation: {
          nextEl: "main .swiper-button-next a",
          prevEl: "main .swiper-button-prev a",
        },
        loop: true,
        speed: 600,
        effect: 'fade',
        autoHeight : true,
        spaceBetween: 30,
         autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });
      
});
    
  $(function(){
    var btn = '.story_tab .story_btn a';
    var contents = '.story_tab .contentsWrap > div';
  
    $(btn).first().attr('title', '선택됨').parents('li').addClass('active');
    $(contents).first().fadeIn(0);
   
    $(btn).click(function(e){
      
      e.preventDefault();
    
      $(btn).removeAttr('title').parents('li').removeClass('active'); 
      $(this).attr('title', '선택됨').parents('li').addClass('active');
  
      var index = $(this).parents().index();
    
      $(contents).stop().fadeOut(0);
      $(contents).eq(index).stop().fadeIn(0);
    });
  });
