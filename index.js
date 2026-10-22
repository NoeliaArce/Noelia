/* =========================
   WHATSAPP
========================= */

const WHATSAPP_NUM = "591073349322";


function abrirWhatsApp(msg){

    const url =
        "https://wa.me/" +
        WHATSAPP_NUM +
        "?text=" +
        encodeURIComponent(msg);

    window.open(url,"_blank");

}


/* =========================
   MENU
========================= */

function toggleMenu(){

    const menu =
        document.getElementById("menu");

    menu.classList.toggle("abierto");

}


function cerrarMenu(){

    const menu =
        document.getElementById("menu");

    menu.classList.remove("abierto");

}


/* =========================
   CAMBIAR SECCIONES
========================= */

function mostrarSeccion(id){

    document
        .querySelectorAll(".seccion")
        .forEach(function(seccion){

            seccion.classList.remove("activa");

        });


    document
        .getElementById(id)
        .classList.add("activa");

}


/* =========================
   PRODUCTOS
========================= */

const productos = [

    {
        categoria:"moños",
        color:"morado",
        nombre:"Morado Floral ",
        precio:17,
        img:"morado con flor1.jfif",
        desc:"Moño elegante y delicado, hecho con cinta satinada de color morado pastel, con un tamaño aproximado de 12x8.5cm."
    },

    {
        categoria:"lazos",
        color:"morado",
        nombre:"Lavanda",
        precio:100,
        img:"lazo morado.jfif",
        desc:"Lazos en color morado con un toque encantador de diferentes tamaño el mas grande mide: 11.5x25cm y el pequeño: 7.5x13.5cm."
    },

    {
        categoria:"lazos",
        color:"guindo",
        nombre:"Cereza imperial",
        precio:20,
        img:"guindo lazos.jfif",
        desc:"Lazo glamuroso color guindo, destaca en cualquier look. Con un tamaño 8x12.5."
    },

    {
        categoria:"trabas",
        color:"guindo",
        nombre:"Rosa primaveral",
        precio:15,
        img:"guindo rosa.jfif",
        desc:"Traba inspirada en las rosas de color guindo para una princesa de verdad. Con un tamaño de 9x5cm"
    },

    {
        categoria:"moños",
        color:"rosa",
        nombre:"Rosa Encanto",
        precio:15,
        img:"rosa moño.jfif",
        desc:"Moño rosa hermoso de color rosa palo con un tamaño de 6x4cm, elaborado con cinta satinada."
    },

    {
        categoria:"winchas",
        color:"azul",
        nombre:"cielo",
        precio:18,
        img:"wicha.jfif",
        desc:"Wincha de color azul marino, perfecto para peinados con estilo y caracter."
    },

    {
        categoria:"lazos",
        color:"rosa",
        nombre:"Tulipanes con Estilo",
        precio:25,
        img:"tulipan.jfif",
        desc:"Lazo rosado de alta calidad, el toque de lujo que toda princesa merece. De tamaño "
    },

    {
        categoria:"trabas",
        color:"azul",
        nombre:"Mariposa azul",
        precio:15,
        img:"traba azul.jfif",
        desc:"Traba hecha con un toque delicado inspirado en mujeres empoderadas que buscan un look especial."
    },

    {
        categoria:"moños",
        color:"azul",
        nombre:"Azul Sueños",
        precio:13,
        img:"azul moño.jfif",
        desc:"Moño de color azul, elaborado con cinta satinada, con un tamaño aproximado de 13x4cm. Perfecto para aquellas mujeres q aman el mar."
    },

    {
        categoria:"lazos",
        color:"rosa",
        nombre:"Rosa Brillante",
        precio:32,
        img:"rosa con blanco.jfif",
        desc:"Lazo rosa con detalles brillantes, elaborado con cinta satinada y perlitas para un toque especial. Este increible lazo tiene un tamaño de 9x19.5cm"
    }

];


/* =========================
   MOSTRAR PRODUCTOS
========================= */

const catalogo =
    document.getElementById("catalogoProductos");

let productoActual = null;


