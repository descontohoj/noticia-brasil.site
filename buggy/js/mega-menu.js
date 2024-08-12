jQuery(document).ready(function ($) {
  $(".top-bar .menu-icon").on("click", function () {
    var bod = $("html, body");
    var navContainer = $(".top-bar .top-bar-right");
    var nav = $(".top-bar .nav-wrap");
    var announcements = $(".announcements");

    bod.toggleClass("menu-open");
    navContainer.toggleClass("nav-open");
    nav.toggleClass("open");
    announcements.toggleClass("hidden");
  });

  $(".top-bar li.menu-item-has-children > a").on(
    "click touchend",
    function (e) {
      if (
        e.target.nodeName === "A" &&
        !$(e.target).closest(".mega-menu__container-inner").length
      ) {
        e.preventDefault();
      }

      // Check if the closest click was within the mega menu, return if it was
      if ($(e.target).closest(".mega-menu__container-inner").length) {
        return;
      }

      // If the window is above 1023px, bail
      if ($(window).width() > 1023) {
        return;
      }

      var megaMenu = $(this).parent().find(".mega-menu__container-inner");
      var megaMenuActiveItemTitle = $('[data-js="active-menu-item"]');
      var container = $(".nav-wrap.open");

      // Check if the window is between 767px and 1023px to handle accordion behavior
      if ($(window).width() > 767 && $(window).width() <= 1023) {
        $(this).parent().toggleClass("active");
        container.css("overflow-y", "auto");
        megaMenu.toggleClass("open").parent().toggleClass("active");
        return;
      }

      container.css("overflow-y", "auto");
      megaMenu.addClass("open");
      megaMenuActiveItemTitle.text($(this).text()).toggleClass("bold");
    }
  );

  $('[data-js="active-menu-item"]').on("click", function () {
    // Return if the active item has the text "Menu"
    if ($(this).text() === "Menu") return;

    var container = $(".nav-wrap.open");
    var megaMenu = $(".mega-menu__container-inner.open");
    var sideMenu = $("#sidemenu");

    container.css("overflow-y", "hidden");
    megaMenu.removeClass("open");
    sideMenu.removeClass("mega-menu-open");

    $(this).text("Menu").toggleClass("bold");
  });

  // Check for window resize to reset nav container overflow
  $(window).on("resize", function () {
    var container = $(".nav-wrap");
    // Check if the window is between above 1023px to remove the overflow hidden
    if ($(window).width() > 1023) {
      container.css("overflow-y", "unset");
    }
  });

  // Set the proper event listener for A tag "clicks" using the enter key
  $(".mega-menu__sub-menu li a").on("keydown", function (e) {
    if (e.keyCode === 13) {
      this.click();
    }
  });

  // Change img to svg.
  $subMenuImgs = $(".mega-menu__sub-menu--content li img");
  if ($subMenuImgs.length > 0) {
    $subMenuImgs.each(function () {
      let $img = jQuery(this);
      let imgURL = $img.attr("src");

      // Check if the img url contains a .svg extension
      if (imgURL.indexOf(".svg") === -1) {
        return;
      }

      jQuery.get(
        imgURL,
        function (data) {
          let $svg = jQuery(data).find("svg");
          $svg = $svg.removeAttr("xmlns:a");
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  }

  // Set active class on the current page
  let currentUrl = window.location.href;
  let $menuItems = $(".mega-menu__sub-menu--content li");

  $menuItems.each(function () {
    let $this = $(this);
    let $thisUrl = $this.find("a").attr("href");

    if (currentUrl === $thisUrl) {
      $this.addClass("active");
    }
  });
});
