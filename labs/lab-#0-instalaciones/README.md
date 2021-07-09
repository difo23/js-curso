

# Laboratorio # 0: Instalaciones y configuración inicial.

## Instalaciones y creación de cuentas

* [ ] Instalar [`Visual Studio Code (vsc)`](https://code.visualstudio.com/) [(Detallado paso a paso)](https://docs.google.com/document/d/14Rh5ZpKnrxj3Ag8CSH_BaMwLqsXkkOvEZGrU46VYMyM/edit?usp=drive_web&authuser=2)
* [ ] Instalar [`Git` y `Git bash`](https://git-scm.com/) se instalan juntos como uno solo. ([vídeo](https://www.youtube.com/watch?v=ES2xtLyI-B8))
* [ ] Instalar [`Node` `runtime`](https://nodejs.org/es/) para JS. ([Detallado paso a paso](https://docs.google.com/document/d/1n5hhGnf-sAJLWW0a5wFM8s_rr-eNQ8R4wd0ZNoG04ZA/edit#heading=h.jjccygpgtb4s)) ([Vídeo](https://www.youtube.com/watch?v=_DQP6UxKEn8))
* [ ] Junto con `node` se instala `npm` y `npx`.  Investiga que son estos programas y comparte tu investigación en clases.
* [ ] Crear cuenta en [`GitHub`](https://github.com/). Esta cuenta la usaras siempre hasta en `6to` usa no olvides la contraseña.
* [ ] Instalar [`Google Chrome`](https://www.google.com/intl/es/chrome/?brand=UUXU&gclsrc=ds&gclsrc=ds)

### Realiza exposiciones sobre:

1. Control de versiones. Historia de Git. Su importancia en el desarrollo de software.
2. Subversión vs Git.
3. Como instalar Node, NPM y NPX. 
4. Github Copilot el futuro de la programación. 
5. GitLab vs GitHub.
6. Primeros paso con Git y GitHub: Pull, Push y Commit.
7. Exposición sobre `semver` del [software.](https://semver.org/lang/es/)

### Configura `Git` por primera vez.

  * [ ] Abre la terminal `git bash`. 

  * [ ] Ejecuta el comando: 

    ````bash
    git config  --global  user.name  "tu_user_github"
    ````

  * [ ] Luego ejecuta el comando (mismo correo de tu cuenta de `github`): 

    ```bash
    git config  --global  user.email "tu_correo@gmail.com"
    ```

  * [ ] Siguiente comando: 

    ```bash
    git config  --global init.defaultBranch main
    ```

  * [ ] Comprobación de que todo fue configurado: 

    ```bash
    git config  --global  --list
    ```

  * [ ] Ejemplo de la salida del ultimo comando:    (debe mostrar tus datos user - email)
```bash
    user.email=diffozanzan@gmail.com   
    user.name=difo23   
    merge.conflictstyle=diff3   
    credential.helper=cache --timeout=3600  
    init.defaultbranch=main   
```
* [ ] Adjunta `print-screen` de la terminal como evidencia.

Nota: Debatir en clases las ventajas e importancia de configurar Git. 

### Comprobar versiones:

* [ ] Ejecuta en `git bash`. Debe salirte un numero de versión para todos los comando siguientes.
* [ ] Ejecuta el comando: `git --version` 
* [ ] Ejecuta el comando: `node --version`
* [ ] Ejecuta el comando: `npm --version`
* [ ] Adjunta a la evidencia un `print-screen` de la terminal con todas las versiones visibles.   

* [ ] Entra a `VSC` y cambia su terminal por [`default` a `git bash`.](https://docs.google.com/document/d/1Ns92hNgA0fVr14_1BzEUXQ97AGFzzedQYE7RfffA6GE/edit#heading=h.i01q3lo8px4w)

* [ ] Recuerda reiniciar `VSC` para que tome la nueva terminal por `default`

* [ ] Adjunta un `print`-`screen` de `VSC` con la terminal abierta y los colores de `git bash`

    


Nota: Si usas `linux ` o algunas de sis versiones, te recomiendo usar `zsh` como interprete de terminal.

