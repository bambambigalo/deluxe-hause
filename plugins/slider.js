const arrSlider = [
{id:1, title:'"ЖК Арман"', mass:[
    {id:1, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:2, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:3, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:4, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:5, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:6, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:7, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:8, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:9, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:10, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:11, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:12, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:13, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:14, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:15, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:16, img:'../img/gallery_img_cards/gallery_img_card.png'}
]
},
// {id:2, title:'"ЖК Нурлан"', mass:[
//     {id:1, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:2, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:3, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:4, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:5, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:6, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:7, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:8, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:9, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:10, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:11, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:12, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:13, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:14, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:15, img:'../img/gallery_img_cards/gallery_img_card.png'},
//     {id:16, img:'../img/gallery_img_cards/gallery_img_card.png'}
// ]
// },
]
console.log(arrSlider.map((id)=>{return id.id} ))

const toHTML = slideGallery => `
    <div class="slide_gallery">
        <h2 class="title_card_blocks">Галлерея проекта <span>${slideGallery.title}</span></h2>
        <div class="long_bold"></div>
        <div class="cards_gallery" id = 'box_cards_gallery'>
      
           
        </div>
    </div>

`;
const toHTMLG = imgGallery => `
<div class="card_gallery">
<img src="${imgGallery.img}" alt="">

</div>

`;
function sliderGallery () {
    const html = arrSlider.map(toHTML).join('');
    document.querySelector('#slider_track_gallery').innerHTML = html;

    const htmlg = arrSlider.map(mass=>mass.mass.map(toHTMLG).join('')) ;
 
    document.querySelector('#box_cards_gallery').innerHTML = htmlg;
   
  
}
sliderGallery();




