const { app, BrowserWindow } = require("electron");
const path = require("node:path");
function createWindow(){const win=new BrowserWindow({width:1420,height:900,minWidth:980,minHeight:650,title:"PROJECT MIRROR | City Digital Twin",backgroundColor:"#08111f",autoHideMenuBar:true,webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true}});win.loadFile(path.join(__dirname,"index.html"));}
app.whenReady().then(()=>{createWindow();app.on("activate",()=>{if(BrowserWindow.getAllWindows().length===0)createWindow()})});
app.on("window-all-closed",()=>{if(process.platform!=="darwin")app.quit()});
