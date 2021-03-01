
# Lab # 3: Enlazando mi proyecto con GitHub:
 *.md MarkDown

Prof. Remote Repo link : https://github.com/difo23/js-curso-xx-5x.git

## TODO-LIST:
 * [x] Crear cuenta en GitHub.
 * [x] Crear un repositorio en GitHub - Nombre del repo = js-curso-22-5b.
 * [x] Cambiar el nombre de mi rama local master -> main. 
 * [x] Agregar cambios a la zona de preparacion con el comando **git add .** 
 * [x] Confirmar los cambios con comando **git commit -am "Primer commit remoto"**
 * [x] Agregar mi repositorio remoto a mi repositorio local usando **git remote add origin url_remote**
 * [x] Subir mis cambios al remoto usando **git push -u origin main**
 * [x] Comprobar que mi remoto tenga los ultimos cambios agregados.
  
  
# Lab # 8: Creando CLI-Node App

## Descripcion:
 Laboratorio basico para crear programas Node en CLI (Command Line Interface).   
El objetivo de este programa es crear el tipico TODO-List que sin duda es una de las aplicaciones mas didactica.   

## Temas puntuales:

### Lab 8.1 Instaciones de paquetes.
* [ ] Instalar paquetes de codigo con NPM.
  * [ ] Instalar **yargs** con el comando ```npm install yargs``` 
  * [ ] Agregar archivo **.gitignore**.
  * [ ] Editar archivo **.gitignore** para ignorar la carpeta **node_modules**
  * [ ] Editar archivo **.gitignore** para ignorar el archivo **package-lock.json**
  * [ ] Instalar **colors** con el comando ```npm i colors``` cambio install por i. 
  * [ ] Confirmar mi **package.json** tenga las dependencias de **yargs** y **colors**.
  * [ ] Usar comando **git add .** para preparar los cambios.
  * [ ] Usar comando **git commit -am "Instalar paquetes Yargs y Colors"**
  * [ ] Usar comando **git push** para subir mis cambios al remoto.
  

### Lab 8.2 Creacion Organizacion de proyecto
* [ ] Crear el archivo **node-CLI/app.js**
  * [ ] Hacemos **git add .**
  * [ ] Hacemos **git commit -am "Crea app.js"**
  * [ ] Hacemos **git push**
* [ ] Crear directorio **node-CLI/tools** con 
  * [ ] Crear **node-CLI/tools/index.js**
  * [ ] Crear **node-CLI/tools/argvs.js**
  * [ ] Crear **node-CLI/tools/files.js**
  * [ ] Crear **node-CLI/tools/options.js**
  * [ ] Crear **node-CLI/tools/task.js**
* [ ] Crear directorio **node-CLI/db** con 
  * [ ] Crear **node-CLI/db/task.json**
  * [ ] Hacemos **git add .**
  * [ ] Hacemos **git commit -am "Crea tools settings"**
  * [ ] Hacemos **git push**
  
### Lab 8.3 Trabajando con ficheros en Node
* [ ] Empezamos a trabajar con **files.js**
  * [ ] Importamos paquetes **path** y **Colors**
  * [ ] Usamos paquetes importados en nuestro codigo con la funcion **loadTask()**
  * [ ] Exportamos nuestra funcion **loadTask()**
  * [ ] Pruebas de loadTask
  * [ ] Hacemos **git add .**
  * [ ] Hacemos **git commit -am "Crea funcion loadTask()"**
  * [ ] Hacemos **git push**
  * [ ] Usamos paquetes importados en nuestro codigo con la funcion **saveTask()**
  * [ ] Exportamos nuestra funcion **saveTask()**
  * [ ] Pruebas de saveTask
  * [ ] Hacemos **git add .**
  * [ ] Hacemos **git commit -am "Crea funcion saveTask()"**
  * [ ] Hacemos **git push**

**Nota: Los programadores tratan de hacer commits con cualquier trozo de codigo significante, esto ayuda luego para el debugging**

### Lab 8.4 Trabajando con opciones de Yargs.
* [ ] Empezamos a trabajar con **options.js**
  * [ ] Creamos los objetos para nuestros comandos:
        * description
        * title
        * completed
        * erased
  * [ ] Creamos las opciones para nuestros comandos:
        * opcionsCreate
        * opcionsUpdate
        * opcionsErase
  * [ ] Exportamos nuestras opciones
  * [ ] Hacemos **git add .**
  * [ ] Hacemos **git commit -am "Configura argvs con opciones para los comandos"**
  * [ ] Hacemos **git push**

### Lab 8.5 Trabajamos en funciones para los tasks o tareas.
* [ ] Empezamos a trabajar con **tasks.js**
  * [ ] Creamos funciones para trabajar los tasks:
        * createTask
        * updateTask
        * eraseTask
  * [ ] Exportamos nuestras funciones.
  * [ ] Hacemos **git add .**
  * [ ] Hacemos **git commit -am "Configura argvs con opciones para los comandos"**
  * [ ] Hacemos **git push**  

### Lab 8.6 Trabajamos con la configuraicon de Yargs.
* [ ] Empezamos a trabajar con el fichero **argvs.js**
  * [ ] Agregando los commandos  que usara Yargs
  * [ ] Exporto el objecto ```argv``` para nuestro proyecto.
* [ ] Empezamos a trabajar con ``index.js`` 
  * [ ] Importamos y exportamos nuestras herramientas.
* [ ] Hacemos **git add .**
* [ ] Hacemos **git commit -am "Exportar tools components"**
* [ ] Hacemos **git push**  

### Lab 8.7 Trabajamos con nuesta aplicacion principal
* [ ] Empezamos a trabajar con el fichero **app.js**
* [ ] Importamos las herramientas ```tasks argv``` y el paquete ```colors```
  * [ ] Usamos estructura ```switch```
    * [ ] Filtramos los comandos ```create update delete```
* [ ] Hacemos **git add .**
* [ ] Hacemos **git commit -am "Finaliza proyecto-pruebas de funcionamiento"**
* [ ] Hacemos **git push** 
