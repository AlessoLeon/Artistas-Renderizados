artists = [
    {   id:1,
        name:"Claude",
        lastName:"Monet",
        date:"14 de nov. de 1840",
        img:"/img/Claude Monet/Autorretrato.jpeg",
        bio:"Claude Monet fue un pintor francés, uno de los creadores del impresionismo. El término impresionismo deriva del título de su obra Impresión, sol naciente (1872) 1. Nació en París el 14 de noviembre de 1840 y murió en Giverny el 5 de diciembre de 1926. Se interesó por la pintura desde joven y tuvo como maestro a Eugène Boudin, quien le enseñó a pintar al aire libre. En París conoció a otros artistas como Renoir, Sisley, Bazille, Cézanne, Degas y Manet, con quienes compartió su visión innovadora del arte. Monet se dedicó a captar los efectos de la luz y el color sobre la naturaleza, utilizando pinceladas sueltas y rápidas."
    },
    {   
        id:2,
        name:"Francisco",
        lastName:"Goya",
        date:"30 de mar. de 1746",
        img:"/img/Francisco de Goya/Autorretrato.jpeg",
        bio:"Francisco Goya fue un pintor y grabador español, considerado uno de los grandes maestros de la historia del arte. Su obra abarca desde el rococó hasta el impresionismo, pasando por el neoclasicismo y el prerromanticismo. Su estilo se caracteriza por el realismo, la crítica social, el uso de la luz y el color, y la expresión de sus sentimientos más íntimos. Algunas de sus obras más famosas son La familia de Carlos IV, La maja vestida y La maja desnuda, El 2 de mayo y Los fusilamientos del 3 de mayo, Los caprichos y Los desastres de la guerra, y las Pinturas negras. Si quieres saber más sobre la vida y la obra de Francisco Goya."
    },
    {   
        id:3,
        name:"Pablo",
        lastName:"Picasso",
        date:"25 de oct. de 1881",
        img:"/img/Pablo Picasso/Autorretrato.jpeg",
        bio:"Él fue un famoso artista español, considerado uno de los creadores del cubismo y uno de los más influyentes del siglo XX. Nació en Málaga en 1881 y murió en Francia en 1973. Pintó obras maestras como Las señoritas de Aviñón, Guernica y La familia de Carlos IV. También hizo esculturas, grabados, collages y cerámicas."
    },
    {   
        id:4,
        name:"Salvador", 
        lastName:"Dale",
        date:"11 de may. de 1904",
        img:"/img/Salvador Dale/Autorretrato.jpeg",
        bio:"Creo que has cometido un error al escribir el nombre del pintor. ¿Querías decir Salvador Dalí? Él fue un famoso artista español, considerado uno de los máximos representantes del surrealismo. Nació en Figueres, Gerona, el 11 de mayo de 1904 y murió en la misma ciudad el 23 de enero de 1989. Su obra se caracteriza por su imaginación desbordante, su dominio técnico y su uso de símbolos recurrentes como los relojes blandos, los elefantes, los huevos o las hormigas. Algunas de sus pinturas más conocidas son La persistencia de la memoria, La Madonna de Port Lligat, El gran masturbador o La metamorfosis de Narciso."
    },
    {   
        id:5,
        name:"Vincent",
        lastName:"Van Gogh",
        date:"30 de mar. de 1853",
        img:"/img/Van Gogh/Autoretrato.jpeg",
        bio:"Vincent van Gogh fue un pintor neerlandés, uno de los principales exponentes del postimpresionismo. Nació en Zundert, Países Bajos, el 30 de marzo de 1853 y murió en Auvers-sur-Oise, Francia, el 29 de julio de 1890. Su obra se caracteriza por su uso intenso del color, su expresividad y su influencia en el arte moderno. Pintó unos 800 cuadros y realizó más de 1600 dibujos, entre ellos 43 autorretratos y 148 acuarelas. Algunas de sus obras más famosas son La noche estrellada, Los girasoles, Los comedores de patatas y La habitación de Arlés. Su vida estuvo marcada por el sufrimiento, la pobreza, la enfermedad mental y el amor no correspondido. Se suicidó a los 37 años de edad, disparándose en el pecho."
    }
]

const showArt = ( artist ) => {
    document.querySelector(".seleccionador__cartas").innerHTML += `
        <div class="carta">
            <figure>
                <img class="carta__img" src="${ artist.img }" alt="">
            </figure>
            <div class="carta__content">
                <h4 class="carta__title"><a href="">${ artist.name + " " + artist.lastName }</a></h4>
                <p>${artist.date}</p>
                <p>${artist.bio}</p>
            </div>
        </div>`
}

const showResult = (resultArray,result) => {
    result.innerHTML = '';

    if (resultArray.length === 0) {
        result.innerHTML = '<li>No se encontraron resultados.</li>';
        return;
    }
    showResultItem(resultArray,result)
}

const showResultItem = (resultArray,result) => {
    resultArray.forEach(element => {
        const li = document.createElement('li');
        const link = `<a href="/pages/gallery.html?id=${element.id}" class="submenu__link">${element.name} ${element.lastName}</a>`
        li.innerHTML = link
        result.appendChild(li);
    });
}

const search = () => {
    const search = document.getElementById('search');
    const result = document.getElementById('result-search');


    search.addEventListener('input', () => {
    const searchValue = search.value.toLowerCase();
    if (searchValue != "" && searchValue != " ") {
        const resultFilter = artists.filter(element => `${element.name} ${element.lastName}`.toLowerCase().includes(searchValue));
        showResult(resultFilter,result);
    } else {
        result.innerHTML = '';
    }
    });

}

const createArts = () => {
    artists.map(art => showArt(art));
}


createArts()
search()