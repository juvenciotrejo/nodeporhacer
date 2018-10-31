//const argv = require('yargs').argv;
const colors = require('colors');
const argv = require('./config/yargs').argv;

const porHacer = require('./porhacer/porhacer');
//console.log(argv);

let command = argv._[0];
switch (command) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            let listado = porHacer.getListado();
            console.log('======== por hacer ====='.green);
            console.log(tarea.descripcion);
            console.log('estado: ', tarea.completado);
            console.log('========================'.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}