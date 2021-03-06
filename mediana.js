

function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
};

const lista1 = [
    300,
    800,
    500,
    40,
];


function compare(a, b){
    return a - b;
}

const sortedList = lista1.sort(compare);

const mitadLista = parseInt(sortedList.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    };
};

let mediana;

if (esPar(sortedList.length)) {
        const elemento1 = sortedList[mitadLista - 1];
        const elemento2 = sortedList[mitadLista];

        const promedioele1y2 = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedioele1y2;

} else {
        mediana = sortedList[mitadLista]
}