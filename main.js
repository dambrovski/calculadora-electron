const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({

    webPreferences: {
      nodeIntegration: true
    }
  })

  // e carregar o index.html do aplicativo.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}

function equal(){
  var exp = document.form.textview.value;
  if(exp){
    document.form.textview.value = eval(exp);
  }
}
function clean(){
  document.form.textview.value = "";

}

function back(){
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length-1);

}