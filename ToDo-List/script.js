// Select all items that we will manipulate with
let inputField = document.getElementById('inputField');
let btn = document.getElementById('btn');
let output = document.getElementById('toDoOutput');

// Click button
btn.addEventListener ('click', function() {
    let item = document.createElement('div');
    let div = document.createElement('div');
    let text = document.createElement('p');
    let closeIcon = document.createElement('i');
    item.className='item-styling';
    text.innerText = inputField.value;

    // Append close icon on div
    div.appendChild(closeIcon);
    closeIcon.className='fa-solid fa-xmark';
    closeIcon.style.color='grey';

    // When click close item will be removed
    closeIcon.addEventListener('click', () => {
        item.remove();
    });
    
    // Append others elements
    item.appendChild(text);
    item.appendChild(div);

    document.getElementById('toDoOutput').appendChild(item);
    inputField.value="";
    item.setAttribute('tabindex', '1');
});
