const argv = require('./config/yargs').argv;
const { crearArchivo, ListarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        ListarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

// console.log(process.argv);

// console.log('Limite', argv.litime);

// let parametro = argv[2];
// let base = parametro.split('=')[1];