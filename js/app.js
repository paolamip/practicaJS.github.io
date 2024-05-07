// Cálculo del IMC
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');

btnLimpiar.addEventListener('click', function() {
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('resultado').value = '';
});

btnCalcular.addEventListener('click', function() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let imc = peso / (altura * altura);
    document.getElementById('resultado').value = imc.toFixed(1);
});

// Practica2
const btnCalcularp2 = document.getElementById('btnCalcularp2');
const btnLimpiarp2 = document.getElementById('btnLimpiarp2');

btnLimpiarp2.addEventListener('click', function() {
    document.getElementById('idNumero1').value = '';
    document.getElementById('idNumero2').value = '';
    document.getElementById('idResultado').value = '';
});

btnCalcularp2.addEventListener('click', function() {
    const option = document.getElementById('idOpcion').value;
    const idNumero1 = parseFloat(document.getElementById('idNumero1').value);
    const idNumero2 = parseFloat(document.getElementById('idNumero2').value);
    const txtres = document.getElementById('idResultado');

    let res = 0;

    switch (parseInt(option)) {
        case 1:
            res = idNumero1 + idNumero2;break;
        case 2:
            res = idNumero1 - idNumero2;break;
        case 3:
            res = idNumero1 * idNumero2;break;
        case 4:
            res = idNumero1 / idNumero2;break;
    }

    txtres.value = res;
});