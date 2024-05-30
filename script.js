document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    const itemList = document.getElementById('itemList');

    addItemButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            addItem(itemText);
            itemInput.value = '';
        }
    });

    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const itemText = itemInput.value.trim();
            if (itemText !== '') {
                addItem(itemText);
                itemInput.value = '';
            }
        }
    });

    function addItem(itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.addEventListener('click', () => {
            li.classList.toggle('purchased');
        });

        li.appendChild(deleteButton);
        itemList.appendChild(li);
    }
});
