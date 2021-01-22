class Listing {
    render() {
        let catalogHtml = '';

        API.products.forEach(({id, title, price, img}) => {
            catalogHtml += `
            <li class="products-element">
            <img src="${img}" class="products-element-img"/>
            <span class="products-element-name">${title}</span>
            <span class="products-element-price">${price.toLocaleString()} руб.</span>
            <button class="products-element-order-button red-button" id="${id}">Заказать</button>
            <button class="products-element-cart-button" id="${id}">В корзину</button>
            </li>
            `;
        });
        const html = `
        <ul class="products-container">
        ${catalogHtml}
        </ul>
        `
        document.querySelector(".product-listing").innerHTML = html
    }
}

const listing = new Listing();
listing.render()