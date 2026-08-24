 $(function () {
 
 // ハンバーガーメニューのクリックイベント
  $(".toggle_btn").on("click", function () {
    // .toggle_btnをクリックしたときに実行する
    //  function:実行する

    ($("header").toggleClass("open"));
  });
  // headerに対してopenクラスを追加または削除する。
  // クラスの追加と削除は、ハンバーガーメニューの表示と非表示を切り替えるために使用される。

  // toggleClassメソッドを使用することで、hamburgerクラスにopenクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる


  // #maskのエリアをクリックした時にメニューを閉じる
  $(".mask").on("click", function () {
    // #maskをクリックしたときに実行する
    $("header").toggleClass("open");

  });

  // リンクをクリックした時にメニューを閉じる
  $("nav a").on("click", function () {
    // #nav aをクリックしたときに実行する

    $("header").toggleClass("open");
  });


 /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // 画面がスクロールされた時に実行する

    $(".fadein").each(function () {
      // fadeinクラスに対して順に処理を行う
      // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる。


      // スクロールした距離
      let scroll = $(window).scrollTop();
      // 現在のスクロール位置を取得する。
      // scrollTop()：要素のスクロール位置を取得

      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;

      // 画面の高さ
      let windowHeight = $(window).height();

      // fadeinクラスの要素が画面内にきたタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {

        // 条件が満たされた場合、要素の不透明度（opacity）を1に設定し、Y軸方向に移動（translateY）させます。
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

  });
/*テキストスクロールアニメーション*/

const texts = document.querySelectorAll(".slide-text");

window.addEventListener("scroll", () => {
  texts.forEach((text) => {
    const textPosition = text.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (textPosition < windowHeight - 100) {
      text.classList.add("active");
    }
  });
});


});

 