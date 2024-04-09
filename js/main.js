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
    
document.addEventListener('DOMContentLoaded', function() {
  var linkPlusBtn = document.querySelector('.link_plus');
  var groupsList = document.querySelector('.groups');

  // 관련 사이트 버튼 클릭 이벤트
  linkPlusBtn.addEventListener('click', function() {
      // 현재 상태에 따라 토글
      if (groupsList.style.display === 'none') {
          groupsList.style.display = 'block';
          linkPlusBtn.textContent = '관련 사이트 ▲'; // 버튼 텍스트 변경
      } else {
          groupsList.style.display = 'none';
          linkPlusBtn.textContent = '관련 사이트 ▼'; // 버튼 텍스트 변경
      }
  });
});
