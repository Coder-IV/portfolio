document.addEventListener('DOMContentLoaded', function () {
    const seletorElemento = document.getElementById('seletor-do-elemento');
    let mouseX = 0;
    let mouseY = 0;
    let isMobile = false;

    // Verifica se o dispositivo é um celular
    function checkMobile() {
        const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        isMobile = mobileRegex.test(navigator.userAgent);
    }

    // Atualiza a posição da bolinha
    function atualizarPosicao() {
        if (!isMobile) {
            seletorElemento.style.left = mouseX + 'px';
            seletorElemento.style.top = mouseY + 'px';
        }
    }

    // Exibe a bolinha
    function exibirBolinha() {
        if (!isMobile) {
            seletorElemento.style.visibility = 'visible';
            seletorElemento.style.opacity = '1';
        }
    }

    // Oculta a bolinha
    function ocultarBolinha() {
        if (!isMobile) {
            seletorElemento.style.visibility = 'hidden';
            seletorElemento.style.opacity = '0';
        }
    }

    // Função chamada quando o mouse se move
    function onMouseMove(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        atualizarPosicao();
    }

    // Função chamada quando o dispositivo é um celular
    function onMobile() {
        seletorElemento.style.display = 'none'; // Oculta a bolinha completamente no celular
        document.body.style.cursor = 'default'; // Restaura o cursor padrão no celular
    }

    checkMobile();

    if (isMobile) {
        onMobile();
    } else {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', exibirBolinha);
        document.addEventListener('mouseout', ocultarBolinha);
    }

    // Impede o comportamento padrão de toque no celular
    document.addEventListener('touchstart', function (event) {
        event.preventDefault();
    });
});

const videoElement = document.getElementById('video');

// Verificar se o dispositivo é um dispositivo móvel
const isMobilee = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Desativar o autoplay se for um dispositivo móvel
if (isMobilee) {
    videoElement.removeAttribute('autoplay');
}