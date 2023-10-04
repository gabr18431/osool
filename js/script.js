//
let btnTamlek = document.getElementById("btn-tamlek");
let btnEgar = document.getElementById("btn-egar");
$(btnEgar).click(function () {
    $(".to-le.container").slideUp(50);
    $(".to-re.container").slideToggle(300);
    $(".menu-egar").slideToggle(300)
});
$(btnTamlek).click(function () {
    $(".to-re.container").slideUp(50);
    $(".to-le.container").slideToggle(300);
    $(".menu-tamlek").slideToggle(300);
});
$("nav .menu").on('click' , function () {
    $("nav .menu-mobile").slideToggle();
})
// ********************************
let ourSkills = document.querySelector(".about");

window.onscroll = function () {
    // skills ofset top
    let skillOffsetTop = ourSkills.offsetTop;

    // skills outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

    //  wendow height
    let windowHeight = this.innerHeight;

    // window scroll top
    let windowScrollTop = this.pageYOffset;
    if (
        windowScrollTop >
        (skillOffsetTop + skillsOuterHeight - windowHeight)
    ) {
        let allSkills = document.querySelector(
            ".about .img img"
        );
        allSkills.style.transform = "translateX(0)";

        let SkillBox = document.querySelector(
            ".about .text-about"
        );
        SkillBox.style.transform = "translateX(0) scale(1)";

    } else if (
        windowScrollTop <
        (skillOffsetTop + skillsOuterHeight - windowHeight)
    ) {
        let allSkills = document.querySelector(
            ".about .img img"
        );
        allSkills.style.transform = "translateX(-120%)";
        let SkillBox = document.querySelector(
            ".about .text-about"
        );
        SkillBox.style.transform = "translateX(100%) scale(0)";
    }
};

window.addEventListener('load', function () {
    var h1 = document.getElementById('header-animated');
    var p = document.getElementById('p-animated');
    h1.style.transform = 'translateY(0) scale(1)';
    p.style.transform = 'translateY(0) scale(1)';
});