const _CATALOG = document.querySelector('.product-listing-wrapper');



class Catalog  {

   render() {
      let htmlCatalog = '';
      
      
      API.products.forEach(({ id, title, price, img}) => {
        htmlCatalog += `
         <li id='${id}' class="catalog-item" data-item='${id}'>
            <img src='${img}' class="catalog-item__img"/>
            <div class="catalog-item__block-text">
               <span class="catalog-title">${title}</span>
               <span class="catalog-price">${price} руб.</span>
            </div>
            <div class="catalog-item__block-btn">
               <button class="catalog-item__btn-buy" data-buy='${id}'>ЗАКАЗАТЬ</button>
               <button class="catalog-item__btn-add" data-add='${id}'>В корзину</button>
            </div>
         </li>
        `;
      });

      const html =  `
         <ul class="catalog-container">
            ${htmlCatalog}
         </ul>
      `;

      _CATALOG.innerHTML = html;
   }
}

const catalogPage = new Catalog();
catalogPage.render();
