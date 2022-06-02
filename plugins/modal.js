function _createModal (option) {
    const modaldom = document.createElement('div');
    modaldom.classList.add('modal');
    modaldom.insertAdjacentHTML('afterbegin', `
            <div class="modal_overlay" data-close = 'true'>
                <div class="modal_window">
                    <div class="modal_header">
                        <span class="close" data-close = 'true'></span>
                    </div>
                    <div class="modal_box" data-content>
                        <div class="modal_content" >
                            <p class="title_modal">Перезвоните мне</p>
                            <p class="text_modal">Наш менеджер перезвонит вам в течении 10 минут</p>
                        </div>
                        <div class="modal_footer" >
                                <div class="modal_form">
                                    <input class="input_form" placeholder="+ 7 (___) ___ - __ - __" type="number">
                                    <button class="btn_form" id = 'btn_form' data-send >Отправить запрос</button>
                                </div>
                        </div>
                    </div>
                   
                </div>
            </div>
    `)
    document.body.appendChild(modaldom)
    return modaldom
}


function modal  (option) {
    const ANIM = 200;
    const modaldom = _createModal(option);
    let closing = false;
    let destroyded = false;

    const modalO = {
        open() {
            !closing && modaldom.classList.add('open');
        },
        close() {
            modaldom.classList.remove('open');
            modaldom.classList.add('anim');
            setTimeout(()=>{
                modaldom.classList.remove('anim');
                closing = false;
                destroyded = true;
            },ANIM)
        }   
    }
    const listener = event => {
        if(event.target.dataset.close) {
            modalO.close()
        }
    }
   
 
    modaldom.addEventListener('click', listener)
    return Object.assign(modalO,{
        destroy() {
            modaldom.parentNode.removeChild(modaldom)
            modaldom.removeEventListener('click', listener)
            destroyded = true; 
        },
        setContent() {
            
            modaldom.querySelector('[data-content]').innerHTML = `
            <div class="modal_box_send" >
            <p class="title_modal">Спасибо что оставили заявку!</p>
            <p class="text_modal">А пока вы ждете звонок, можете просмотреть наши лучшие проекты!</p>
            <p class="text_modal_segoe">Мы создаем прекрасное!</p>
            </div>
            `
           
        }
    })
               
}