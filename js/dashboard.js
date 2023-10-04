// login page ***************************
$(document).ready(function () {
    $(".project").slideUp();
    $("body").on("click", ".larg div h3", function () {
        if ($(this).children("span").hasClass("close")) {
            $(this).children("span").removeClass("close");
        } else {
            $(this).children("span").addClass("close");
        }
        $(this).parent().children("div").slideToggle(250);
    });
    $("body").on("click", "nav ul li a", function () {
        var title = $(this).data("title");
        $(".title").children("h2").html(title);
    });
    $("#team").click(function () {
        $(".larg").children("div").fadeOut("5");
        $(".message-user").fadeOut("5");
        $(".team-company-container").fadeIn("slow");
    });
    $("#products").click(function () {
        $(".larg").children("div").fadeIn("slow");
        $(".team-company-container").fadeOut("5");
        $(".aad-project").fadeOut("5");
        $(".message-user").fadeOut("5");
    });
    $("#addProject").click(function () {
        $("div").fadeOut("5");
        $(".message-user").fadeOut("5");
        $(".larg").children(".aad-project").fadeIn("slow");
    });
    $(".project .edit").on("click", function () {
        $("#form-popup").fadeIn("slow");
        var idBtn = this.getAttribute("id");
        var inputHid = document.getElementById("inputHidden");
        inputHid.value = idBtn;
        console.log(inputHid.value);
    });
    $("#close").on("click", function () {
        $("#form-popup").fadeOut("slow");
    });
    $("#message").on("click", function () {
        $(".larg").children("div").fadeOut();
        $(".team-company-container").fadeOut("5");
        $(".aad-project").fadeOut("5");
        $(".message-user").fadeIn("slow");
    });
});
