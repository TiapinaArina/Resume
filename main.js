let content = document.querySelector('.content')

if (localStorage.getItem("default")){
    content.innerHTML=localStorage.getItem("default");
}
let inps =document.querySelectorAll('input')

inps.forEach(inp =>{
    inp.addEventListener('input', function(){
        inp.setAttribute("value",inp.value);
        localStorage.setItem("default",content.innerHTML);
    })
})


const btnSave=document.querySelector('.btn-save')
btnSave.addEventListener('click',function(){
    let name=prompt('Введите имя');
    localStorage.setItem(name,content.innerHTML);
})

const btnClear=document.querySelector('.btn-clear')
btnClear.addEventListener('click',function(){
    localStorage.removeItem("default");
    location.reload();
})