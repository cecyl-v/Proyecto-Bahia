// Cambio de Modo Claro a Oscuro y viceversa 

const oscuro = document.getElementById("oscuro");


oscuro.addEventListener("click", function () {

    document.body.classList.toggle("modo-oscuro");
});

// Alerta de Datos De la Desarrolladora

const botonDatosDesarrolladora = document.getElementById("datosDesarrolladora");


botonDatosDesarrolladora.addEventListener("click", function () {
    const datosDelaDesarrolladora = "Datos De la Desarrolladora:\n\nCecilia Villafañe\ncecyl-v@hotmail.com\nBahia Blanca, Argentina";
    alert(datosDelaDesarrolladora);
});