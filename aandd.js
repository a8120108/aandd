function show(array) {
    var html = '';
    html = html + '<table border="1">';
    html = html + '<tr>';
    for (var i = 0; i < array.length; i++) {
        html = html + '<td>' + array[i] + '</td>';
    }
    html = html + '</tr>';
    html = html + '</table>';
    //document.getElementById('res').innerHTML = html;
    document.getElementById('res').insertAdjacentHTML('beforeend', html);
}

function createSequentialNumbers(array, n) {
    for (var i = 0; i < n; i++) {
        array.push(i + 1)
    }
}


function createRandomNumbers(array, n) {
    for (var i = 0; i < n; i++) {
        a = Math.floor(Math.random() * 100)
        array.push(a)
    }
}

function createRandomNumbersfor20(array, n) {
    for (var i = 0; i < n; i++) {
        var a = Math.floor(Math.random() * 21)
        array.push(a)
    }
}

