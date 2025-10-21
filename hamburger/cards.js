console.log("Cards Cargado");

const dataCards = [
    {
        "title": "Hoodie Essetials FOG",
        "url_image": "./img/hoodie.webp",
        "desc": "Nuevo ingreso hoodies Essentials",
        "cta": "Mostrar más...",
        "link": "./hoodies.php"
    },
    {

        "title": "Camiseta Corteiz",
        "url_image": "./img/t-shirt.jpg",
        "desc": "Camisetas Corteiz disponibles",
        "cta": "Mostrar más...",
        "link": "./t-shirts.php"
    },
    {
        "title": "Pantalon chrome hearts",
        "url_image": "./img/pantalon.webp",
        "desc": "Nuevo ingreso pantalon unico en su talla y diseño",
        "cta": "Mostrar más...",
        "link": "./pantalones.php"
    }
];

(function () {
    let CARD = {

        init: function() {
            let _self = this;
            this.insertData(_self);
        },

        insertData: function(_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item,index));
            })
        },

        tplCardItem: function(item, index) {
            return(`<div class='card-item id='card-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                    <p class='card-title'>${item.title}</p>
                    <p class='card-desc'>${item.desc}</p>
                    <a class='card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                </div>
            </div>`)
        },
    }
    CARD.init();
})();