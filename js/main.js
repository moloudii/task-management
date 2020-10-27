window.onscroll = function () {
    fixedHeader()
};
var navbar = document.getElementsByClassName("user-date");
var sticky = navbar.offsetTop;

function fixedHeader() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        $(".columns-section").css("margin-top", "4.5em");
    }
}
$(document).ready(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 170,
            },
            200,
            'linear'
        )
    });
});
function allowDrop(ev){
    ev.preventDefault();
}
function dragCardTask(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}
function dropCardTask(ev){
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}