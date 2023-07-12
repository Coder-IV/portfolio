function redirecionamento() {
    window.open('https://github.com/Coder-IV', '_blank')
}


document.addEventListener('DOMContentLoaded', function () {
    const seletorElemento = document.getElementById('seletor-do-elemento');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function atualizarPosicao() {
        seletorElemento.style.left = mouseX + 'px';
        seletorElemento.style.top = mouseY + 'px';
    }

    function exibirBolinha() {
        seletorElemento.style.visibility = 'visible';
        seletorElemento.style.opacity = '1';
        document.body.style.cursor = 'none';
    }

    function ocultarBolinha() {
        seletorElemento.style.visibility = 'hidden';
        seletorElemento.style.opacity = '0';
        document.body.style.cursor = 'default';
    }

    function substituirCursor(event) {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'input' && target.parentNode.tagName.toLowerCase() === 'a') {
            document.body.style.cursor = 'none';
        }
    }

    function restaurarCursor(event) {
        document.body.style.cursor = 'none';
    }

    function loopAnimacao() {
        atualizarPosicao();
        requestAnimationFrame(loopAnimacao);
    }

    loopAnimacao();

    document.addEventListener('mouseover', exibirBolinha);
    document.addEventListener('mouseout', ocultarBolinha);
    document.addEventListener('mousemove', substituirCursor);
    document.addEventListener('mouseout', restaurarCursor);
});
