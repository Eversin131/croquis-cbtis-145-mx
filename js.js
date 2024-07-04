const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(95, 50, 15, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();


function CambiaTexto(){
    const select = document.getElementById("lang");
    const parrafo = document.getElementById("texto");
    const salonA = document.getElementById("c5-16");
    const salonC = document.getElementById("c13-16");
    const salonD = document.getElementById("c9-18");
    const salonE = document.getElementById("c8-14");
    const salonF = document.getElementById("c7-11");
    const TallerAlim = document.getElementById("c4-12");
    const TallerElec = document.getElementById("c4-9");
    const LabConta = document.getElementById("c5-6");
    const aulaAudiovisual = document.getElementById("c8-14");
    const aulaMedios = document.getElementById("c11-12");
    const laboratorioProgra = document.getElementById("c5-7");
    const laboratorioAutocad = document.getElementById("c5-6");
    const LaboratorioQuim = document.getElementById("c13-15");
    const CanchaFutbol = document.getElementById("c19-14");
    const CanchaBasquet = document.getElementById("c16-11");
    const Cafeteria = document.getElementById("c8-12");
    if (select.value == 1) {
        parrafo.textContent = "Se encuentra en la planta baja";  
        salonA.style.backgroundColor = 'red'; 
    } else if (select.value == 2){
        parrafo.textContent = "Se encuentra en la planta alta";
        salonC.style.backgroundColor = 'red';
    } else if (select.value == 3){
        parrafo.textContent = "Se encuentra en la planta alta";
        salonD.style.backgroundColor = 'red';
    } else if (select.value == 4){
        parrafo.textContent = "Se encuentra en la planta alta";
        salonE.style.backgroundColor = 'red';
    } else if (select.value == 5){
        parrafo.textContent = "Se encuentra en la planta alta";
        salonF.style.backgroundColor = 'red';
    } else if (select.value == 6){
        parrafo.textContent = "Se encuentra en la planta alta";
        TallerAlim.style.backgroundColor = 'red';
    } else if (select.value == 7){
        parrafo.textContent = "Se encuentra en la planta alta";
        TallerElec.style.backgroundColor = 'red';
    } else if (select.value == 8){
        parrafo.textContent = "Se encuentra en la planta alta";
        LabConta.style.backgroundColor = 'red';
    } else if (select.value == 9){
        parrafo.textContent = "Se encuentra en la planta baja";
        aulaAudiovisual.style.backgroundColor = 'red';
    } else if (select.value == 10){
        parrafo.textContent = "Se encuentra en la planta alta";
        aulaMedios.style.backgroundColor = 'red';
    } else if (select.value == 11){
        parrafo.textContent = "Se encuentra en la planta alta";
        laboratorioProgra.style.backgroundColor = 'red';
    } else if (select.value == 12){
        parrafo.textContent = "Se encuentra en la planta baja";
        laboratorioAutocad.style.backgroundColor = 'red';
    } else if (select.value == 13){
        parrafo.textContent = "Se encuentra en la planta baja";
        LaboratorioQuim.style.backgroundColor = 'red';
    } else if (select.value == 14){
        CanchaFutbol.style.backgroundColor = 'red';
    } else if (select.value == 15){
        CanchaBasquet.style.backgroundColor = 'red';
    } else if (select.value == 16){
        Cafeteria.style.backgroundColor = 'red';
    }

}



