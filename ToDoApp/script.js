const form = document.querySelector('form');
const todosDiv = document.querySelector('.todos');
const reminder = document.querySelector('#set-reminder');
let deleteBtns;
const bellSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z\"/></svg>";
const deleteSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z\"/></svg>";

const dataPrep = () => {
	let data = JSON.parse(localStorage.getItem('todo'));
	todosDiv.innerHTML = '<h3>Your Todos</h3>';

	if(data) {
		for(let todo of data) {
			let node = document.createElement('div');
			node.className = 'todo';

			let task = document.createElement('span');
			task.className = 'task';
			task.innerText = todo.task;
			node.appendChild(task);

			if(todo.reminder === true) {
				let reminder = document.createElement('button');
				reminder.className = 'reminder';
				reminder.innerHTML = bellSvg;
				node.appendChild(reminder);
			}

			let date = document.createElement('span');
			date.className = 'date';
			date.innerText = todo.date;
			node.appendChild(date);

			let deleteBtn  = document.createElement('button');
			deleteBtn.className = 'delete';
			deleteBtn.innerHTML = deleteSvg;
			deleteBtn.dataset.id = todo.id;
			node.appendChild(deleteBtn);

			todosDiv.appendChild(node);
		}
	}

	if(data.length === 0) todosDiv.innerHTML += '<p>Nothing to Show :/</p>';

	deleteBtns = document.querySelectorAll('.delete');
	deleteBtns.forEach( btn => btn.addEventListener('click', deleteTodo) );
}

window.onload = () => {
	// Loading the saved to do items from local storage
	dataPrep();
}

const storeItem = (data) => {
	let pre_data = JSON.parse(localStorage.getItem('todo'));
	if(!pre_data) {
		localStorage.setItem('todo', JSON.stringify([data]));
	} 

	else {
		let new_data = [...pre_data, data];
		localStorage.setItem('todo', JSON.stringify(new_data));
	}
}

const addTodo = (e) => {
	e.preventDefault();
	const task = document.getElementById('task').value;
	const set_date = document.getElementById('set-date').value
	const set_reminder = document.getElementById('set-reminder').checked;

	const id = Math.random(1000);

	let form_data = {
		id: id,
		task: task,
		reminder: set_reminder,
		date: set_date,
	}

	storeItem(form_data);

	document.getElementById('task').value = '';
	document.getElementById('set-date').value = '';

	dataPrep();
}

const deleteTodo = (e) => {
	let todos = JSON.parse(localStorage.getItem('todo'));
	let id = e.path !== undefined ? e.path[2].dataset.id : e.target.dataset.id;
	let new_todos = todos.filter(todo => todo.id != id);

	localStorage.removeItem('todo');
	localStorage.setItem('todo', JSON.stringify(new_todos));

	dataPrep();
}

form.addEventListener('submit', addTodo);