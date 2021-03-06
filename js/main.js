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
// -------------- Begin Get Date Now -------
// --------------------------
function getDateNow(){
    let divDate = document.getElementById('date');
    let nowDate = new Date();
    let readyTime = (nowDate.getMonth()+1)+"/"+nowDate.getDate()+"/"+nowDate.getFullYear();
    divDate.innerHTML = readyTime;

}
// --------------------------------------------------------
// -------------- End Get Date Now ---------
// --------------------------


// --------------------------------------------------------
// ------------ Begin Scrolling Link -------
// --------------------------

$(document).ready(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault(),

        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 170,
            },
            800,
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
function startTime(self){
    let iconChange = self.getElementsByTagName("i")[0];
    iconChange.classList.remove("fa-play");
    iconChange.classList.add("fa-pause");
    let textChange = self.getElementsByTagName("span")[0];
    textChange.innerHTML = "Pause";
    self.setAttribute("onclick" , "stopTime(this)");
    let nextStart = self.nextElementSibling;
    let nowTime = new Date(); 
    let startTime = (nowTime.getMonth()+1)+"-"+nowTime.getDate()+ "  " + nowTime.getHours() + ":" + nowTime.getMinutes()+`<sub>(Start)</sub>`;
    nextStart.innerHTML = startTime;
}
// --------------------------------------------------------
// ------------ End Start Time -------------
// --------------------------


// --------------------------------------------------------
// ------------ Begin Stop Time ------------
// --------------------------
function stopTime(self){
    let iconChange = self.getElementsByTagName("i")[0];
    iconChange.classList.remove("fa-pause");
    iconChange.classList.add("fa-play");
    let textChange = self.getElementsByTagName("span")[0];
    textChange.innerHTML = "Stop";
    self.setAttribute("onclick" , "startTime(this)");
    let nextStop = self.nextElementSibling;
    let nowTime = new Date(); 
    let stopTime = (nowTime.getMonth()+1)+"-"+nowTime.getDate()+ "  " + nowTime.getHours() + ":" + nowTime.getMinutes()+`<sub>(Pause)</sub>`;
    nextStop.innerHTML = stopTime;
}
// --------------------------------------------------------
// ------------ End Stop Time --------------
// --------------------------


// --------------------------------------------------------
// ------------ Begin Edit Task ------------
// --------------------------
let editTaskCounter = 0;
function editTask(selfDivText){
    if (editTaskCounter === 0) {
        let h4Text = selfDivText.querySelector("h4").innerHTML;
        let pText = selfDivText.querySelector("p").innerHTML;
        selfDivText.innerHTML = '';
        let createForm = document.createElement("form");
        createForm.setAttribute("action" , "#");
        createForm.setAttribute("onsubmit" , "saveEdit(this)");
        let createTextareaName = document.createElement("textarea");
        createTextareaName.innerHTML = h4Text;
        let createTextarea = document.createElement("textarea");
        createTextarea.innerHTML = pText;
        createTextarea.addEventListener("click" , function(event){
            this.select();
        });
        let createButton = document.createElement("input");
        createButton.setAttribute("type" , "submit");
        createButton.setAttribute("value" , "Save");
        let createButtonBack = document.createElement("input");
        createButtonBack.setAttribute("type" , "button");
        createButtonBack.setAttribute("value" , "Cancel");
        createButtonBack.setAttribute("onclick" , "cancelEdit(this)");

        createForm.appendChild(createTextareaName);
        createForm.appendChild(createTextarea);
        createForm.appendChild(createButton);
        createForm.appendChild(createButtonBack);
        selfDivText.appendChild(createForm);
        selfDivText.querySelector("textarea").focus();
        selfDivText.querySelector("textarea").select();
        editTaskCounter = 1;

        // save data for create back Button
        valueH4Text = h4Text;
        valuePText = pText;
    }else{
        // alert("Please Save or Back Edit");
        editTask.preventDefault();
    }
}

function saveEdit(inputEdit){
    let valueForm = inputEdit.querySelectorAll("textarea");
    let nameTaskEdit = valueForm[0].value;
    let descriptionTask = valueForm[1].value;
    let father = inputEdit.parentElement;
    father.innerHTML = '';
    let createH4 = document.createElement("h4");
    createH4.setAttribute("class" , "title-task");
    createH4.innerHTML = nameTaskEdit;
    let createP = document.createElement("p");
    createP.setAttribute("class" , "description-task");
    createP.innerHTML = descriptionTask;

    father.appendChild(createH4);
    father.appendChild(createP);

    editTaskCounter = 0;
}

function cancelEdit(inputCancel){
    let father = inputCancel.parentElement.parentElement;
    father.innerHTML = '';
    let createH4 = document.createElement("h4");
    createH4.setAttribute("class" , "title-task");
    createH4.innerHTML = valueH4Text;
    let createP = document.createElement("p");
    createP.setAttribute("class" , "description-task");
    createP.innerHTML = valuePText;
    
    father.appendChild(createH4);
    father.appendChild(createP);

    editTaskCounter = 0;
}

// --------------------------------------------------------
// ------------ End Edit Task --------------
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
    document.getElementById('description-new-task').value="";
    createTask.style.display = "block";
    successful.style.display = "none";
    document.getElementById('name-new-task').focus();

    // to find div father button 
    divTasks = document.getElementById(`${nameTask}`);
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
    textCardTask.setAttribute("ondblclick" , "editTask(this)");
    textCardTask.setAttribute("title" , "double click for edit");
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