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


const displayList = () => {
    const listItems = document.querySelector('.list-items');
    toDos.sort((a,b) => a.index - b.index)
toDos.forEach(function(toDo){
    const div = document.createElement('div');
    div.classList.add('list-item')
    div.innerHTML = `<input type="checkbox">${toDo.description}<span>
    <i class="fas fa-ellipsis-v"></i></span>`;
    listItems.appendChild(div);
    console.log(listItems);
})
}
displayList();