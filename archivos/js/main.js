window.addEventListener("scroll", function () {
  let e = document.querySelector(".main-nav"),
    r = e.getBoundingClientRect().top,
    n = document.querySelector(".fa-ellipsis-vertical");
  r < window.innerHeight / 3 &&
    ((n.style.animation = "aparecer-menu 1s forwards"),
    (e.style.animation = "aparecer 1s forwards"));
});

const switchNav = document.getElementById("days_night"),
  body = document.querySelector("body");

switchNav.addEventListener("click", () => {
  body.classList.toggle("days"), switchNav.classList.toggle("active");
});

const navMenu = document.querySelector(".main-nav-menu"),
  navMenuBars = document.querySelector(".main-nav-menu_desplegable"),
  closeMenu = document.querySelector(".main-nav-menu-a-cierre"),
  menu = document.querySelectorAll(".main-nav-menu-a");

if (window.innerWidth <= 700) {
  function e() {
    navMenu.style.animation = "cierre-nav 1.5s forwards";
  }
  navMenuBars.addEventListener("click", () => {
    navMenu.style.animation = "aparecer-nav 1s forwards";
  }),
    closeMenu.addEventListener("click", () => {
      e();
    }),
    menu.forEach((r) => {
      r.addEventListener("click", () => {
        e();
      });
    });
}

window.addEventListener("scroll", () => {
  let e = document.querySelector(".nosotros").getBoundingClientRect().top,
    r = window.innerHeight,
    n = window.innerHeight / 2;
  e < r && document.querySelector(".nosotros-title").setAttribute("id", "span"),
    e < n &&
      document
        .querySelector(".nosotros-ilustracion")
        .setAttribute("id", "animacion-svg");
});

const plusOrder = document.querySelectorAll(".menu-scroll-all-contenedor-order");
const sendOrder = document.querySelector(".menu-content-send");
const plusMsj = document.querySelector(".menu-scroll-all-contenedor-msj");
const plusCierre = document.getElementById("cierre");
const plusMsjP = document.querySelector(".menu-scroll-all-contenedor-msj-p");
let numberOrder = 0;
let order = "";
let newPirceCard = 0;

const sendAlert = document.getElementById("send-alert");
let prices = [];

const CardAdd = (URLimg, NameCard, PriceCard) => {
  let card = `<div id="card">
                <picture class="alert-card-card_content-picture">
                  <img src="${URLimg}" alt="${URLimg}" class="alert-card-card_content-picture-img">
                </picture>
                <div class="alert-card-card_content-text">
                  <p>${NameCard}</p>
                  <span id='priceCard'>$ ${PriceCard}</span>
                </div>
                <span id="close-card"></span>
              </div>`;
  prices.push(PriceCard); 
  return card;
};

let price = document.querySelector('#priceCardTotal');

plusOrder.forEach((e) => {
  e.addEventListener("click", () => {
    numberOrder = parseInt(numberOrder) + 1;
    (plusMsj.style.animation = "plus-aparecer .3s forwards"), numberOrder > 1 ? (plusMsjP.innerHTML = `Excelente tienes ${numberOrder} pedidos pendientes`) : (plusMsjP.innerHTML = `Excelente tienes ${numberOrder} pedido pendiente`)
      1 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA FULL EQUIPO", 1500)),
      2 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA KIDS", 850)),
      3 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","TEQUEÑOS", 1300)),
      4 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","PAPAS REVOLTOSAS", 750)),
      5 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","PAPAS FRITAS", 600)),
      6 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","PAPAS AMERICANAS", 800)),
      7 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA PATAGONIA", 1050)),
      8 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA LEGENDARIA", 1000)),
      9 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA VEGGIE", 950)),
      10 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA CLASICA", 1000)),
      11 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA ESPECIAL", 1200)),
      12 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA DE PUERCO", 950)),
      13 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA CRISPY", 1000)),
      14 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA 1/4 DE LIBRA", 900)),
      15 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA DOBLE QUESO", 1200)),
      16 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA MARACUCHA", 1050)),
      17 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA CRIOLLA", 1000)),
      18 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA AMERICANA", 1050)),
      19 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA SENCILLA", 950)),
      20 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA DOBLE", 1200)),
      21 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA TRIPLE", 1500)),
      22 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA DE POLLO", 950)),
      23 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA SIFRINA", 1100)),
      24 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","GORDA MEXICANA", 1050)),
      25 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","PAPAS GRILL", 950)),
      26 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","PAPAS PAISANAS", 800)),
      27 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","NUGGETS DE POLLO", 850)),
      28 == e.id && (order += CardAdd("archivos/fotos/Gorda-Criolla-min.jpg","AROS DE CEBOLLA", 550)),
      sendAlert.setAttribute("href",`https://api.whatsapp.com/send?phone=5492477685189&text= Mi orden es de : ${order}`);
  });
});

let ad = 0;
sendOrder.addEventListener("click", () => {
  if ("" == sendAlert.href) {
    sendOrder.removeAttribute("href");
    plusMsj.style.animation = "plus-aparecer .3s forwards";
    plusMsjP.innerHTML = "Ups, debes hacer un pedido primero";
  } else {
      let e = document.getElementById("alert");
      let r = document.getElementById("alertClose");
      let n = document.getElementById("DeleteOrder");

      e.style = "display : flex;";
      r.addEventListener("click", () => {
        e.style = "display: none;";
      });
      n.addEventListener("click", () => {
        sendAlert.removeAttribute("href");
        order = "";
        newPirceCard = 0;
        numberOrder = 0;
        pricess = 0;
        e.style = "display: none;";
        plusMsjP.innerHTML = "Excelente tienes 0 pedido pendientes";
      });
      document.getElementById("addCard").innerHTML = order;
      prices.forEach((e)=>{
        ad = newPirceCard + parseInt(prices[prices.indexOf(e)])
        console.log(ad)
      })
      price.innerHTML = parseInt(ad)
  }
});

plusCierre.addEventListener("click", () => {
  plusMsj.style.animation = "plus-cierre .3s forwards";
});
