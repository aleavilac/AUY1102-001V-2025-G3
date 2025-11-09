# Evaluación de Calidad y Seguridad del Código

## INTRODUCCIÓN

### Contexto de la evaluación:

Esta evaluación considera que se creen pruebas de calidad, asociadas a un repositorio de código, con enfoque en pruebas unitarias, análisis de seguridad y vulnerabilidades del código y análisis de código estático.

### Objetivo del documento:

El propósito de este documento es servir como un registro detallado de nuestro trabajo, aprendizajes y evolución a lo largo de la evaluación. Más allá de ser un simple informe, este entregable busca documentar y conocer sobre las:

* Pruebas y cobertura de calidad de software en el código.
* Metodologías de pruebas: TDD (Desarrollo Guiado por Pruebas) y BDD (Desarrollo Guiado por Comportamiento)
* Análisis de vulnerabilidades del código, tales como Dependabot alerts y Dependabot security updates, CodeQL Analysis, Sonarqube Cloud o Snyk.
* Remediación alertada por las herramientas.


## CONFIGURACIÓN DEL PROYECTO

### Configuración:

Primero se configura nombre de usuario y correo para Git.

* **git init (Creación):** Un `git clone` descarga un proyecto que ya existe en GitHub. Un `git init` inicia un proyecto nuevo localmente.
* **git remote add... (Conexión):** conexión de repositorio local (de `git init`) con el repositorio remoto nuevo y vacío en GitHub (...AUY1102-001V-2025-G3).
* **git push**

<img width="1599" height="833" alt="configure" src="https://github.com/user-attachments/assets/b6a1ef15-ca51-42a3-a9de-32953ded4f1e" />

<img width="1577" height="1311" alt="configure 2" src="https://github.com/user-attachments/assets/42784959-ceac-48bf-a191-3fcb3a731166" />

## PRUEBAS DE SOFTWARE Y COBERTURA DE CALIDAD

### Analizar la Cobertura de Pruebas (Coverage):

`npm` lee el archivo `package.json`, ve todas las "dependencias" (como Jest, Express, etc.) que el proyecto necesita, y las descarga en una carpeta llamada `node_modules`.
<img width="1599" height="933" alt="npm 1" src="https://github.com/user-attachments/assets/e8235705-f75f-4502-b483-da85128a1e73" />

Nos entrega que tenemos alguna vulnerabilidades, que podemos corregir con el comando:
```bash
npm audit fix
```

Este comando intentará actualizar las versiones de los paquetes vulnerables a unas que sean seguras, pero sin causar "cambios bruscos" (breaking changes).
Este comando busca en package.json un "script" llamado test:unit. Usualmente, este script ejecuta una herramienta de pruebas (como Jest).
<img width="1608" height="262" alt="npm 2" src="https://github.com/user-attachments/assets/c384668a-50bd-49ec-aa79-281daffd827a" />
<img width="1608" height="1163" alt="test unit 1" src="https://github.com/user-attachments/assets/c141585e-4b9a-4afe-9d50-bcba62e73521" />

El código del proyecto, tal como está ahora, cumple con todas las reglas y casos de uso definidos en las pruebas de cobertura.

Copiamos el archivo del material complementario, para correr nuevas pruebas:
<img width="1609" height="1131" alt="material complementario" src="https://github.com/user-attachments/assets/e53112f8-4714-4e7c-833b-65165b6204ca" />

Igualmente todo está funcionando según lo esperado:
<img width="926" height="411" alt="material 2" src="https://github.com/user-attachments/assets/5e4faf4f-9157-4295-93f6-5c5fa2edc1ca" />

### Análisis de Calidad (Linting con ESLint):

Esto es Análisis Estático. Las pruebas revisan la lógica (¿funciona?). El "Linter" (ESLint) revisa el estilo y calidad (¿está bien escrito?).
<img width="1006" height="1260" alt="eslint 1" src="https://github.com/user-attachments/assets/76269444-bc62-4d16-abe1-cb99e0e51710" />

