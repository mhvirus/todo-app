window,addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_element = document.querySelector('#tasks');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;

        if (!task) {
            alert('Please enter a task');
            return;
        }

        const task_element = document.createElement('div');
        task_element.classList.add('task');

        const tast_content_element = document.createElement('div');
        tast_content_element.classList.add('content');

        task_element.appendChild(tast_content_element);

        const task_input_element = document.createElement('input');
        task_input_element.classList.add('text');
        task_input_element.type = 'text';
        task_input_element.value = task;
        task_input_element.setAttribute('readonly', true);

        tast_content_element.appendChild(task_input_element);

        const task_action_element = document.createElement('div');
        task_action_element.classList.add('action');

        const task_edit_element = document.createElement('button');
        task_edit_element.classList.add('edit');
        task_edit_element.innerText = 'Edit';

        const task_delete_element = document.createElement('button');
        task_delete_element.classList.add('delete');
        task_delete_element.innerText = 'Delete';

        task_action_element.appendChild(task_edit_element);
        task_action_element.appendChild(task_delete_element);

        task_element.appendChild(task_action_element);

        list_element.appendChild(task_element);

        input.value = '';

        task_edit_element.addEventListener('click', () => {
            if(task_edit_element.innerText.toLowerCase() === 'edit') {
                task_input_element.removeAttribute('readonly');
                task_edit_element.focus();
                task_edit_element.innerText = 'Save';
            } else {
                task_input_element.setAttribute('readonly', true);
                task_edit_element.innerText = 'Edit';
            }
        });

        task_delete_element.addEventListener('click', () => {
            list_element.removeChild(task_element);
        });
    });
});