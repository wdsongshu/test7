
function fibonacci_series(n) {
   var print = getPrint(n);

    return print;
}

function getPrint(n){
    var printArray = [0,1];

    for( var i = 2 ; i <= n; i++)
    {
        printArray.push(printArray[(i-1)] +printArray[(i-2)]);
    }

    return printArray;
}

module.exports = fibonacci_series;
