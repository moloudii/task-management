// --------------------------------------------------------
// ------------ Begin Fixed Header ---------
// --------------------------
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
// --------------------------------------------------------
// -------------- End Fixed Header ---------
// --------------------------


// --------------------------------------------------------
// ------------ Begin Scrolling Link -------
// --------------------------

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

// --------------------------------------------------------
// ------------ End Scrolling Link ---------
// --------------------------


// --------------------------------------------------------
// ------------ Begin Drop Down ------------
// --------------------------

function allowDrop(ev) {
    ev.preventDefault();
}

function dragCardTask(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropCardTask(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// --------------------------------------------------------
// -------------- End Drop Down ------------
// --------------------------


// --------------------------------------------------------
//  Begin Corresponding to the pop-up window
// --------------------------
let popup = document.getElementById('popup');
let addTaskButton = document.getElementById('add-task-day');
let titlePopup = document.getElementById('title-popup');
const createTask = document.getElementById('create-task');
const unsuccessful = document.getElementById('unsuccessful');

function showPopup(nameTask) {
    popup.style.display = "grid";
    titlePopup.innerHTML = "Create New Task " + nameTask;
    document.getElementById('name-task').focus();

    // to find div father button 
    let div = document.getElementById(`${nameTask}`);
    console.log(div);
}

function closePopup(){
    popup.style.display = "none";
}

window.addEventListener("click", function (event) {
    if (event.target == popup) {
        closePopup();
    }
});

function retryCreateTask(){
    unsuccessful.style.display = "none";
    createTask.style.display = "block";
}

// --------------------------------------------------------
//    End Corresponding to the pop-up window
// --------------------------