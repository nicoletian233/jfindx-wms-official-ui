//导航暂停定位
 $(document).ready(function(){ 
	  $(".nav li a").each(function(){ 
		$this = $(this); 
		if($this[0].href==String(window.location)){ 
		  $this.addClass("navon"); 
		  $("#navId1").removeClass("navon")
		  if($this.attr('id')=="t1"){
			$("#navId1").addClass("navon")
		  }
		} 
	  }); 
	});
	
	
// 手机导航打开
$('.nav_menu').on('click', function(){
    $('.top_right').toggleClass('open');
    $(this).toggleClass('open');
});

// 关闭导航
$('.header-nav a, .nav-mobile .demo').on('click', function(){
    $('.nav-mobile').removeClass('open');
    $('.burger').removeClass('open');
});

/*手机端导航二级目录点击效果*/
if(document.body.clientWidth <= 1023){  
	$(".lff_top .lfftop_main .top_right .nav li> i").click(function () {
	if($(this).parents('li').hasClass('on')){
		$(this).parents('li').removeClass('on').find('div').stop().slideUp(300);
	}else{
		$(this).parents('li').find('div').removeAttr("style");
		$(this).parents('li').addClass('on').find('div').stop().slideDown(300);
	}
});
}
/*产品目录 end*/
	
//pc搜索
   $(".top_search").find("em").click(function(){
	  if($(".top_right").attr("id")!="showopen")
	  {
		  $(".top_right").attr("id","showopen");
		  $("#js-search-overlay").fadeIn();
	  }
  });
   $("#js-search-overlay").click(function(){
		  $(this).fadeOut();
		  $(".top_right").attr("id","");
  })
	$(".moblie-search-close").click(function(){
		  $("#js-search-overlay").fadeOut();
		  $(".top_right").attr("id","");
  })
 			

//banner 切换	
    var lySwiper1 = new Swiper('#swiper1', {      
        autoplay: 6000,//自动播放时间
        loop: true,//开启循环true or false
        slidesPerView: 1, //列数
        spaceBetween: 0, //slides之间间隔
        breakpointsInverse: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
	 paginationClickable: true,
       observer:true,
       observeParents:true,
       autoplayDisableOnInteraction:false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            1080: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
	
//案例展示 切换	
    var lySwiper2 = new Swiper('#swiper2', {      
        autoplay: 6000,//自动播放时间
        loop: true,//开启循环true or false
        slidesPerView: 3, //列数
        spaceBetween: 30, //slides之间间隔
        breakpointsInverse: true,
        observer:true,
        observeParents:true,
        autoplayDisableOnInteraction:false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            1080: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });