const arrCerdsResident = [
    {id:1, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img1.svg'},
    {id:2, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img2.svg'},
    {id:3, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img3.svg'},
    {id:4, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img4.svg'},
    {id:5, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img5.svg'},
    {id:6, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img6.svg'},
    {id:7, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img7.svg'},
    {id:8, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img8.svg'},
    {id:9, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img9.svg'},
    {id:10, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img10.svg'},
    {id:11, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img11.svg'},
    {id:12, title: 'Дом для двух поколений', text:'Уютная студия в ЖК Адмирал', img:'../img/cadrs/img12.svg'}
]

const toHTML = cardResident => `
<a class="card" href="./pages/project_gallery.html">
    <div class="img_card">
        <img src="${cardResident.img}" alt="">
    </div>
    <p class="top_text_card">${cardResident.title}</p>
    <p class="bot_text_card">${cardResident.text}</p>
</a>
`

function cardResident () {
    const html = arrCerdsResident.map(toHTML).join('');
    document.querySelector('#box_cards').innerHTML = html;

}
cardResident()