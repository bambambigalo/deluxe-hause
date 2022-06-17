// arr slide and image  for slider+++++
const arrSlider = [

{id:1, title:'"ЖК Арман"', mass:[
    {id:1, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:2, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:3, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:4, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:5, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:6, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:7, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:8, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:9, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:10, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:11, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:12, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:13, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:14, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:15, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:16, img:'../img/gallery_img_cards/gallery_img_card.png'}
]
},
{id:2, title:'"ЖК Нурлан"', mass:[
    {id:1, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:2, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:3, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:4, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:5, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:6, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:7, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:8, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:9, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:10, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:11, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:12, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:13, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:14, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:15, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:16, img:'../img/gallery_img_cards/gallery_img_card.png'}
]
},
{id:3, title:'"ЖК Султан"', mass:[
    {id:1, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:2, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:3, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:4, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:5, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:6, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:7, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:8, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:9, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:10, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:11, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:12, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:13, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:14, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:15, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:16, img:'../img/gallery_img_cards/gallery_img_card.png'}
]
},
{id:4, title:'"ЖК Алмаз"', mass:[
    {id:1, img:'../img/gallery_img_cards/gallery_img_card.png'},
    {id:2, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:3, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:4, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:5, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:6, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:7, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:8, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:9, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:10, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:11, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:12, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:13, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:14, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:15, img:'../img/gallery_img_cards/gallery_img_card.png'},
    // {id:16, img:'../img/gallery_img_cards/gallery_img_card.png'}
]
},
]

const itemId = arrSlider.map(id=>id.id)



const toHTML = slideGallery => `
    
        <div class="slide_gallery" id="id_${slideGallery.id}">
                <h2 class="title_card_blocks">Галлерея проекта <span>${slideGallery.title}</span></h2>
                <div class="long_bold"></div>
                <div class="cards_gallery" data-content>
                
                
                </div>
            </div>

`;
const toHTMLG = imgGallery => `
    <div class="card_gallery">
    <img src="${imgGallery.img}" alt="">

    </div>

`;

function sliderGalleryImage() {

    const html = arrSlider.map(toHTML).join('');
    document.querySelector('#slider_track_gallery').innerHTML = html;
  
    // Проходим циклом по всему массиву
    arrSlider.forEach( slide => {
  
      // Массив ас фотографиями этого слайда
      const photos = slide.mass;
  
      // Пройдемся по масиву всех фотографий и соединим
      const htmlg = photos.map(toHTMLG).join('');
  
      // Ищем по id нужный нам блок и внутри него блок с data-content
      document.querySelector('#id_' + slide.id + ' [data-content]').innerHTML = htmlg;
       
    });
  
  }
sliderGalleryImage();


// slider============================================================================================================
function Slider () {
    let position = 0;
    const sliderToShow = 1;
    const sliderToScroll = 1;
    const sliderContainer = document.querySelector('#slider_gallery').getBoundingClientRect();
    const widthContainer = sliderContainer.width;
    const sliderTrack = document.querySelector('#slider_track_gallery');
    const slideWidth = widthContainer/sliderToShow;

    arrSlider.forEach(slide=>{

        const item = document.querySelector('#id_'+ slide.id);
    // width slide++++++++
        item.style.minWidth = slideWidth + 'px';  
        
    })
    
    // move position track
    movePosition = sliderToScroll * slideWidth
    // btn click+++++++
    document.querySelector('#btn_prev').addEventListener('click', ()=>{
        position += movePosition  
        setPosition()
        
    });
    document.querySelector('#btn_next').addEventListener('click', ()=>{
        position -= movePosition 
        setPosition()
    });;
    const setPosition = ()=> {
        sliderTrack.style.transform = `translateX(${position}px)`
    }
    

 }
 Slider ();
