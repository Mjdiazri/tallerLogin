const objeto = {nombre: 'Carolina Sinisterra', cedula: 109037890, correo:'csinisterra@gmail.com'}
console.log(typeof(objeto));
console.log(objeto);

//Pasar objeto a string
const texto = JSON.stringify(objeto);
console.log(typeof(texto));
console.log(texto);


//Convertir string a objeto
const obje = JSON.parse(texto);
console.log(typeof(obje));
console.log(obje)