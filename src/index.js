import _ from 'lodash';
import './style.css';
import addTodo from './addTodo.js';

let toDos = [
    {
        description: 'Go to market',
        completed: true,
        index: 1
    },

    {
        description: 'Take some rest',
        completed: true,
        index: 3,
    },
    {
        description: 'Go to gym',
        completed: true,
        index: 2,
    },
]

// console.log(toDos);

const displayList = () => {
    const listItem = document.querySelector('.list-item');
    toDos.sort((a,b) => a.index - b.index)
toDos.forEach(function(toDo,i){
    const div = document.createElement('div');
    div.innerHTML = `<input type="checkbox">${toDo.description} <span>
    <i class="fas fa-ellipsis-v"></i>
    <hr class="line-break">`;
    // console.log(div);
    listItem.appendChild(div)
    console.log(listItem);
})
}
displayList();