const text_box = document.querySelector(".text_box");
const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const value = e.target.dataset.num;
        text_box.value += value;
        saveAdd();
    })
});

equal.addEventListener('click', function(e){
    if (text_box.value === ''){
        text_box.value = 'Please enter';
    }else{
        let answer = eval(text_box.value);
        text_box.value = answer;
        saveAdd();
    }
});

clear.addEventListener('click', function(){
    text_box.value = "";
    saveAdd();
});

function saveAdd(){
    localStorage.setItem("data", text_box.value);
}
function loadAdd(){
    text_box.value = localStorage.getItem("data");
}
loadAdd();