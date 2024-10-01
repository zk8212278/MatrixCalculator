function parseInputValues() {
    return [
        [Number(document.getElementById("a00").value), Number(document.getElementById("a01").value)],
        [Number(document.getElementById("a10").value), Number(document.getElementById("a11").value)]
    ];
}

function parseMatrixB() {
    return [
        [Number(document.getElementById("b00").value), Number(document.getElementById("b01").value)],
        [Number(document.getElementById("b10").value), Number(document.getElementById("b11").value)]
    ];
}

function addMatrices(a, b) {
    return a.map((row, i) => row.map((val, j) => val + b[i][j]));
}

function subtractMatrices(a, b) {
    return a.map((row, i) => row.map((val, j) => val - b[i][j]));
}

function multiplyMatrices(a, b) {
    let result = [
        [0, 0],
        [0, 0]
    ];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return result;
}

function performOperation(operation) {
    const matrixA = parseInputValues();
    const matrixB = parseMatrixB();

    let result;
    if (operation === 'add') {
        result = addMatrices(matrixA, matrixB);
    } else if (operation === 'subtract') {
        result = subtractMatrices(matrixA, matrixB);
    } else if (operation === 'multiply') {
        result = multiplyMatrices(matrixA, matrixB);
    }

    document.getElementById("result").textContent = result
        ? result.map(row => row.join(", ")).join("\n")
        : "Invalid operation or matrices.";
}