const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tareas por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar completado o pendiente'
};

const argv = require('yargs')
                    .command('crear', 'Crear un elemento por hacer', {descripcion })
                    .command('actualizar', 'Actualiza un elemento por hacer', {descripcion,completado})
                    .command('borrar', 'Borra un elemento por hacer', {descripcion})
                    .command('listc', 'Listar tareas completadas', {completado}).help().argv;;

module.exports = {
    argv
};
