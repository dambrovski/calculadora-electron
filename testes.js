const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 300,
    height: 480,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // e carregar o index.html do aplicativo.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

function imprimirTexto () {
    var texto = document.getElementById("textoDigitado");
    var resultado = document.getElementById("textoResultado");
    const intro = document.getElementById('textoDigitado').value;

    resultado.innerHTML = intro;

}
