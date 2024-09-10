(function () {
    // Função para redirecionar
    function redirect() {
        window.location.href = 'https://dogwifcoin.org/'; // Substitua pelo URL desejado
    }

    // Detectar abrir as ferramentas de desenvolvedor
    const devTools = /./;
    devTools.toString = function () {
        redirect();
    };

    setInterval(function () {
        if (devTools.toString.toString().indexOf('toString') !== -1) {
            redirect();
        }
    }, 1000);

    // Desativar o botão direito do mouse
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        redirect();
    });

    // Desativar teclas F12, Ctrl+U, Ctrl+Shift+I
    document.addEventListener('keydown', function (event) {
        if (event.key === 'F12' || (event.ctrlKey && event.key === 'u') || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
            event.preventDefault();
            redirect();
        }
    });
    // function isDesktop() {
    //     const userAgent = navigator.userAgent || window.opera;
    //     return /windows|macintosh|linux/i.test(userAgent);
    // }

    // // Redirecionar se for um navegador de desktop
    // if (isDesktop()) {
    //     redirect();
    // }

    // Desabilitar o console
    window.console.log = function () { };
    window.console.debug = function () { };
    window.console.info = function () { };
    window.console.warn = function () { };
    window.console.error = function () { };
})();