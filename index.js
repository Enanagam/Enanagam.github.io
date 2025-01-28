function calcularUsoCelular() {
    const horasCelular = parseFloat(document.getElementById('horasCelular').value) || 0;

    // Ejemplo de cálculo del uso del celular
    const impacto = horasCelular * 1.5; // kg CO2/día
    document.getElementById('resultadoCelular').innerText = `Impacto estimado: ${impacto.toFixed(2)} kg CO2/día`;
}
function calcularFundas() {
    const fundasPlasticas = parseFloat(document.getElementById('fundasPlasticas').value) || 0;

    // Ejemplo de cálculo del impacto de fundas plásticas
    const impactoFundas = fundasPlasticas * 0.05; // kg CO2/año
    document.getElementById('resultadoFundas').innerText = `Impacto estimado de fundas plásticas: ${impactoFundas.toFixed(2)} kg CO2/año`;
}
function calcularCarro() {
    const kmCarro = parseFloat(document.getElementById('kmCarro').value) || 0;

    // Ejemplo de cálculo de emisiones del carro
    const emisionesCarro = kmCarro * 0.2; // kg CO2/semana
    document.getElementById('resultadoCarro').innerText = `Emisiones estimadas del carro: ${emisionesCarro.toFixed(2)} kg CO2/semana`;
}
