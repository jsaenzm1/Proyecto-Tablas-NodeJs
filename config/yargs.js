const { describe, array } = require('yargs');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar inicial'
    })
    .option('f', {
        alias: 'final',
        type: 'number',
        demandOption: true,
        describe: 'Es el final de las tablas de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el número hasta donde quieres la tabla'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if( isNaN( argv.b)){
            throw 'La base tiene que ser un número'
        }
        if(argv.f < argv.b){
            throw 'El número final debe ser mayor o igual al número de tabla inicial'
        }
        return true;
    })
    .argv;
    
    module.exports = argv;