ESLint revisa todos los archivos .js de tu proyecto y busca problemas según las reglas de la configuración que le entreguemos, en este caso al ejecutar las pruebas nos muestra una serie de problemas a resolver (Se logró corregir problemas para correr eslint, principalmente por el archivo de configuración con datos antiguos):
<img width="1215" height="1154" alt="eslint 2" src="https://github.com/user-attachments/assets/835a27f9-7794-4951-83c5-6c0e2d9fe3a7" />
<img width="1228" height="218" alt="slint 2" src="https://github.com/user-attachments/assets/5989c3fa-bf9b-45e4-9a1d-ceca62e38da1" />

---

## METODOLOGÍAS DE PRUEBAS

### TDD (Desarrollo Guiado por Pruebas)

Instalación de NPM:
<img width="1232" height="791" alt="tdd1" src="https://github.com/user-attachments/assets/f0e4225c-b2ac-4c9e-b029-eb7e5cc4b3c7" />

**Requerimientos de archivos para las pruebas:**

En la carpeta `test` se agrega el archivo `sum.test.js` y en la carpeta `src`, se agrega el archivo `sum.js`
<img width="478" height="1284" alt="tdd2" src="https://github.com/user-attachments/assets/4b163f31-12df-4c5c-a012-ee6112edaefc" />

Se ejecuta el comando `npm run test:unit` para realizar la prueba.
<img width="1218" height="895" alt="tdd3" src="https://github.com/user-attachments/assets/3ae15908-2995-4ab3-a1a7-107da1df5578" />

De acuerdo al resultado, de los 11 test, los 11 fueron completados con éxito (Test Suites), al igual que los de (Tests) 19 fueron completados con éxito.

De esta manera se entiende que las pruebas de Desarrollo guiado fueron exitosas, ya que permitió detectar errores de forma temprana y garantizar que el código escrito cumpla con los requisitos funcionales desde el principio.

### BDD (Desarrollo Guiado por Comportamiento)

Para realizar las pruebas de desarrollo guiado por comportamiento, se utiliza `cucumber.js`:
El comando a ejecutar es:

```bash
npm install --save-dev @cucumber/cucumber
```
<img width="1157" height="627" alt="tdd4" src="https://github.com/user-attachments/assets/a1dc1cd7-4f0b-4092-905e-2851b7cd8fc4" />

De acuerdo al resultado, se agregaron 92 paquetes, de los cuales 1 paquete ha cambiado y se auditaron 1897 paquetes en un tiempo estimado de 22 segundos.

24 vulnerabilidades encontradas (7 baja, 13 moderada, 4 altas)

Se crea una carpeta llamada features para luego copiar el archivo sum.features. De igual forma se crea una carpeta llamada features/step_definitions/. Se copia el archivo sum.steps.js.

Se ejecuta las pruebas con la siguiente instrucción:

```Bash

npx cucumber-js
```
<img width="847" height="283" alt="tdd5" src="https://github.com/user-attachments/assets/0f38d6cf-6712-4546-878f-a162cc9c4332" />

De acuerdo al resultado se obtienen 0 escenarios y 0 pasos, de forma éxitosa, ya que facilitó la comunicación entre los stakeholders al utilizar un lenguaje natural para definir el comportamiento del software.

ANÁLISIS DE VULNERABILIDADES DEL CÓDIGO
Dependabot alerts y Dependabot security updates.
Para activar el dependabot, es necesario ir a los ajustes de “Security & analysis”.
<img width="1188" height="585" alt="dependat1" src="https://github.com/user-attachments/assets/511c8567-a9c3-4397-b755-45a80502b057" />

Una vez activado por el owner, se mostrará habilitado en la pestaña Security del repositorio:
<img width="1198" height="420" alt="dependat2" src="https://github.com/user-attachments/assets/71c60925-b83f-43df-9109-afe79a4fbef8" />

