let nameControl = document.getElementById("name");
let gradeControl = document.getElementById("grade");
let messagesControl = document.getElementById("messages");
let specializationControl = document.getElementById("specialization");
let genderControl = document.getElementById("gender");

function onSendButtonClick() {
    resetMessagesControl();
    testNameControlValue();
    testGradeControlValue();
    testSpecializationControlValue();
    if (isMessagesControlEmpty()) {
        appendIntoMessagesControl("The data is correct.");
    }
}

function onResetButtonClick() {
    resetNameControl();
    resetGradeControl();
    resetSpecializationControl();
    resetMessagesControl();
}

function resetMessagesControl() {
    messagesControl.innerText = "";
}

function isMessagesControlEmpty() {
    return messagesControl.innerText == "";
}

function appendIntoMessagesControl(message) {
    messagesControl.innerHTML += message + "\n";
}

function testNameControlValue() {
    if (!isValueInNameControlValid()) {
        appendIntoMessagesControl("The name should be a string with length between 3 and 50 characters.");
        markNameControlAsHavingWrongValue();
    }
    else {
        markNameControlAsHavingCorrectValue();
    }
}

function isValueInNameControlValid() {
    return (nameControl.value.length >= 3 && nameControl.value.length <= 50);
}

function markNameControlAsHavingWrongValue() {
    nameControl.style.backgroundColor = "pink";
}

function markNameControlAsHavingCorrectValue() {
    nameControl.style.backgroundColor = "lightgreen";
}

function markNameControlAsHavingInitialValue() {
    nameControl.style.backgroundColor = "white";
}

function resetNameControl() {
    nameControl.value = "";
    markNameControlAsHavingInitialValue();
}

function testGradeControlValue() {
    if (!isValueInGradeControlValid()) {
        appendIntoMessagesControl("The grade should be a number between 1 and 10.");
        markGradeControlAsHavingWrongValue();
    }
    else {
        markGradeControlAsHavingCorrectValue();
    }
}

function isValueInGradeControlValid() {
    return (!isNaN(gradeControl.value) && gradeControl.value >= 1 && gradeControl.value <= 10);
}

function markGradeControlAsHavingWrongValue() {
    gradeControl.style.backgroundColor = "pink";
}

function markGradeControlAsHavingCorrectValue() {
    gradeControl.style.backgroundColor = "lightgreen";
}

function markGradeControlAsHavingInitialValue() {
    gradeControl.style.backgroundColor = "white";
}

function resetGradeControl() {
    gradeControl.value = "";
    markGradeControlAsHavingInitialValue();
}

function testSpecializationControlValue() {
    if (!isValueInSpecializationControlValid()) {
        appendIntoMessagesControl("Specialization not selected!")
        markSpecializationControlAsHavingWrongValue();
    } else {
        markSpecializationControlAsHavingCorrectValue();
    }
}

function isValueInSpecializationControlValid() {
    return (specializationControl.value !== "")
}

function markSpecializationControlAsHavingWrongValue() {
    specializationControl.style.backgroundColor = "pink";
}

function markSpecializationControlAsHavingCorrectValue() {
    specializationControl.style.backgroundColor = "lightgreen";
}

function markSpecializationControlAsHavingInitialValue() {
    specializationControl.style.backgroundColor = "white";
}

function resetSpecializationControl() {
    specializationControl.value = "";
    markSpecializationControlAsHavingInitialValue();
}

function checkGender() {
    if(genderControl.rad)
    
}