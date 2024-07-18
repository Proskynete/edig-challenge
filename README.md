<div id="top">
  <h1>Edig Challenge - TODO APP
   <img src="https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png" width="25" height="25" />
 </h1>
 <p>Prueba técnica para Edig</p>

[![Screenshot-2024-07-17-at-10-47-31-PM.png](https://i.postimg.cc/X73Z9QJs/Screenshot-2024-07-17-at-10-47-31-PM.png)](https://postimg.cc/qgbMTc2K)

</div>

<br />

<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#technologies">💻 Tecnologías y utilidades</a>
    </li>
     <li>
      <a href="#how-to-use">💪 Como se usa</a>
    </li>
    <li>
      <a href="#documentation">📑 Otra documentación</a>
    </li>
    <li>
      <a href="#questions">❓ Preguntas</a>
    </li>
  </ol>
</details>

<h2 id="technologies">💻 Tecnologías y utilidades</h2>

- [Next](https://nextjs.org/) y Server Actions
- [nvm](https://github.com/nvm-sh/nvm)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL Client](https://www.npmjs.com/package/mysql2)
- [ESLint](https://eslint.org/) con [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Commit Lint](https://commitlint.js.org/) con [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

<p align="right"><a href="#top">🔝</a></p>

<h2 id="how-to-use">💪 Como se usa</h2>

Para poder utilizar el proyecto en local, es necesario completar el paso a paso que a continuación se describe:

1. **Descargar el proyecto**

Puedes copiar el siguiente comando para descargar el proyecto desde el repositorio de Eduardo Alvarez. Esto lo puedes hacer con: HTTP, SSH o Github CLI. A continuación se muestra un script para descargarlo haciendo uso de SSH

```sh
git clone git@github.com:Proskynete/edig-challenge.git
```

Una vez termina de descargarse, es necesario posicionarnos dentro de la carpeta e instalar las dependencias.

```sh
cd edig-challenge
pnpm install # Si no tienes pnpm, se puede usar npm
```

| El proyecto esta configurado para correr con node v20, si tienes nvm instalado, puedes usar el siguiente script para que nvm utilice la versión necesaria y, en caso de no tener la versión instalada, nvm la descargará antes de usarla, pero recuerda: **debes estar dentro de la carpeta del proyecto**.

```sh
nvm use
```

2. **Configurar las variables de entorno**

El challenge esta usando MySQL, por lo cual, es muy necesario que podamos configurar previamente, los parámetros de conexión con esta base de datos. Para ello, primero debes levantar el servidor de MySQL y, con el host y con el usuario que tengas configurado, en tu máquina, deberás crear un archivo llamado `.env.local` y en éste, copiar los valores que están dentro del archivo llamado `.env.template`

También puedes hacer una copia del archivo `.env.template` pegado el siguiente script

```sh
cp .env.template .env.local
```

Una vez copias los valores dentro de las llaves del archivo `.env.local`, debería verse muy similar a lo siguiente:

```txt
DB_HOST=localhost  <---- nombre del servidor
DB_USER='root'  <---- usuario de la DB
DB_PASSWORD=''   <---- Contraseña (en caso de no tener, dejar en blanco)
DB_DATABASE='edig_task_manager' <---- Puede colocar le nombre que gustes. Si no colocas nada, por defecto será edig_task_manager
```

3. **Correr en local**

Con todos los pasos anteriores completados, lo único que nos queda, es poder correr el proyecto en nuestro local pegando el siguiente script en nuestra terminal:

```sh
pnpm run dev
```

Cuando corremos este comando por primera vez, el proyecto va a correr un script el cual hará lo siguiente:

- Verificar si existe una base de datos con el nombre configurado anteriormente
- Si no lo encuentra, lo creará y también creará la tabla

Si llegamos a este punto, es por que pudimos correr el proyecto en nuestro local de manera exitosa, ahora lo único que nos queda hacer, es abrir una penstaña dentro de nuestro navegador favorito y dirigirnos al siguiente link: [http://localhost:3000](http://localhost:3000)

<p align="right"><a href="#top">🔝</a></p>

<h2 id="documentation">📑 Otra documentación</h2>

- [Requerimientos del challenge](https://github.com/Proskynete/edig-challenge/blob/main/docs/challenge.md)
- [Diseño de la base de datos](https://github.com/Proskynete/edig-challenge/blob/main/docs/db.md)

<p align="right"><a href="#top">🔝</a></p>

<h2 id="questions">❓ Preguntas</h2>

Si tienes alguna duda o consulta, me puedes preguntar en el chat que tenemos por GetOnBrd o puedes buscarme en mis [redes sociales](https://links.eduardoalvarez.dev/)

<div align="right"><a href="#top">🔝</a></div>
