/* BASE DE DATOS */
const tarjetas = [
    {
        id: "1",
        titulo: "Titulo 1",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        imagen: "https://picsum.photos/250/250?random=1",
    },
    {
        id: "2",
        titulo: "Titulo 2",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        imagen: "https://picsum.photos/250/250?random=2",
    },
    {
        id: "3",
        titulo: "Titulo 3",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        imagen: "https://picsum.photos/250/250?random=3",
    },
    {
        id: "4",
        titulo: "Titulo 4",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        imagen: "https://picsum.photos/250/250?random=4",
    },
];

/* TEMPLATE
<article class="tarjeta">
  <img src="** IMAGEN **" alt="** TITULO **" class="imagen__tarjeta">
  <div class="cuerpo__tarjeta">
    <h2 class="titulo__tarjeta">** TITULO **</h2>
    <p class="descripcion__tarjeta">
      ** DESCRIPCION **
    </p>
    <button class="agregar__btn" data-id="** ID **">agregar</button>
  </div>
</article>
*/

/* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS */
const tarjetasContenedor = document.getElementById("tarjetasContenedor");

/* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN EL DOM */
function pintarTarjetas() {
    let html = "";

    tarjetas.forEach(({ descripcion, id, imagen, titulo }) => {
        html += `
          <article class="tarjeta">
            <img src="${imagen}" alt="${titulo}" class="imagen__tarjeta">
            <div class="cuerpo__tarjeta">
              <h2 class="titulo__tarjeta">${titulo}</h2>
              <p class="descripcion__tarjeta">
                ${descripcion}
              </p>
              <button class="agregar__btn" id="${id}">agregar</button>
            </div>
          </article>
        `;
    });

    tarjetasContenedor.innerHTML = html;
}

/* INVOCAR LA FUNCION */
pintarTarjetas();

/* CREAR UN NUEVO ARREGLO VACIO PARA AGREGAR LAS TARJETAS A LA COLECCION */
let coleccion = JSON.parse(localStorage.getItem("coleccion")) || {};

/* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS DE LA COLECCION */
const coleccionContenedor = document.getElementById("coleccionContenedor");

/* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN LA COLECCION */
function pintarColeccion() {
    const arrayCollecion = Object.values(coleccion);
    let html = "";

    arrayCollecion.forEach(function ({ descripcion, id, imagen, titulo }) {
        html += `
        <article class="tarjeta">
          <img src="${imagen}" alt="${titulo}" class="imagen__tarjeta">
          <div class="cuerpo__tarjeta">
            <h2 class="titulo__tarjeta">${titulo}</h2>
            <p class="descripcion__tarjeta">
              ${descripcion}
            </p>
            <button class="eliminar__btn" id="${id}">Eliminar</button>
          </div>
        </article>
      `;
    });

    coleccionContenedor.innerHTML = html;
}

/* INVOCAR LA FUNCION */
pintarColeccion();

/* CREAR UNA FUNCION PARA AGREGAR UNA TARJETA A LA COLECCION */
function agregarTarjeta(id) {
    const findCard = searchCard(id);

    if (coleccion[findCard.id]) return alert("Hola esto ya esta");

    coleccion[findCard.id] = { ...findCard };

    localStorage.setItem("coleccion", JSON.stringify(coleccion));
}

/* CREAR UNA FUNCION PARA REMOVER UNA TARJETA A LA COLECCION */
function removerTarjeta(id) {
    const res = confirm("Seguro quieres hacer esto?");

    if (!res) return;

    delete coleccion[id];

    localStorage.setItem("coleccion", JSON.stringify(coleccion));
}

/**DE ESTA MANERA BUSCAMOS UNA CARD */
function searchCard(id) {
    return tarjetas.find(function (tarjeta) {
        return tarjeta.id === id;
    });
}

/* UTILIZAR EL DELEGADOR DE EVENTOS PARA AGREGAR LAS TARJETAS A LA COLECCION */
tarjetasContenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("agregar__btn")) {
        const id = e.target.id;
        agregarTarjeta(id);
    }
    /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
    pintarColeccion();
});

/* UTILIZAR EL DELEGADOR DE EVENTOS PARA REMOVER LAS TARJETAS DE LA COLECCION */
coleccionContenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar__btn")) {
        const id = e.target.id;
        removerTarjeta(id);
    }
    /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
    pintarColeccion();
});
