//sélection des éléments du DOM
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const amPm = document.querySelector(".am-pm");
const day = document.querySelector(".day");
const month = document.querySelector(".month");

//récupération de la date formatée
const date = new Intl.DateTimeFormat("fr-FR", {dateStyle:"full"}).format(new Date ());



let [jour, numero, mois] = date.split(" ");

//suppression des accents sur les mois
function strNoAccent(a) {
    return a.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
mois = strNoAccent(mois.toUpperCase());

//gestion des 0 avant les jours
if(numero < 10) {
    numero = "0" + numero;
}



//fonction qui permet l'affichage de l'horloge
function time () {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //gestion du am / pm
    let isAmOrPm = "AM";

    if(h > 12) {
        h = "0" + (h - 12);
        isAmOrPm = "PM";
    }

    //gestion du 0 avant les minutes et les secondes
    if(m < 10) {
        m = "0" + m;
    }

    if(s < 10) {
        s = "0" + s;
    }

    //injection des valeurs
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    amPm.innerText = isAmOrPm;
    day.innerText = jour;
    month.innerText = `${numero} / ${mois}`

    //gestion du dynamisme de l'affichage du temps
    setInterval( () => {
        time();
    },1000)
}

time();

