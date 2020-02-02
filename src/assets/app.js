document.addEventListener('DOMContentLoaded', () => {
    const goods = API.products;
    const container = document.getElementById('container');
    const basketElement = document.getElementById('basketItems');
    const basketIcon = document.getElementById('basket');
    const orderModal = document.querySelector('#modal');
    
    const basket = [];
    console.log(basketIcon);
    
    goods.forEach((item) => {
        const content = `
        <div class="card">
            <div class="card-img">
                <img id="img" src="${item.img}" alt="divan">
            </div>
            <div class="card-about">
                <small id="name">${item.title}</small> 
                <b id="price">${item.price} руб</b>
            </div>
            <div class="card-control">
                <button class="btn btn-red" data-action="order">Заказать</button>
                <button class="btn" data-action="buy">В корзину</button>
            </div>
        </div>`;
    
        container.innerHTML = container.innerHTML + content;
    });
    
    const addToBusketButtons = document.querySelectorAll('[data-action="buy"]');
    
    
    
    
    addToBusketButtons.forEach(addToBusketButton => {
    
        addToBusketButton.addEventListener('click', () => {
    
            //получаем доступ к родительскому узлу
            const button = addToBusketButton.parentNode;
            //получаем доступ к блоку с инф. о товаре
            const cardInfo = button.parentNode.querySelector('.card-about');
            // получаем доступ к блоку с картинкой
            const cardImage = button.parentNode.querySelector('.card-img');
            const good = {
                title: cardInfo.querySelector('#name').innerHTML,
                price: cardInfo.querySelector('#price').innerHTML,
                img: cardImage.querySelector('#img').getAttribute('src')
            }
    
            addToBasket(good);
            basket.push(good);
    
            deleteItem(basketElement);
            console.log(basket);
        });
    });
    
    function addToBasket(good) {
        basketElement.insertAdjacentHTML("beforeend", `
        <div class="basket-item">
            <img class="item-img" src="${good.img}" alt="">
            <div class="item-description">
                <small id="itemPrice">${good.title}</small>
                <b>${good.price} руб</b>
            </div>
            <button class="btn btn-delete" data-action="deleteItem">X</button>
        </div>
    `);
    }
    
    function deleteItem(basketElement) {
        const basketElements = basketElement.querySelectorAll('.basket-item');
        basketElements.forEach(item => {
            item.querySelector('[data-action="deleteItem"]').addEventListener('click', () => {
                item.remove();
            })
        })
    }
    
    
    basketIcon.addEventListener('click', (event) => {
        basketElement.classList.toggle('showModal');
    
    });
    
    basketElement.addEventListener('click', event => event.stopPropagation());
    
    const orderButtons = document.querySelectorAll('[data-action="order"]');
    console.log(orderButtons);
    
    orderButtons.forEach(orderButton => {
        orderButton.addEventListener('click', () => {
    
            //получаем доступ к родительскому узлу
            const button = orderButton.parentNode;
            //получаем доступ к блоку с инф. о товаре
            const cardInfo = button.parentNode.querySelector('.card-about');
            // получаем доступ к блоку с картинкой
            const cardImage = button.parentNode.querySelector('.card-img');
            const good = {
                title: cardInfo.querySelector('#name').innerHTML,
                price: cardInfo.querySelector('#price').innerHTML,
                img: cardImage.querySelector('#img').getAttribute('src')
            }
            console.log(good);
            createOrder(good);
            closeOrderModal(orderModal);
            orderModal.classList.toggle('showModal');
           
        });
    });
    
    
    function createOrder(good) {
        orderModal.insertAdjacentHTML("beforeend", 
        `<div class="order-modal" id="orderItem">
            <div class="close-modal">
                <button class="btn btn-delete" id="closeModal">x</button>
            </div>
            <div class="order-modal-description">
                <b><small>${good.title}</small></b>
            </div>
            <div class="order-body">
                <div class="order-image">
                    <img src="${good.img}" alt="">
                </div>
                <div class="order-line"></div>
                <div class="order-comment">
                    <span>Комментарий к заказу:</span>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
            </div>
            <div class="order-footer">
                <div class="order-price">
                    ${good.price}
                </div>
                <div class="order-form">
                    <label for="phoneInput">Ваш телефон:</label>
                    <input type="text" id="phoneInput">
                </div>
                <div class="order-control">
                    <button class="btn btn-red" >Отправить</button>
                </div>
            </div>
        </div>`)
    }
    
    function closeOrderModal(orderModal) {
        const closeButton = orderModal.querySelector('#closeModal');
        console.log(orderItem);
        closeButton.addEventListener('click', (event) => {
            orderModal.querySelector('#orderItem').remove(); 
            orderModal.classList.toggle('showModal');
            console.log(event.target);
        })
    }
}) 
