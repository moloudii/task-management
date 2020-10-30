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
// ------------ Begin Start Time -----------
// --------------------------
function startTime(ha){
    let nextStart = ha.nextElementSibling;
    let nowTime = new Date(); 
    let startTime = (nowTime.getMonth()+1)+"-"+nowTime.getDate()+ "  " + nowTime.getHours() + ":" + nowTime.getMinutes();
    nextStart.innerHTML = startTime;
}
// --------------------------------------------------------
// ------------ End Start Time -------------
// --------------------------


// --------------------------------------------------------
// ------------ Begin Drop Down ------------
// --------------------------

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function dragCardTask(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function dropCardTask(ev) {
//     ev.preventDefault();
//     let data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }

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
const successful = document.getElementById('successful');
const unsuccessful = document.getElementById('unsuccessful');

function showPopup(nameTask) {
    popup.style.display = "grid";
    titlePopup.innerHTML = "Create New Task " + nameTask;
    document.getElementById('name-new-task').value='';
    createTask.style.display = "block";
    successful.style.display = "none";
    document.getElementById('name-new-task').focus();

    // to find div father button 
    divTasks = document.getElementById(`${nameTask}`);
    console.log(divTasks);
}

function createNewTask(){
    let nameNewTask = document.getElementById('name-new-task').value;
    console.log(nameNewTask);
    let descriptionTask = document.getElementById('description-new-task').value;
    // The description is not empty
    if (descriptionTask !== '') { 
        console.log(descriptionTask);
        descriptionNewTask = descriptionTask;
        console.log(descriptionNewTask);
    }else{
        descriptionNewTask = " ";
    }
    let cardTask = document.createElement('div');
    cardTask.setAttribute("class" , "card-task");
    let textCardTask = document.createElement('div');
    textCardTask.setAttribute("class" , "text-card-task");
    let h4TitleTask = document.createElement('h4');
    h4TitleTask.setAttribute("class" , "title-task");
    h4TitleTask.innerHTML = nameNewTask;
    let pDescriptionTask = document.createElement('p');
    pDescriptionTask.setAttribute("class" , "description-task");
    pDescriptionTask.innerHTML = descriptionNewTask;
    let operationCardTask = document.createElement('div');
    operationCardTask.setAttribute("class" , "operation-card-task");
    let divStart = document.createElement('div');
    divStart.setAttribute("class" , "start"); 
    divStart.setAttribute("onclick" , "startTime(this)");
    let iconStart = document.createElement('i');
    iconStart.setAttribute("class" , "fa fa-play");
    let spanStart = document.createElement('span');
    spanStart.innerHTML = "start";
    spanStart.style.marginLeft = "0.3em";
    let divStartTime = document.createElement('div');
    divStartTime.setAttribute("class" , "start-time");
    let divUser = document.createElement('div');
    divUser.setAttribute("class" , "user");
    let iUser = document.createElement('i');
    iUser.setAttribute("class" , "fa fa-user icon-user");

    textCardTask.appendChild(h4TitleTask);
    textCardTask.appendChild(pDescriptionTask);
    cardTask.appendChild(textCardTask);
    divStart.appendChild(iconStart);
    divStart.appendChild(spanStart);
    operationCardTask.appendChild(divStart);
    operationCardTask.appendChild(divStartTime);
    divUser.appendChild(iUser);
    operationCardTask.appendChild(divUser);
    cardTask.appendChild(operationCardTask);
    divTasks.appendChild(cardTask);

    createTask.style.display = "none";
    successful.style.display = "block";
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