var elList, addLink, newEl, newText, counter, listItems, newItem;

elList = document.getElementById('list');
addLink = document.getElementById('submit');
newItem = document.getElementById('userInput');

function addItem(e) {
    var newTextItem = newItem.value;
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode(newTextItem);
    newEl.appendChild(newText);
    elList.appendChild(newEl);
    newItem.value = '';
}

addLink.addEventListener('click', addItem, false);