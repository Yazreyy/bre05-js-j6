let todos = [];

window.toggleTodo = (index) => {
    todos[index].termine = !todos[index].termine;
    afficherTodos();
};

// 2. Supprimer une tâche
window.supprimerTodo = (index) => {
    todos.splice(index, 1);
    afficherTodos();
};

function afficherTodos() {
    const list = document.getElementById('todo-list'); // Utilise le bon ID ici
    list.innerHTML = ""; 

    for (let i = 0; i < todos.length; i++) {
        const item = todos[i];
        const li = document.createElement('li');
        li.className = `todo-item ${item.termine ? 'completed' : ''}`;

        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${item.termine ? 'checked' : ''} onchange="toggleTodo(${i})">
            <span class="todo-text">${item.texte}</span>
            <button class="delete-btn" onclick="supprimerTodo(${i})">Supprimer</button>
        `;
        list.appendChild(li);
    }
}


    window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form'); // Utilise le bon ID ici
    const input = document.getElementById('todo-input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (input.value.trim() === "") return; // Évite d'ajouter des tâches vides

        const nouvelleTache = {
            texte: input.value,
            termine: false
        };

        todos.push(nouvelleTache);
        input.value = ""; 
        afficherTodos();
    });
});
