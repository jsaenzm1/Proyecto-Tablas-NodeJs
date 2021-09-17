const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, final = 6, listar = false, hasta = 10) => {
    try{
        for(let j=base; j<=final; j++){
            let salida = '';
            let consola = '';
            
            for(let i = 1; i <= hasta; i++){
                consola += `${j} ${'x' .yellow} ${i} ${' = ' .yellow} ${j * i}\n`;
                salida += `${j} x ${i} = ${j * i}\n`;
            }
            if(listar){
                console.log('====================='.green);
                console.log('Tabla del: '.green, colors.blue(j));
                console.log('=====================' .green);
                console.log(consola);
            }
            fs.writeFileSync(`./salida/tabla-${j}.txt`, salida);
        }
        return 0;

    } catch (err) {
        throw err;
    }
}
    module.exports = {
        crearArchivo: crearArchivo
    }

    