#!/usr/bin/env node

// Importamos la libreria Yargs desde node_modules
const yargs = require('yargs/yargs');

// Importamos colors para darle color a nuestros console.log() en terminal
const colors = require('colors');

//Importamos el paquete por default de node para manejar archivos fs
const fs = require('fs');

// Limpiamos un poco los argumentos como:  node y file.js
const { hideBin } = require('yargs/helpers');

//Argumentos procesados.
const argv_all = yargs(hideBin(process.argv))


// Guardamos el path a nuestro archivo task.json
const filePath = './db/task.json';

// Creamos un objeto para tener nuestras tareas en memomia
// Busquedas por title o titulo


// Funcion para cargar task desde task.json
const loadTask = () => {
    let listTask
    try {
        listTask = require('./db/task.json')
    } catch (error) {
        console.log("Error cargando lista de bd".red, error);
        listTask = {}
    }
    return listTask;
}

// Funcion para guardar los task en task.json
const saveTask = (listTask) => {

    let data = JSON.stringify(listTask);
    try {

        fs.writeFile(filePath, data, (error) => {
            if (error) throw new Error("Error Create by me: ", error)
        })

    } catch (error) {
        console.log("Error write file: ".red, error)
    }
}




// Funcion crear una tarea nueva

const createTask = (title, desc) => {

    let listTask = loadTask();

    if (title in listTask) {
        console.log("Esta tarea existe!".red);
    } else {

        listTask[title] = {
            title,
            desc,
            completed: false
        }
        saveTask(listTask);

    }

    return listTask[title];

}

//TODO: Crear funcion marcar completed con true

const update = (title) => {

    let list = loadTask();

    if (title in list) {
        list[title] = { ...list[title], completed: true }
        saveTask(list);
    } else {
        console.log(`Este titulo no existe ${title}`.red);
    }

}

//TODO: Crear funcion borrar task

const erase = (title) => {
    let list = loadTask();

    if (title in list) {
        delete list[title]
        saveTask(list);
    } else {
        console.log(`Este titulo no existe ${title}`.red);
    }
}



// La parte .green solo es posible gracias a importar colors
console.log("Establecemos opciones o banderas de comandos".green)

const description = {
    demand: true, // Opcion obligatoria
    alias: 'd', // - 
    desc: 'Descripcion de la tarea a realizar'
}

const title = {
    demand: true, // Opcion obligatoria
    alias: 't', // - 
    desc: 'Titulo de la tarea a realizar - unico'
}

const completed = {
    alias: 'c',
    default: true, // Por default su valor es true
    desc: 'Marca como completada la tarea'
}
const erased = {
    alias: 'e',
    default: true, // Por default su valor es true
    desc: 'Borrar la tarea'
}

// Esta bandera sera oblicatoria para el comando create.
const optionsCreate = {
    description,
    title
}

const optionsUpdate = {

    title,
    completed
}
const optionsErased = {

    title,
    erased
}

// Agregar los nuevos comandos a nuestra aplicacion CLI

const argv = argv_all
    .command('create', 'Create new task', optionsCreate)
    .command('update', 'Actualizar con completed', optionsUpdate)
    .command('erase', 'Delete task', optionsErased)
    .help()
    .argv;

console.log("Argumentos obtenidos por argv: ".yellow, argv);

const command = argv._[0];

switch (command) {

    case 'create':
        // Comando create ejecutado creo una nueva nota en mi tasks.md
        let task = createTask(argv.title, argv.description)
        console.log("Tarea: ".blue, task)
        break;

    case 'update':
        // Comando create ejecutado creo una nueva nota en mi tasks.md
        update(argv.title);
        break;

    case 'erase':
        // Comando create ejecutado creo una nueva nota en mi tasks.md
        erase(argv.title);
        break;

    default:
        const msg = (!!argv._[0]) ?
            `No existe este comando: ${argv._[0]}`
            : 'Favor colocar un comando [create, delete, update, read]';

        console.log(msg.red);

        break;
}

// Exportamos argv para poder usarlo en todo mi proyecto
module.exports = {
    argv
}