En la la barra lateral izquierda se muestra las alertas:
<img width="1193" height="426" alt="dependat3" src="https://github.com/user-attachments/assets/795906ad-203d-42df-a8e6-fda34f3dd5bf" />

CodeQL Analysis:
Para activar CodeQL analysis, se habilita en la sección de “Code scanning” en la barra lateral de la pestaña “Security”.
<img width="1202" height="1194" alt="codeql1" src="https://github.com/user-attachments/assets/17671ab3-5107-4f19-9611-b4c1a8089914" />

En el archivo se agrega las siguientes líneas (se deja por defecto main y no master) para agregar el key:
<img width="1210" height="671" alt="codeql2" src="https://github.com/user-attachments/assets/7c7f3eb2-4cb2-4555-a056-4d6baa156252" />

```
YAML

    - name: Cache
      uses: actions/cache@v4.3.0
      with:
      # A list of files, directories, and wildcard patterns to cache and restore
        path: src
        # An explicit key for restoring and saving the cache
        key: 121212
        # An ordered multiline string listing the prefix-matched keys, that are used for restoring stale cache if no cache hit occurred for key. Note `cache-hit` returns false in this case.
        restore-keys: 121212
        # The chunk size used to split up large files during upload, in bytes
```
Luego de agregar el código, se realiza el commit respectivo al repositorio.

En la pestaña Security en la<img width="1199" height="355" alt="codql3" src="https://github.com/user-attachments/assets/010de463-8562-4932-8bef-b5ac691fb28c" />
 sección Code scanning se mostrará el resultado del analisis:

Configuración de SonnarQube:
Vamos a tomar en cuenta este issue, donde nos cuenta que tenemos un token en texto plano (Problema crítico de seguridad), para aplicar buenas prácticas:
<img width="1193" height="1050" alt="sonnarq1" src="https://github.com/user-attachments/assets/4afff94b-2b1c-4678-ad9c-ec28a1d1c10d" />
<img width="1186" height="667" alt="sonnarq2" src="https://github.com/user-attachments/assets/88094ffd-ae41-4aeb-9af1-bb4694b68e98" />

Eliminamos un token de GitHub (una contraseña) que estaba expuesta. Luego, usamos una herramienta especial (git-filter-repo) para reescribir todo el historial de tu repositorio, borrando permanentemente ese archivo sensible para que SonarQube ya no pudiera encontrarlo.
<img width="1185" height="285" alt="sonnarq3" src="https://github.com/user-attachments/assets/69dfddf6-92eb-4b97-8875-439f089cd94c" />
<img width="1183" height="1061" alt="sonnarq4" src="https://github.com/user-attachments/assets/e20d5634-c88a-41ec-b18d-d0b25e6786fb" />

Validamos que ahora tenemos un issue menos y ya no se alerta sobre el token expuesto:
<img width="1193" height="691" alt="sonnarq5" src="https://github.com/user-attachments/assets/6a41980d-2de4-41a2-8414-4ab7cb32e42a" />

REMEDIACIÓN ALERTADA POR LAS HERRAMIENTAS
Pull request:
Se realiza un PR con la remediación (Fix) de una de las vulnerabilidades:
<img width="2059" height="280" alt="remedio4" src="https://github.com/user-attachments/assets/8d79295f-8982-4402-8555-b7cfd7fa7c40" />

<img width="1144" height="900" alt="remedios1" src="https://github.com/user-attachments/assets/f5c78cea-ba52-4f7c-8d25-d196401b6118" />
<img width="1136" height="336" alt="remedios2" src="https://github.com/user-attachments/assets/cba854cc-fa5a-45e2-896a-83aeca7bdd64" />

Al revisar nuevamente en Code scanning, una de las dos vulnerabilidades fue resuelta:
<img width="1187" height="334" alt="remedios3" src="https://github.com/user-attachments/assets/9883c698-28be-4e3f-8d14-5434dc52e255" />
