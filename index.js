'use strict'
'use strict'

let nums = [4, 6, 3, 7, 1]
//Aplicar for tradicional y for para mostrar elementos
//En uno de los for mostrar indice y elemento usando backstrip

//Muestra indice y elemento
for (let i = 0; i < nums.length; i++) {
    alert(`indice: ${i}, Elemento: ${nums[i]}`)
}

//Muestra solo elementos
for (let num of nums) {
    alert(num)
}

//Deber
/* 1. Crear una suncion que filtre los valores mayores a 10.00 y redondearlos
 a 2 decimales como string. Retornando un array.*/
let numarray = [13.676767, 3.123432, 5.34543543, 10.3452345];

function filtrerNumbers(array) {
    let result = [];
    let numero_redondeado = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]>10) {
            alert("numero "+array[i])
            numero_redondeado = Math.round(array[i] * 100) / 100;
            result.push(numero_redondeado.toString())
        }
    }
    return result
}

alert(filtrerNumbers(numarray));

/* Crear un array de objetos con la informacion de las asignaturas de la carrera de
Desarrollo de software.  Crear una función que reciba como parámetro el array de las
asignaturas y un numero que indique el nivel. La función debe retornar solo las asignaturas
que pertenecen a ese nivel. */

const asignatura = {
    nombre: "MATEMATICA COMPUTACIONAL",
    nivel: 1,
    coordinador: "Mgs. Juan Pérez",
    creditos: 3,
    organizasción_Curricular: "Basica",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignatura);

const asignatura1 = {
    nombre: "METODOLOGÍAS PARA RESOLVER PROBLEMAS INFORMÁTICOS",
    nivel: 1,
    coordinador: "Mgs. Juan Pérez",
    creditos: 3,
    organizasción_Curricular: "Basica",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignatura1);

const asignatura2 = {
    nombre: "BASE DE DATOS RELACIONALES",
    nivel: 1,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "Basica",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignatura2);

const asignatura3 = {
    nombre: "LAS TICS Y SOPORTE EN HARDWARE",
    nivel: 1,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "Basica",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignatura3);

const asignatura4 = {
    nombre: "PROGRAMACIÓN DE INTERFACES GRÁFICAS Y ESTRUCTURA DE DATOS",
    nivel: 1,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "Basica",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignatura4);

const asignatura5 = {
    nombre: "PROYECTO INTEGRADOR DE SABERES:CREACIÓN DE APLICACIONES DE ESCRITORIO ",
    nivel: 1,
    coordinador: "Mgs. Juan Pérez",
    creditos: 1,
    organizasción_Curricular: "Basica",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignatura5);

const asignatura6 = {
    nombre: "PRÁCTICAS DE SERVICIO COMUNITARIO ",
    nivel: 1,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "...",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignatura6);

const asignaturaS = {
    nombre: "SISTEMAS DIGITALES PROGRAMABLES",
    nivel: 2,
    coordinador: "Mgs. Juan Pérez",
    creditos: 3,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaS);

const asignaturaS1 = {
    nombre: "SISTEMAS DE INFORMACIÓN",
    nivel: 2,
    coordinador: "Mgs. Juan Pérez",
    creditos: 3,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaS1);

const asignaturaS2 = {
    nombre: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    nivel: 2,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaS2);

const asignaturaS3 = {
    nombre: "PROCESOS CONTABLES",
    nivel: 2,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaS3);

const asignaturaS4 = {
    nombre: "GESTION DE BASE DE DATOS",
    nivel: 2,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaS4);

const asignaturaS5 = {
    nombre: "PROYECTO INTEGRADOR DE SABERES:CREACIÓN DE APLICACIONES DE ESCRITORIO CON BASE DE DATOS",
    nivel: 2,
    coordinador: "Mgs. Juan Pérez",
    creditos: 1,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaS5);

const asignaturaS6 = {
    nombre: "PRÁCTICAS LABORALES",
    nivel: 2,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "...",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaS6);

const asignaturaT = {
    nombre: "PROGRAMACION DE APLICACIONES PARA DISPOSITIVOS MOVILES",
    nivel: 3,
    coordinador: "Mgs. Juan Pérez",
    creditos: 3,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaT);

const asignaturaT1 = {
    nombre: "PROBABILIDADES Y PROCESOS ESTOCÁSTICOS",
    nivel: 3,
    coordinador: "Mgs. Juan Pérez",
    creditos: 3,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaT1);

const asignaturaT2 = {
    nombre: "HERRAMIENTAS INFORMÁTICAS PARA EL DESPLIEGUE DE DIAGRAMAS",
    nivel: 3,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaT2);

const asignaturaT3 = {
    nombre: "APLICACIONES TECNOLOGICAS AUTONOMAS",
    nivel: 3,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaT3);

const asignaturaT4 = {
    nombre: "SOFTWARE APLICATIVO",
    nivel: 3,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaT4);

const asignaturaT5 = {
    nombre: "PROYECTO INTEGRADOR DE SABERES CREACION DE APLICACIONES WEB CON BASE A LA ARQUITECTURA CLIENTE SERVIDOR",
    nivel: 3,
    coordinador: "Mgs. Juan Pérez",
    creditos: 1,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaT5);

const asignaturaT6 = {
    nombre: "PRÁCTICAS LABORALES",
    nivel: 3,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "...",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaT6);



const asignaturaC = {
    nombre: "COMUNICACIONES Y REDES DE DATOS",
    nivel: 4,
    coordinador: "Mgs. Juan Pérez",
    creditos: 3,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaC);

const asignaturaC1 = {
    nombre: "SISTEMAS OPERATIVOS",
    nivel: 4,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaC1);

const asignaturaC2 = {
    nombre: "HERRAMIENTAS CASE",
    nivel: 4,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaC2);

const asignaturaC3 = {
    nombre: "DERECHO Y SEGURIDAD INFORMATICA",
    nivel: 4,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaC3);

const asignaturaC4 = {
    nombre: "TENDENCIAS TECNOLÓGICAS",
    nivel: 4,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "profesional",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaC4);

const asignaturaC5 = {
    nombre: "DESARROLLO DE PROYECTOS DE SOFTWARE",
    nivel: 4,
    coordinador: "Mgs. Juan Pérez",
    creditos: 3,
    organizasción_Curricular: "UNIDAD DE INTEGRACIÓN CURRICULAR",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaC5);

const asignaturaC6 = {
    nombre: "PRÁCTICAS LABORALES",
    nivel: 4,
    coordinador: "Mgs. Juan Pérez",
    creditos: 2,
    organizasción_Curricular: "...",
    horario: {
        dias: "Lunes a viernes",
        horaInicio: "08:00",
        horaFin: "12:00"
    }
};
console.log(asignaturaC6);

//3. Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. La función
// debe recibir el array y devolver únicamente la parte entera del promedio.
function calculateAverage(calificaciones) {
    if (calificaciones.length === 0) {
        return 0; 
    }
    
    const suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
    const promedio = suma / calificaciones.length;
    return Math.floor(promedio); 
}

// Ejemplo de uso:
const calificaciones = [90, 80, 70, 85, 100];
const promedio = calculateAverage(calificaciones);
console.log(promedio); 