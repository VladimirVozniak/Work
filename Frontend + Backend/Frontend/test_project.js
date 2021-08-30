let tasks = JSON.parse(localStorage.getItem('tasks')) || [],
    name = '',
    cost = 0,
    date1 = '',
    input1,
    input2,
    list,
    buttonAdd,
    sum = 0,
    editMode = false

//---------------------(v) frontend + backend (v)------------------------------------------

async function GetTasks() {
    const resp = await fetch('http://localhost:8000/allTasks', {
        method: 'GET',
        headers: {"Accept": "application/json"}
    })
    const result = await resp.json()
    tasks = result.data
}

async function NewTask(name, cost, date1, editMode) {
    const resp = await fetch('http://localhost:8000/createTask', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            name: name,
            cost: cost,
            date: date1,
            editMode: editMode
        })
    })
}

async function EditTask(id, name, cost) {
    const resp = await fetch('http://localhost:8000/updateTask', {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            name: name,
            cost: cost,
            _id: id
        })
    })
    const result = await resp.json()
    tasks = result.data
}

async function DeleteTask(id) {
    const resp = await fetch('http://localhost:8000/deleteTask', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            _id: id
        })
    })
    const result = await resp.json()
    tasks = result.data
}

// --------------------(^) frontend + backend (^)------------------------------------------


window.onload = async function init() {
    list = document.querySelector('.lists')
    input1 = document.querySelector('.input1-text')
    input2 = document.querySelector('.input2-text')
    buttonAdd = document.querySelector('.button-add')

    input1.addEventListener('change', updateValueName)
    input2.addEventListener('change', updateValueCost)
    buttonAdd.addEventListener('click', addInList)

    render(tasks)

    await GetTasks()

    render(tasks)
}

addInList = () => {
    if (input1.value !== '' || input2.value !== '') {
        let date = new Date();
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0');
        let yyyy = date.getFullYear();
        date1 = dd + '.' + mm + '.' + yyyy;

        tasks.push({
            name: name,
            cost: cost,
            date: date1,
            editMode: editMode,
        })

        render(tasks)

        NewTask(name, cost, date1, editMode)

        localStorage.setItem('tasks', JSON.stringify(tasks))

        input1.value = ''
        input2.value = ''
        name = ''
        cost = 0

        render(tasks)
    }
}

const updateValueName = (event) => {
    name = event.target.value
}

const updateValueCost = (event) => {
    cost = Number(event.target.value)
}

const onIconDelete = (elem, tasks) => {
    DeleteTask(elem._id)

    console.log('tasks: ', tasks)
    console.log('_id: ', elem._id)
    console.log(elem)

    tasks = tasks.filter(task => task._id !== elem._id)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    console.log('tasks: ', tasks)

    render(tasks)
}

render = (tasks) => {
    while (list.firstChild)
        list.removeChild(list.firstChild)

    if (tasks.length !== 0) {
        tasks.forEach((elem, index) => {
            const container = document.createElement('li')
            container.className = 'list'

            const div1 = document.createElement(('div'))
            div1.className = 'qwe'
            container.append(div1)

// --------------------(v) Edit mode (v)------------------------------------------------------

            if (tasks[index].editMode) {
                const container = document.createElement('li')
                container.className = 'list'

                const div1 = document.createElement(('div'))
                div1.className = 'qwe'
                container.append(div1)

                const div21 = document.createElement('div')
                div21.className = 'edit-enable'
                div1.append(div21)

                const input_text_name = document.createElement('input')
                input_text_name.className = 'input-text input-text__edit input-text__edit-name'
                div21.append(input_text_name)

                const separator = document.createElement('p')
                separator.className = 'separator'
                separator.innerHTML = '|'
                div21.append(separator)

                const input_text_cost = document.createElement('input')
                input_text_cost.className = 'input-text input-text__edit input-text__edit-cost'
                div21.append(input_text_cost)

                const iconAccept = document.createElement('button')
                iconAccept.className = 'icon edit-enable-icon edit-enable__accept'
                div21.append(iconAccept)

                const iconCancel = document.createElement('button')
                iconCancel.className = 'icon edit-enable-icon edit-enable__cancel'
                div21.append(iconCancel)

                const background = document.createElement('p')
                background.className = 'background'
                div21.append(background)

                input_text_name.value = tasks[index].name
                input_text_cost.value = tasks[index].cost

                list.append(container)

                container.classList.add('list-offset')

                iconAccept.addEventListener('click', function () {
                    container.classList.toggle('list-offset')
                    div21.classList.toggle('edit-disable')

                    tasks[index].name = input_text_name.value
                    tasks[index].cost = input_text_cost.value
                    tasks[index].editMode = false

                    EditTask(elem._id, tasks[index].name, tasks[index].cost)

                    render(tasks)
                })

                iconCancel.addEventListener('click', function () {
                    tasks[index].editMode = false
                    render(tasks)
                })
            }
// --------------------(v) View mode (v)------------------------------------------------------
            else {
                const div22 = document.createElement('div')
                div22.className = 'list-elem list-elem1'
                div1.append(div22)

                const pName = document.createElement('p')
                pName.className = 'name'
                pName.innerHTML = 'Магазин' + ' "' + elem.name + '" ' + elem.date
                div22.append(pName)


                const div23 = document.createElement('div')
                div23.className = 'list-elem list-elem2'
                div1.append(div23)

                const pCost = document.createElement('p')
                pCost.className = 'cost'
                pCost.innerHTML = elem.cost + ' р.'
                div23.append(pCost)

                const iconEdit = document.createElement('button')
                iconEdit.className = 'icon icon-edit'
                div23.append(iconEdit)

                const iconDelete = document.createElement('button')
                iconDelete.className = 'icon icon-delete'
                div23.append(iconDelete)

                iconDelete.onclick = async () => {
                    await onIconDelete(elem, tasks)
                }

                iconEdit.addEventListener('click', function () {
                    tasks[index].editMode = true
                    render(tasks)
                })

                list.append(container)
            }

// --------------------(v) Total sum (v)------------------------------------------------------

            sum = 0
            tasks.forEach(elem => {
                sum += Number(elem.cost)
            })

            const totalCost = document.querySelector('.total-text')
            totalCost.innerHTML = 'Итого: ' + sum + ' р.'

            localStorage.setItem('tasks', JSON.stringify(tasks))
        })
    } else {
        sum = 0
        const totalCost = document.querySelector('.total-text')
        totalCost.innerHTML = 'Итого: ' + sum + ' р.'
    }
}