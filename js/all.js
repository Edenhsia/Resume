$(document).ready(function () {
  // ---------- Navbar ----------
  $('.nav-button').click(function () {
    $('.nav').toggleClass('nav-show');
    $(this).toggleClass('nav-button-on');
    if ($(this).hasClass('nav-button-on')) {
      $('.nav-button i').attr('class', 'fa fa-times');
    } else {
      $('.nav-button i').attr('class', 'fa fa-bars');
    }
  })


  // ---------- Skills左右鍵按鈕 ---------- 
  // 畫面大小拖拉時，.list, .prev, .next 回至原始位置
  $(window).resize(function () {
    $('.list').css('margin-left', 'auto');
    $('.prev').attr('disabled', true);
    $('.prev').addClass('disabled');
    $('.next').attr('disabled', false);
    $('.next').removeClass('disabled');
  })

  // 計算總共有幾個 item
  const n = $('.list .item').length;
  //計算 .item 的 width + margin
  const moveTotal = parseInt($(".list .item").css('margin-left')) +
    parseInt($(".list .item").css('margin-right')) + parseInt($(".list .item").css('width'));
  //計算 margin-left 最大值，計算到倒數第二個的 margin-left
  //-moveTotal * (n-1) - (-moveTotal) * 5
  const marginMax = -moveTotal * (n - 6);
  //取出 .list 的 margin-left 值
  const marginLeft = () => parseInt($('.list').css('margin-left'));


  $('.prev').click(function () {
    $(this).attr('disabled', true);
    //.prev 點擊後，.next 的 disabled 關掉，disabled 樣式拿掉
    $('.next').attr('disabled', false);
    $('.next').removeClass('disabled');
    //如果 .list margin-left 剛好等於一個 moveTotal 寬的時候（資料在第二個時）
    if (marginLeft() == -moveTotal) {
      //先向左移動一個 moveTotal
      $('.list').animate({
        'margin-left': `+=${moveTotal}px`
      });
      //.prev 鍵 disabled，加上 disabled 樣式
      $(this).attr('disabled', true);
      $(this).addClass('disabled');
    } else {
      //其他，向左移動一個 moveTotal 距離
      $('.list').animate({
        'margin-left': `+=${moveTotal}px`
      });
      setTimeout(function () {
        $('.prev').attr('disabled', false);
      }, 400)
    }
  });

  $('.next').click(function () {
    $(this).attr('disabled', true);
    // .next 點擊後，.prev 的 disabled 關掉，disabled 樣式拿掉
    $('.prev').attr('disabled', false);
    $('.prev').removeClass('disabled');
    //如果 .list margin-left 剛好等於一個資料再倒數第二個位置時 margin-left
    if (marginLeft() == marginMax) {
      //先向右移動一個 moveTotal
      $('.list').animate({
        'margin-left': `-=${moveTotal}px`
      });
      //.next 鍵 disabled，加上 disabled 樣式
      $(this).attr('disabled', true);
      $(this).addClass('disabled');
    } else {
      //其他，向右移動一個 moveTotal 距離
      $('.list').animate({
        'margin-left': `-=${moveTotal}px`
      });
      setTimeout(function () {
        $('.next').attr('disabled', false);
      }, 400)
    }
  });
});