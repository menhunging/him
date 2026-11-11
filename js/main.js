$(document).ready(function () {
  if ($(".header__burger").length > 0) {
    let burger = $(".header__burger");
    let menu = $(".header__nav");
    let body = $("body");

    burger.on("click", function () {
      handleClick();
    });

    function handleClick() {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.addClass("opened");
        body.addClass("is-openMenu");
      }
    }

    function closeMenu() {
      burger.removeClass("opened");
      menu.removeClass("opened");
      body.removeClass("is-openMenu");
    }

    $(window).resize(function () {
      $(window).width() < 1280 && closeMenu();
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($("select").length > 0) {
    $("select").select2({
      minimumResultsForSearch: Infinity,
      width: "100%",
      templateResult: function (option) {
        return option.id === "" ? null : option.text;
      },
    });

    $(".job-filters__reset").on("click", function (event) {
      event.preventDefault();

      $(this)
        .closest(".job-filters")
        .find("select")
        .each(function () {
          this.selectedIndex = 0;
        })
        .trigger("change");
    });
  }

  if ($(".resume-vacancies__more").length > 0) {
    $(".resume-vacancies").each(function () {
      const block = $(this);
      const button = block.find(".resume-vacancies__more");
      const vacancies = block.find(".resume-vacancy--more");

      if (!vacancies.length) {
        button.hide();
        return;
      }

      button.on("click", function () {
        const isOpened = button.hasClass("opened");

        vacancies.toggleClass("visible", !isOpened);
        button.toggleClass("opened", !isOpened);
        button.attr("aria-expanded", String(!isOpened));
        button.find("span").text(isOpened ? "Показать больше" : "Скрыть");
      });
    });
  }

  if ($(".slider-news").length > 0) {
    const swiper = new Swiper(".slider-news", {
      slidesPerView: 4,
      spaceBetween: 24,
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1550: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
  }

  if ($(".popup-login__role").length > 0) {
    $(".popup-login__role").on("click", function () {
      const button = $(this);
      const popup = button.closest(".popup-login");

      popup.find(".popup-login__role").removeClass("active");
      button.addClass("active");
      popup.find("[name='role']").val(button.data("role"));
    });
  }

  if ($("[data-modal]").length > 0) {
    $("[data-modal]").on("click", function (event) {
      event.preventDefault();
      MicroModal.show($(this).attr("data-modal"), {
        disableScroll: true,
      });
    });
  }
});