function mostrarProductos(){

    const categoria =
        document.getElementById("categoria").value;

    const color =
        document.getElementById("color").value;

    catalogo.innerHTML = "";


    productos.forEach(function(p,i){

        if(

            (categoria === "todos" ||
             p.categoria === categoria)

            &&

            (color === "todos" ||
             p.color === color)

        ){

            catalogo.innerHTML += `

                <div class="producto">

                    <img src="${p.img}">

                    <div class="info">

                        <h3>
                            ${p.nombre}
                        </h3>

                        <p class="precio">
                            Bs ${p.precio}
                        </p>

                        <div class="botones">

                            <button
                                class="ver"
                                onclick="verMas(${i})">

                                Ver más

                            </button>

                            <button
                                class="comprar"
                                onclick="abrirWhatsApp(
                                'Hola! Quiero comprar: ${p.nombre} - Bs ${p.precio}'
                                )">

                                Comprar

                            </button>

                            <button
                                class="whatsapp"
                                onclick="abrirWhatsApp(
                                'Hola! Me interesa: ${p.nombre} - Bs ${p.precio}'
                                )">

                                WhatsApp

                            </button>

                        </div>

                    </div>

                </div>

            `;

        }

    });

}


/* =========================
   VER PRODUCTO
========================= */

function verMas(i){

    const p = productos[i];

    productoActual = p;


    document.getElementById("modalImg").src =
        p.img;


    document.getElementById("modalNombre")
        .textContent = p.nombre;


    document.getElementById("modalPrecio")
        .textContent =
        "Precio: Bs " + p.precio;


    document.getElementById("modalDesc")
        .textContent = p.desc;


    document
        .getElementById("modalOverlay")
        .classList.add("open");

}


/* =========================
   CERRAR MODAL
========================= */

function cerrarModal(){

    document
        .getElementById("modalOverlay")
        .classList.remove("open");

}


/* =========================
   WHATSAPP DESDE MODAL
========================= */

function whatsappModal(){

    if(productoActual){

        abrirWhatsApp(
            "Hola! Me interesa: " +
            productoActual.nombre +
            " - Bs " +
            productoActual.precio
        );

    }

}


/* =========================
   COMPRAR DESDE MODAL
========================= */

function comprarModal(){

    if(productoActual){

        abrirWhatsApp(
            "Hola! Quiero comprar: " +
            productoActual.nombre +
            " - Bs " +
            productoActual.precio
        );

    }

}


/* =========================
   CERRAR MODAL AL TOCAR AFUERA
========================= */

document
    .getElementById("modalOverlay")
    .addEventListener("click",function(e){

        if(e.target === this){

            cerrarModal();

        }

    });


/* =========================
   PROMOCIONES
========================= */

const promos = [

    {
        nombre:"Rosas primavera",
        antes:15,
        ahora:12,
        desc:"Dos hermosos lazos a un bajo precio",
        img:"2moños rosas.jfif"
    },

    {
        nombre:"Lavandas",
        antes:23,
        ahora:17,
        desc:"Dos lazos a un precio bajo.",
        img:"2lazos morados.jfif"
    },

    {
        nombre:"Princesa fulgor",
        antes:14,
        ahora:10,
        desc:"Descuento 30%",
        img:"rojo con dibujos.jfif"
    },

    {
        nombre:"Guindo vino",
        antes:20,
        ahora:15,
        desc:"Descuento 30%",
        img:"guindo lazos.jfif"
    }

];


const promosContainer =
    document.getElementById("promosContainer");


promos.forEach(function(pr){

    promosContainer.innerHTML += `

        <div class="promo">

            <img src="${pr.img}">

            <h3>
                ${pr.nombre}
            </h3>

            <p>

                Antes Bs ${pr.antes}

                -

                <b>
                    Ahora Bs ${pr.ahora}
                </b>

            </p>

            <span class="badge-desc">

                ${pr.desc}

            </span>

            <br>

            <button
                onclick="abrirWhatsApp(
                'Hola! Me interesa la promoción: ${pr.nombre} a Bs ${pr.ahora}'
                )">

                Pedir por WhatsApp

            </button>

        </div>

    `;

});


/* =========================
   FILTROS
========================= */

document
    .getElementById("categoria")
    .addEventListener(
        "change",
        mostrarProductos
    );


document
    .getElementById("color")
    .addEventListener(
        "change",
        mostrarProductos
    );


/* =========================
   MOSTRAR PRODUCTOS AL INICIAR
========================= */

mostrarProductos();
