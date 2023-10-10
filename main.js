let content = document.querySelector('.content')

if (localStorage.getItem("default")) {
    content.innerHTML = localStorage.getItem("default");
}

let inps = document.querySelectorAll('input, textarea')

inps.forEach(inp => {
    inp.addEventListener('input', function () {
        if (inp.type === "text" || inp.type === "range" || inp.type === 'number' || inp.type === 'tel' || inp.type === 'email' || inp.type === 'url') {
            inp.setAttribute("value", inp.value);
        }
        if (inp.type === "checkbox") {
            if (inp.checked) {
                inp.setAttribute("checked", '');
            }
            else {
                inp.removeAttribute('checked')
            }
        }
        if (inp.type === 'url') {
            inp.setAttribute("value", inp.value);
        }
        if (inp.tagName === 'TEXTAREA') {
            inp.innerHTML = inp.value;
        }
        localStorage.setItem("default", content.innerHTML);
    })
})

const btnSave = document.querySelector('.btn-save')
btnSave.addEventListener('click', function () {
    let name = prompt('Введите имя');
    localStorage.setItem(name, content.innerHTML);
})

const btnClear = document.querySelector('.btn-clear')
btnClear.addEventListener('click', function () {
    localStorage.removeItem("default");
    location.reload();
})

const btnRestore = document.querySelector('.btn-restore')
btnRestore.addEventListener('click', function () {
    let name = prompt('Введите имя');
    content.innerHTML = localStorage.getItem(name);
    localStorage.setItem("default", content.innerHTML);
})


function addBlock(list, item, placeholderFirst, placeholderSecond) {
    let educationList = document.querySelector(list);
    let listItem = document.createElement('div');
    listItem.setAttribute('class', 'item');
    educationList.appendChild(listItem);

    let inputFirst = document.createElement('input');
    inputFirst.setAttribute('type', 'text');
    inputFirst.setAttribute('placeholder', placeholderFirst);
    inputFirst.setAttribute('class','.reg-inp');
    listItem.appendChild(inputFirst);

    let inputSecond = document.createElement('input');
    inputSecond.setAttribute('type', 'text');
    inputSecond.setAttribute('placeholder', placeholderSecond);
    listItem.appendChild(inputSecond);

    let closeButton = document.createElement('button');
    closeButton.classList.add("close-button");
    closeButton.innerHTML = 'x'
    closeButton.setAttribute('onclick', 'this.parentElement.remove()');
    listItem.appendChild(closeButton);

    localStorage.setItem("default", content.innerHTML);
}

function inpTest(inpReg, inpId) {
    if (inpReg.test(inpId.value)) {
        inpId.classList.add('inp-true');
        inpId.classList.remove('inp-false');
    }
    else {
        inpId.classList.remove('inp-true');
        inpId.classList.add('inp-false');
    }
}

let patt = "^([А-я]{3,10}) ([А-я]{3,10})( [А-я]{3,10})?$";
let fioReg = new RegExp(patt);
let fio = document.getElementById("name");
fio.onclick = inpTest(fioReg, fio);

patt = "^(([A-z]{1}[a-z]+)@([a-z]{5,10}).([a-z]{2,5}))$";
let emailReg = new RegExp(patt);
let email = document.getElementById("email");
email.onclick = inpTest(emailReg, email);
/*/
patt="^((+?7|8)([0-9]{3})([0-9]{3}-?[0-9]{2}-?[0-9]{2}))$";
let telReg=new RegExp(patt);
let tel = document.getElementById("phone");
tel.onclick=inpTest(telReg,tel);
/*/
patt = "^([А-Я]{1,400})$";
let globalReg = new RegExp(patt);
let globals = document.querySelectorAll('.reg-inp');
globals.forEach(global => {
    global.onclick = inpTest(globalReg, global);
})
