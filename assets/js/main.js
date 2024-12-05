

(function ($) {
    "use strict";



    /*-----------------------------------
      Sidebar Toggle
    -----------------------------------*/
    var scrollTop;
    $(".half-expand-toggle").on("click", function () {
        scrollTop = $(".sidebar-menu").offset().top;
        $("#layout-wrapper").toggleClass("half-expand");
    });
    $(".close-toggle").on("click", function () {
        $("#layout-wrapper").toggleClass("sidebar-expand");
    });



    /*----------------------------------------------
      Select 2 Single
    ----------------------------------------------*/
    $(".select2").select2({
        placeholder: "Choose one",
        width: "100%",
    });

    /*----------------------------------------------
      Select 2 Single [Modal] // Modal select2 issue
    ----------------------------------------------*/
    $(".select2-modal").select2({
        placeholder: "Choose one",
        width: "100%",
        dropdownParent: $(".modal")  // Modal select2 issue
    });

    /*----------------------------------------------
      Select 2 Multiple
    ----------------------------------------------*/
    $(".multiple-select").select2({
        multiple: true,
        width: "100%",
        placeholder: "Choose one",
        tags: "true",
        placeholder: "Select an option",
    });



    /*-----------------------------------
      Password Show Hide
    -----------------------------------*/
    $(document).ready(function () {
        $(".toggle-password").click(function () {
            var passwordInput = $($(this).siblings(".password-input"));
            var icon = $(this);
            if (passwordInput.attr("type") == "password") {
                passwordInput.attr("type", "text");
                icon.removeClass("ri-eye-line").addClass("ri-eye-off-line");
            } else {
                passwordInput.attr("type", "password");
                icon.removeClass("ri-eye-off-line").addClass("ri-eye-line");
            }
        });
    })
    $('#myModal1').on('shown.bs.modal', function (e) {
        $(document).off('focusin.modal');
    })

  /*------------------------------
      payment gateway selection
  -------------------------------*/
  $(".payment-gateway-list li").on('click', function () {
    $(".payment-gateway-list li").removeClass("selected");
    $(this).addClass("selected");
})


})(jQuery);



