const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea hacer"
}

const completado = {
    alias: 'c',
    default: true,
    desc: "Marca completado una tarea"

}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por haer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento de la base', {
        descripcion
    })

.help()
    .argv;

module.exports = {
    argv
}