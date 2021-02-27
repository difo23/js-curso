//Argumentos procesados.
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const argv_all = yargs(hideBin(process.argv))
const options = require('./options');


// Agregar los nuevos comandos a nuestra aplicacion CLI

const argv = argv_all
    .command('create', 'Create new task', options.optionsCreate)
    .command('update', 'Actualizar con completed', options.optionsUpdate)
    .command('delete', 'Delete task', options.optionsErase)
    .help()
    .argv;



// Exportamos argv para poder usarlo en todo mi proyecto
module.exports = { argv }
