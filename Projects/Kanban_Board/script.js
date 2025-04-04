const addTask = document.getElementById('add-task-btn')

const editTask = document.getElementById('item');

const todoBoard = document.getElementById('todo-board')

function attachDragEvents(target){
    target.addEventListener('dragstart', ()=>{
        target.classList.add('flying');
    })
    target.addEventListener('dragend', ()=>{
        target.classList.remove('flying')
    })
}

editTask.addEventListener('click',()=>{
    editTask.setAttribute('contentEditable' , 'true')
})

addTask.addEventListener('click' ,()=>{
    const input = document.getElementById('input-task').value.trim();
    if(!input){alert(' Task cannot be empty '); return ;}
   const taskCard = document.createElement('p');
    taskCard.classList.add('item');
    taskCard.setAttribute('draggable' , true)
    attachDragEvents(taskCard)
    taskCard.innerText = input;

    todoBoard.appendChild(taskCard)
})

/*
whenever a card starts flying we can set an attribute to it as flying
after the drag stops we will remove the attribute
meanwhile , if the dragover monitors the flying card , and we will search for the flying attriute in the card
and set the card to respective board
*/
const allBoards = document.querySelectorAll('.board')

const allItems = document.querySelectorAll('.item');

allItems.forEach((task)=>attachDragEvents(task))

allBoards.forEach((board)=>{
    board.addEventListener('dragover', ()=>{
        const flyingElement = document.querySelector('.flying');
        board.appendChild(flyingElement)
        console.log('flying')
        
    })
})

/*
The element from the current board gets removed and gets add up in another board
just because we are changing the reference of the node to different parent in dom with appendchild
*/ 