function converter() {
    const binario = document.getElementById('inp-1').value;
    if (binario === '') return alert('Por favor, insira um valor numérico');
    binario.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Por favor, insira um valor válido');
    });
    const valor = parseInt(binario, 2);
    document.getElementById('inp-2').value = valor;
    return true;
}
