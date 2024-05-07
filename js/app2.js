const btnLimpiar = document.getElementById('btnLimpiar');
const btnCalcular = document.getElementById('btnCalcular');

btnLimpiar.addEventListener('click', function() {
    document.getElementById('idNumcoti').value = '';
    document.getElementById('idDesc').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('idPagoinicial').value = '';
    document.getElementById('idTotalfin').value = '';
    document.getElementById('idPagomensual').value = '';
});

btnCalcular.addEventListener('click', function(){
    const precio = parseFloat(document.getElementById('precio').value);
    const porcentajeInicial = parseFloat(document.getElementById('idOpcion').value);
    const plazo = parseFloat(document.getElementById('idOpcion2').value);

    const pagoInicial = precio * (porcentajeInicial / 100);
    const totalFinal = precio - pagoInicial;
    const pagoMensual = totalFinal / plazo;

    document.getElementById('idPagoinicial').value = `$${pagoInicial.toFixed(2)}`;
    document.getElementById('idTotalfin').value = `$${totalFinal.toFixed(2)}`;
    document.getElementById('idPagomensual').value = `$${pagoMensual.toFixed(2)}`;

     switch (parseInt(idOpcion)) {
        case 1:
            res = 0.25;break;
        case 2:
            res = 0.3;break;
        case 3:
            res = 0.5;break;
        case 4:
            res = 0.7;break;
    }
    switch (parseInt(idOpcion2)) {
        case 1:
            res = 25;break;
        case 2:
            res = 36;break;
        case 3:
            res = 45;break;
        case 4:
            res = 60;break;
    }
})
