const his = document.querySelector('.history-display');
const main = document.querySelector('.working-display');
const num = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.ops');
const dot = document.querySelector('.dot');
const per = document.querySelector('.modulo')
const equal = document.querySelector('.equal');

const backspace = document.querySelector('.backspace');
const clearAll = document.querySelector('.clear');

let mainDisplay = "";
let result = null;
let haveDot = false;

// var c = console.log

/* -------------- displays -------------- */
/* ------- numbers ------- */
num.forEach( number =>{
    number.addEventListener( 'click', e => {
        if ( main.innerText === "0"){
            main.innerText = "";
            mainDisplay = e.target.innerText;
            main.innerText += mainDisplay;
            main.style.opacity = 1;
        } else if ( main.innerText !== "0" ){
            mainDisplay = e.target.innerText;
            main.innerText += mainDisplay;
        }

    });
});

/* ------- dot ------- */
dot.addEventListener('click', e => {
    let nums = main.innerText;
    let period = dot.innerText;
    if ( checkDot(nums, period) === haveDot ){
        main.innerText += e.target.innerText;
        main.style.opacity = 1;
        // c(checkDot(nums, period));
    }
})
// create a function to check if there is a dot in the main display
checkDot = (nums, period) => {
    let input = nums.indexOf(period) > -1;
    return input;
}

/* ------- percentage ------- */
per.addEventListener('click', e => {
    result = parseFloat(main.innerText) / 100;
    main.innerText = result;
})

/* ------- operations ------- */
ops.forEach(operation => {
    operation.addEventListener( 'click', e => {
        let tempResult = main.innerText;
        his.innerText = `${tempResult} ${e.target.innerText}`;
        main.textContent = "0";
    })
})

/* ------- equal ------- */
equal.addEventListener( 'click', e => {
    let tempResult = main.innerText;
    his.innerText += ` ${tempResult}`;
    mathOperation();
})


/* -------------- math operations -------------- */
mathOperation = () => {
    let stringHis = his.innerText;
    let expression = strToArray(stringHis);
    if ( expression.includes("+") === true ){
        result = parseFloat(his.innerText) + parseFloat(main.innerText)
    } else if ( expression.includes("-") === true ){
        result = parseFloat(his.innerText) - parseFloat(main.innerText)
    } else if ( expression.includes("x") === true ){
        result = parseFloat(his.innerText) * parseFloat(main.innerText)
    } else if ( expression.includes("/") === true ){
        result = parseFloat(his.innerText) / parseFloat(main.innerText)
    }
    main.textContent = result;
};


/* ------- deleting and clearing display ------- */
// deleting last entry
backspace.addEventListener( 'click', () => {
    let stringNum = main.innerText;
    let del = strToArray(stringNum);
    if (stringNum !== "0" ){
        del.splice(-1);
        main.innerText = del.join('');
    }
    if (del.length === 0){
        main.innerText = "0";
        main.style.opacity = .4;
    }
    if (main.innerText === "0"){
        main.style.opacity = .4;
    }

})
// converting string on display into array
strToArray = (str) =>{
    return [...str];
}
// clearing display
clearAll.addEventListener('click', () => {
    his.innerText = "0";
    main.innerText = "0";
})


/* ------- keyboard keys ------- */
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
        e.key === "9" 
    ){
    pressBut(e.key);
    }   else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    pressOps(e.key);
    }   else if (e.key === "*") {
    pressOps("x");
    }   else if (e.key == "Backspace") {
    pressBack();
    }   else if (e.key == "Delete") {
    pressDelete();
    }   else if (e.key == ".") {
    pressDot();
    }   else if (e.key == "Enter" || e.key === "=") {
    pressEqual();
    };
});

pressBut = key => {
    num.forEach((but) => {
        if (but.innerText === key) {
            but.click();
        };
    });
};
pressOps = key => {
    ops.forEach((op) => {
        if (op.innerText === key) {
            op.click();
        };
    });
};
pressBack = () => {
    backspace.click();
};
pressDelete = () => {
    clearAll.click();
};
pressDot = () => {
    dot.click();
};
pressEqual = () => {
    equal.click();
};