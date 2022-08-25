const btn = document.querySelector('.btn')
const inp = document.querySelector('.inp')
const list = document.querySelector('.card_wrapper')
const elemInfo = document.querySelector('.extraInfo')

const todoList = []
let id = 0

function addTask() {
    if(inp.value !== ''){
        const inpValue = inp.value    
        todoList.push(inpValue)    
        const elem = `<li class="card">${inpValue} <button class=btn-delete data=${id++} onclick=deleteTask(this)><i class="fa-solid fa-xmark"></i></button> </li> `
        list.insertAdjacentHTML("afterEnd",elem)
        inp.value = ''
        elemInfo.style.display = 'none'
    } else {
        elemInfo.style.display = ''
        elemInfo.append("The impute field cannot be empty")
    }
}


function deleteTask(element){
    const index = element.getAttribute('data')
    todoList.splice(index,1)
    element.parentNode.remove()
}