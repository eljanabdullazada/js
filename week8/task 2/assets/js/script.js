function addItem() {
    const inputBox = document.getElementById('input-box');
    const inputValue = inputBox.value.trim();

    if (inputValue !== '') {
        createListItem(inputValue);
        inputBox.value = '';
    }
}

function createListItem(inputValue) {
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${inputValue}</span>
        <button class="remove-btn" onclick="removeItem(this)">Remove</button>
        <button class="cross-out-btn" onclick="toggleCrossOut(this)">Cross Out</button>
    `;
    todoList.appendChild(listItem);
}


function removeItem(item) {
    item.parentElement.remove();
}


function toggleCrossOut(item) {
    const spanElement = item.parentElement.querySelector('span');
    spanElement.classList.toggle('crossed-out');
}


const inputBox = document.getElementById('input-box');
inputBox.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) { 
        addItem();
    }
});
