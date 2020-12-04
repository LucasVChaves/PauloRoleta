const electron = require('electron');
const {app, BrowserWindow} = require('electron');

const Menu = electron.Menu;

let window;

function boot(){
     const template = [
          {
               label: 'Roletas',
               submenu:[
                    {
                         label:'Minérios',
                         click: () => {
                              window.loadURL(`file://${__dirname}/src/index.html`);
                         }
                    },
                    {
                         type:'separator'
                    },
                    {
                         label:'Multiplicadores',
                         click: () => {
                              window.loadURL(`file://${__dirname}/src/multiplierWin.html`);
                         }
                    }
               ]
          },

          {
               label:'Ajuda',
               submenu:[
                    {
                         label:'Sobre',
                         click: () => {
                              window.loadURL(`file://${__dirname}/src/about.html`)
                         }
                    },
                    {
                         label:'Discord',
                         click: () => {
                              electron.shell.openExternal('https://discord.gg/kHmqB8E');
                         }
                    }
               ]
          },

          {
               label:'Editar',
               submenu:[
                    {label:'Desfazer', role:'undo'},
                    {label:'Refazer', role:'redo'},
                    {type:'separator'},
                    {label:'Recortar', role:'cut'},
                    {label:'Copiar', role:'copy'},
                    {label:'Colar', role:'paste'},
                    {label:'Colar mesclando estilo', role:'pasteandmatchstyle'},
                    {type:'separator'},
                    {label:'Deletar', role:'delete'},
                    {label:'Selecionar tudo', role:'selectall'},
                    {label:'Recarregar', role:'reload'},
                    {type:'separator'},
                    {label:'Ligar Ferramentas de Desenvolvedor', role:'toggleDevTools'}
               ]
          },

          {
               label:"Salve sua vida",
               click: () =>{
                    electron.shell.openExternal("https://www.youtube.com/watch?v=DHWH2Jt3s0U");
               }
          },

          {
               label:"Autor",
               click: () => {
                    electron.shell.openExternal("https://github.com/LucasVChaves");
               }
          }
     ];

     const menu = Menu.buildFromTemplate(template);

     Menu.setApplicationMenu(menu);
     
     window = new BrowserWindow({
          width: 1200,
          height: 950,
          resizable: true,
          icon: './src/img/icon.ico',
          darkTheme: true
     });
     
     window.loadURL(`file://${__dirname}/src/index.html`);
}

app.on('ready', boot);