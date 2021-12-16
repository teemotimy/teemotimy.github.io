
const historyDis = document.querySelector('.history-display');
const workingDis = document.querySelector('.working-display');
const n = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.ops');
const equalSign = document.querySelector('.equal');

const backspace = document.querySelector('.backspace');
const clearAll = document.querySelector('.clear');

// display
let hisDis = '';
let workDis= '';
let nameOfOperation = '';
let result = null;

let haveDot = false;


n.forEach( number => {
    number.addEventListener( 'click', (e) => {
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        } else if(e.target.innerText === '.' && haveDot){
            return;
        }
        workDis += e.target.innerText;
        workingDis.innerText = workDis;
        workingDis.style.opacity = 1;
    })
})

ops.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        if (!workDis) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (hisDis && workDis && nameOfOperation) {
            mathOperation();
        } else {
            result = parseFloat(workDis);
        }
        clearVar(operationName);
        nameOfOperation = operationName;
    });
});
function clearVar(name = "") {
    hisDis += workDis + " " + name + " ";
    historyDis.innerText = hisDis;
    workingDis.innerText = result;
    workDis = "";
}
function mathOperation() {
    if (nameOfOperation === "x") {
        result = parseFloat(result) * parseFloat(workDis);
    } else if (nameOfOperation === "+") {
        result = parseFloat(result) + parseFloat(workDis);
    } else if (nameOfOperation === "-") {
        result = parseFloat(result) - parseFloat(workDis);
    } else if (nameOfOperation === "/") {
        result = parseFloat(result) / parseFloat(workDis);
    } else if (nameOfOperation === "%") {
        result = parseFloat(result) % parseFloat(workDis);
    }
}

equalSign.addEventListener("click", () => {
    if (!workDis || !hisDis) return;
    haveDot = false;
    mathOperation();
    clearVar();
    workingDis.innerText = result;
    workDis = result;
    hisDis = "";
});
clearAll.addEventListener("click", () => {
    hisDis = "";
    workDis = "";
    historyDis.innerText = "0";
    workingDis.innerText = "0";
    result = "";
    workingDis.style.opacity = .4;
});
backspace.addEventListener("click", () => {
    workingDis.innerText = "0";
    workDis = "";
    workingDis.style.opacity = .4;
});






// keyboard events 
window.addEventListener("keydown", (e) => {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
    ) {
      clickButton(e.key);
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
      clickOperation(e.key);
    } else if (e.key === "*") {
      clickOperation("x");
    } else if (e.key == "Enter" || e.key === "=") {
      clickEqual();
    }
});

function clickButton(key) {
    n.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    });
}
function clickOperation(key) {
    ops.forEach((operation) => {
        if (operation.innerText === key) {
            operation.click();
        }
    });
  }
function clickEqual() {
    equalSign.click();
}