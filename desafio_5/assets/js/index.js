const btn_add_task = document.querySelector('#btn-add-task');
const table_task = document.querySelector('#tasks');
const name_task = document.querySelector('#name-task');

const span_total = document.querySelector('#total');
const span_done = document.querySelector('#done');

let last_id = 0;

const array_tasks = new Array();

// Actualizar total de tareas
function update_total() {
    span_total.innerHTML = array_tasks.length;
}

// Actualizar tareas realizadas
function update_done() {
    let done = 0;

    array_tasks.forEach((task) => {
        if (task.done)
            done += 1;
    });

    span_done.innerHTML = done;
}

// Genera un render en HTML de una tarea
function insert_row_task(task, newRow) {
    newRow.id = `task-${task.id}`;

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = `<span class="task-class-${task.id}">${task.id}</span>`;
    cell2.innerHTML = `<span class="task-class-${task.id}">${task.name}</span>`;
    cell3.innerHTML = `
    <input type="checkbox" id="task-done-${task.id}" name="task-done-${task.id}" onchange="onchange_done_task(${task.id})">
    <button onclick="onclick_del_task(${task.id})" class="boton-cruz">&times;</button>`;
}

function get_index(id) {
    return array_tasks.findIndex((ele) => ele.id == id);
}

// Genera un nuevo ID de tareas
function new_id() {
    last_id += 1;
    return last_id;
}

// Agrega una tarea al array global de tareas
function add_array_task(name) {
    if (name) {
        const task = {
            'id': new_id(),
            'name': name,
            'done': false
        };
        array_tasks.push(task);
        return task;
    }
    return null;
}

// Agregar tarea en html
function add_task(task) {
    const newRow = table_task.insertRow();
    insert_row_task(task, newRow);
}

// Borra una tarea del array global de tareas
function del_array_task(id) {
    const index = get_index(id);
    if (index >= 0) {
        array_tasks.splice(index, 1);
        return true;
    }
    return false;
}

// Borrar tarea del html
function del_task(id) {
    const row_task = document.querySelector(`#task-${id}`);
    table_task.deleteRow(row_task.rowIndex)
}

// Agregar tarea en array y en html
function append_task(name) {
    const task = add_array_task(name);
    if (task) {
        add_task(task);
        update_total();
        update_done();
    }
}

// Listener de botón para agregar tarea
btn_add_task.addEventListener("click", () => {
    if (name_task.value) {
        const name = name_task.value.replace(/[^a-zA-Z0-9]/g, ''); // Limpiar texto HTML
        append_task(name);
        name_task.value = "";
    }
});

// Función para borrar tarea
function onclick_del_task(id) {
    if (del_array_task(id)) {
        del_task(id);
        update_total();
        update_done();
    }
}

// Actualizar realizados
function onchange_done_task(id) {
    const index = get_index(id);
    if (index >= 0) {
        array_tasks[index].done = !array_tasks[index].done;
        update_total();
        update_done();
        const all_class_task = document.querySelectorAll(`.task-class-${id}`);
        all_class_task.forEach((class_task) => {
            if (array_tasks[index].done) {
                class_task.classList.add('done');
            } else {
                class_task.classList.remove('done');
            }
        });
    }
}

// Agregar 3 tareas por defecto
append_task('Tarea 1');
append_task('Tarea 2');
append_task('Tarea 3');

