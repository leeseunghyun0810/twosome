
// 버튼 클릭 메뉴창
let show = document.getElementById('show');
let hide = document.getElementById("hide");
let close = document.getElementById('closeBtn');
let no_scroll = document.getElementById('no_scroll');

show.addEventListener('click', function() {
  hide.style.right = '0';
  no_scroll.style.height = "100%";
  no_scroll.style.overflow = 'hidden';
});

close.addEventListener('click', function() {
  hide.style.right = "-500vw"
  no_scroll.style.overflow = 'visible'
});


// 제이쿼리 
$(function(){  
  // 팝업 메뉴 스크립트1
  $('.modal_wrap .modal_list > li > a').on('mouseenter', function(){ //해당 객체에 올렸을 때
    $('.modal_wrap .modal_list > li > .modal').hide(); //초기화
    $(this).siblings('.modal').stop().fadeIn(300); // modal 안의 sub 보이기
    $('.modal_wrap .modal_list > li > a').removeClass('on'); // after 효과 초기화
    $(this).addClass('on'); // 해당 객체 보이기
    $('.modal_list').addClass('on'); // 글자 활성화
  });

  // 팝업 메뉴 스크립트2
  $('.modal_list').on('mouseleave', function(){ //마우스 뗐을 때
    $('.modal_wrap .modal_list > li > a').removeClass('on'); 
    $('.modal_list').removeClass('on');
    $('.modal_wrap .modal_list > li > .modal').hide();
  })

  // // 메뉴 애니메이션 효과
  $('#show').on('click', function(){ //클릭할 때 나타남
    $('.modal_list > li').addClass('ani');
  })

  $('#closeBtn').on('click', function(){ //나갈 때 초기화
    $('.modal_list > li').removeClass('ani');
  })
  
  // 메뉴에 마우스 올렸을 때 
  $('nav').on('mouseenter',function(){
    $(this).find('.sub_menu').stop().slideDown(200);
    $(this).find('.bg').stop().slideDown(200);
    $('header').css({'backgroundColor':'white'});
    // $('nav > .gnb > li > a').css({'color':'#000'});
    // $('#image').attr('src','../images/logo_black.svg');
    // $('.menuBtn').css({'backgroundImage':'url(../images/menu_ico_b.png)'});
  })
  // 메뉴에서 마우스 내렸을 때
  $('nav').on('mouseleave',function(){
    $(this).find('.sub_menu').stop().slideUp(200);
    $(this).find('.bg').stop().slideUp(200);
    $('header').css({'backgroundColor':''})
    // $('header').css({'backgroundColor':'rgba(0,0,0, 0.8)','position':'fixed'});
    // $('nav > .gnb > li > a').css({'color':'#fff'});
    // $('#image').attr('src','../images/logo_white.svg');
    // $('.menuBtn').css({'backgroundImage':'url(../images/menu_ico.png)'});
  })

  //마우스 휠 이벤트
  // $('body').on('mousewheel', function(event, delta){ // 휠 올릴 때
  //   if(delta > 0){
  //     $('header').css({'backgroundColor':'rgba(0,0,0, 0.8)','position':'fixed'});
  //     $('nav .gnb > li > a').css({'color':'#fff'})
  //     $('.menuBtn').css({'backgroundImage':'url(../images/menu_ico.png)'});
  //     $('#image').attr('src','../images/logo_white.svg');
  //   }  
  // })
  // $('body').on('mousewheel', function(event, delta){ // 휠 내릴 때
  //   if(delta < 0){
  //     $('header').css({'backgroundColor':'rgba(0,0,0, 0.8)','position':'absolute'});
  //     $('nav .gnb > li > a').css({'color':'#fff'})
  //     $('.menuBtn').css({'backgroundImage':'url(../images/menu_ico.png)'});
  //     $('#image').attr('src','../images/logo_white.svg');
  //   }  
  // })

  // 프랜차이즈 갤러리
  
  //썸네일 클릭하면 메인 이미지 변경
  $('.thumbs > li > img').on('click',function(){ //썸네일 클릭 시 함수
    let img = $(this).attr('src'); // 변수 img에다가 src 경로 지정
    
    $('.big_img > li > img').css({'opacity':'0'}).stop().attr('src',img).animate({opacity:1},500); // 이미지 애니메이션 효과
    $(this).parent().css({'opacity':'1'}); //현재 선택자의 부모의 css값 변경
    $('.thumbs > li > img').not(this).parent().css({'opacity':'.3'}); //현재 선택자의 부모 제외한 css값 변경

    //썸네일 클릭하면 텍스트 등장
    let idx = $('.thumbs > li > img').index(this);
    
    $('.big_img > li > p').removeClass('on').css({'bottom':'-150px'}); //썸네일 클릭하면 on 제거
    $('.big_img > li').removeClass('on'); 
    $('.big_img > li').eq(idx).find('p').addClass('on').css({'bottom':'-150px'}).stop().animate({bottom:'30px'},100); //썸네일 클릭하면 on 추가
    $('.big_img > li').eq(idx).addClass('on');
    return false;
  })


  //버튼 클릭 이미지 loop
  $('.nextBtn').on('click',function(){ //다음 버튼 클릭 시 함수
    $('.thumbs').stop(true,true).animate({marginLeft:'-=254px'},500,function(){
      $('.thumbs > li:first-child').appendTo('.thumbs');
      $(this).css({marginLeft:'0px'});
    })
    $('.img_text').stop(true,true).animate({marginLeft:''},500,function(){
      $('.img_text > li:first-child').appendTo('.img_text');
      $(this).css({marginLeft:'0px'});
    })
    $('.big_img').stop(true,true).animate({marginLeft:''},500,function(){
      $('.big_img > li:first-child').appendTo('.big_img');
      $(this).css({marginLeft:'0px'});
    })
  })
  $('.preBtn').on('click',function(){ //이전 버튼 클릭 시 함수
    $('.thumbs').stop(true,true).animate({marginLeft:'+=254px'},500,function(){
      $('.thumbs > li:last-child').prependTo('.thumbs');
      $(this).css({marginLeft:'0px'});
    })
    $('.img_text').stop(true,true).animate({marginLeft:''},500,function(){
      $('.img_text > li:last-child').prependTo('.img_text');
      $(this).css({marginLeft:'0px'});
    })
    $('.big_img').stop(true,true).animate({marginLeft:''},500,function(){
      $('.big_img > li:last-child').prependTo('.big_img');
      $(this).css({marginLeft:'0px'});
    })
  })
  
  // 메인 화면
  let $img = $('.main_visual'); //이미지 위치 변수 
  let oldImg = 0; //기존 이미지
  let newImg = 0; //새로운 이미지
  let imgCount = $img.length; //이미지 개수
  let $page = $('.pagenation > li'); //page 위치 
  let oldPage = 0;
  let newPage = 0;
  let pageCount = $page.length; //page 개수
  

  function changeImg(newImg){
    if(oldImg != newImg){
      $('.pagenation > li').eq(oldImg).removeClass('on');
      $('.pagenation > li').eq(newImg).addClass('on');
      $img.eq(oldImg).removeClass('on'); //on클래스 삭제
      $img.eq(newImg).addClass('on'); //on클래스 추가
    }
    oldImg = newImg;
  };

  $('.rightBtn').on('click',function(){ //오른쪽 버튼 클릭했을 때 함수
    newImg++; 
    if(newImg>imgCount-1){
      newImg = 0;
    }
    changeImg(newImg);
  });
  
  $('.leftBtn').on('click',function(){
    newImg--;
    if(newImg<0){
      newImg=imgCount-1;
    }
    changeImg(newImg);
  });

  $('.pagenation > li').on('click',function(){ //하단 버튼 클릭 시 이미지 변경
    newImg=$(this).index(); 
    changeImg(newImg); //이 함수를 불러옴
  })
})

