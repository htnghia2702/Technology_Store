window.addEventListener("load",function(){
   var sider_text = document.querySelectorAll(".text-slider");
   var img_right_sider = document.querySelectorAll(".img-right");
   var img_left_sider = document.querySelectorAll(".img-left");
   sider_text.forEach(text => {
      text.classList.add('cdlen');
   });
   img_left_sider.forEach(left=>{
      left.classList.add('cdphai');
   });
   img_right_sider.forEach(right=>{
      right.classList.add('cdtrai');
   });
   $('.list .list-item').hover(function () {
      $('#box-img').removeClass().addClass($(this).attr('rel'));
      $(this).addClass('active').siblings().removeClass('active');
  })
})