// Objetos
const persona1 = ["Yuli", 34, "cazado", "Ing. Industrial", ["blanco", "verde"]];
console.log(persona1[4][1]);

const persona = {
  nombre: "Yuli",
  dni: "76376689",
  telefono: "971606640",
  idiomas: ["Español", "Inglés", "Fránces"],
};

console.log("Telefono", persona.telefono);
console.log("Idiomas", persona.idiomas);

// Inyectando un nuevo idioma
persona.idiomas.push("Aymara");
console.log("Persona actualizada", persona);

// Modificando el teléfono
persona.telefono = "985474285";
console.log("Persona actualizada", persona);

// Agregando un nuevo atributo a la persona (no se recomienda
// agregar nuevos atributos a un objeto)
// persona.direccion = "Calle Lima";
// persona.direccion = ["Calle Lima","Miraflores"];
persona.direccion = {}
persona.direccion.calle = "Lima";
persona.direccion.distrito = "Miraflores";
persona.direccion.ciudad = "Arequipa";
console.log("Persona actualizada", persona);
