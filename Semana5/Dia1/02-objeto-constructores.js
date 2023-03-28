// Un objeto puede tener funciones como atributos

const vehiculo = {
  marca: "Audi",
  modelo: "q5",
  mantenimientos: [
    {
      fecha: "05/05/23",
      kilometraje: 17000,
    },
    {
      fecha: "05/05/24",
      kilometraje: 27000,
    },
  ],
  imprimirMarcaYModelo: function () {
    console.log("audi q5");
    console.log(vehiculo.marca, vehiculo.modelo);
    console.log("this", this);
    console.log("this", this.marca);
    console.log("this", this.modelo);
  },
};

console.log("Vehiculo", vehiculo);
vehiculo.imprimirMarcaYModelo();

// No copiar objetos de la siguiente manera
const vehiculo2 = vehiculo;
vehiculo2.modelo = "q3";

console.log("Vehiculo1", vehiculo);
console.log("Vehiculo2", vehiculo2);

//  Función que crea objetos
function creadorDeVehiculos(pMarca, pModelo, pAnio, pManteninimiento) {
  const vehiculoGenerico = {
    marca: pMarca,
    modelo: pModelo,
    anio: pAnio,
    mantenimientos: pManteninimiento,
  };
  return vehiculoGenerico;
}

// función creadora de mantenimientos con los siguientes atributos
/**
 * fecha: ""
 * kilometraje: 0
 * aceite:false
 */

function mantenimiento(pFecha = "", pKilometraje = 0, pAceite = false) {
  return {
    fecha: pFecha,
    kilometraje: pKilometraje,
    aceite: pAceite,
  };
}
const mazdaCX3 = creadorDeVehiculos("Mazda", "CX3", 2023, [
  mantenimiento("05/05/23", 15000, true),
  mantenimiento("05/05/24", 27000, true),
]);
const bmwX4 = creadorDeVehiculos("BWM", "X4", 2024, []);
const mercedesGLA450 = creadorDeVehiculos();
// mazdaCX3.anio = 2023;
// bmwX4.anio = 2023;
console.log("mazda", mazdaCX3);
console.log("bmw", bmwX4);
console.log("mercedes", mercedesGLA450);
