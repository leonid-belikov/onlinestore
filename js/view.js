class View {
    constructor(data, pagesCount, cartData) {
        // текущая страница
        this.page = 1;
        // количество страниц
        this.pagesCount = pagesCount;
        // товары на странице
        this.items = data;
        // товары в корзине
        this.cartData = cartData;
        this._html = `
            <header>
                <div class="container toolbar">
                    <div class="sort">
                        <div class="sort__title">Сортировать</div>
                        <div class="sort__buttons">
                            <div class="sort__button active" id="sort__button-default"
                                onclick="
                                    const sortCatalogEvent = new CustomEvent('sortCatalog', {detail: {sort: null}});
                                    document.dispatchEvent(sortCatalogEvent);"
                            >По умолчанию</div>
                            <div class="sort__button" id="sort__button-title"
                                onclick="
                                    const sortCatalogEvent = new CustomEvent('sortCatalog', {detail: {sort: 'title'}});
                                    document.dispatchEvent(sortCatalogEvent);"
                            >По названию</div>
                            <div class="sort__button" id="sort__button-price"
                                onclick="
                                    const sortCatalogEvent = new CustomEvent('sortCatalog', {detail: {sort: 'price'}});
                                    document.dispatchEvent(sortCatalogEvent);"
                            >По цене</div>
                        </div>
                    </div>
                    <div class="filter">
                        <div class="filter__title">Показывать</div>
                        <div class="filter__buttons">
                            <div class="filter__button active" id="filter__button-all"
                                onclick="
                                    const filterCatalogEvent = new CustomEvent('filterCatalog', {detail: {filter: false}});
                                    document.dispatchEvent(filterCatalogEvent);"
                            >Все</div>
                            <div class="filter__button" id="filter__button-avail"
                                onclick="
                                    const filterCatalogEvent = new CustomEvent('filterCatalog', {detail: {filter: true}});
                                    document.dispatchEvent(filterCatalogEvent);"
                            >В наличии</div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="container content">
                <div class="content__main">
                    <div class="catalog">
                        ${this.getProductCards(this.items)}
                    </div>
                    <div class="pages">
                        ${this.getPagesBlock()}
                    </div>
                </div>
                <div class="cart">
                    <div class="cart__items-list">
                        ${this.cartData.items ? this.getCartItems() : ''}
                    </div>
                    <div class="cart__total-price">
                        <div class="cart__total-price-header">Сумма заказа</div>
                        <div class="cart__total-price-amount"><span>${this.cartData.totalPrice}</span> руб.</div>
                    </div>
                    <button class="cart__order-button" type="button">Оформить заказ</button>
                </div>
            </div>`;
    }

    get html() {
        return this._html;
    }

    set html(value) {
        this._html = value;
    }

    getProductCards(items) {
        let cardsHtml = '';
        for (let item of items) {
            cardsHtml += this.getProductCard(item);
        }
        return cardsHtml;
    }

    getProductCard(item) {
        const count = this.cartData.items[item.id] ? this.cartData.items[item.id].count : 0;
        return `
            <div id="product_${item.id}" class="product">
                <img src="${item.image}" alt="" class="product__label">
                <div class="product__info">
                    <div class="product__left-col">
                        <div class="product__title">${item.title}</div>
                        <div class="product__price">${item.price} руб.</div>
                        <div class="product__desc">${item.descr}</div>
                    </div>
                    <div class="product__right-col">
                        <div class="product__avail">${item.available ? 'Есть в наличии' : 'Нет в наличии'}</div>
                        <button
                            class="product__add-button"
                            type = "button"
                            onclick="
                                const addProductEvent = new CustomEvent('addProduct', {detail: {itemId: ${item.id}}});
                                document.dispatchEvent(addProductEvent);"
                        >Добавить</button>
                        <div class="product__inCart ${count === 0 ? 'invisible': ''}">Добавлено: ${count} шт.</div>
                    </div>
                </div>
            </div>`;
    }

    getCartItems() {
        let itemsHtml = '';
        for (let itemId in this.cartData.items) {
            itemsHtml += View.getCartItem(itemId, this.cartData.items[itemId])
        }
        return itemsHtml
    }

    static getCartItem(itemId, itemData) {
        return `
            <div class="cart__item" id="cart-item_${itemId}">
                <img class="cart__item-label" src="${itemData.image}" alt="">
                <div class="cart__item-title">${itemData.title}</div>
                <div class="cart__item-count">x<span class="cart__count">${itemData.count}</span></div>
                <img
                    class="cart__item-delete-button"
                    src="./img/close_icon2.png"
                    alt=""
                    onclick="
                        const addProductEvent = new CustomEvent('deleteProduct', {detail: {itemId: ${itemId}}});
                        document.dispatchEvent(addProductEvent);"
                >
            </div>`
    }

    getPagesBlock() {
        return `
            <div class="pages__button ${this.page === 1 ? 'disabled' : ''}" id="first-page"
                onclick="
                    if (${this.page} !== 1) {
                        const changePageEvent = new CustomEvent('changePage', {detail: {page: 'first'}});
                        document.dispatchEvent(changePageEvent);
                    }"
            >1</div>
            <div class="pages__button ${this.page === 1 ? 'disabled' : ''}" id="prev-page"
                onclick="
                    if (${this.page} !== 1) {
                        const changePageEvent = new CustomEvent('changePage', {detail: {page: 'prev'}});
                        document.dispatchEvent(changePageEvent);
                    }"
            ><</div>
            <div class="pages__current-page">${this.page}</div>
            <div class="pages__button ${this.page === this.pagesCount ? 'disabled' : ''}" id="next-page"
                onclick="
                    if (${this.page} !== ${this.pagesCount}) {
                        const changePageEvent = new CustomEvent('changePage', {detail: {page: 'next'}});
                        document.dispatchEvent(changePageEvent);
                    }"
            >></div>
            <div class="pages__button ${this.page === this.pagesCount ? 'disabled' : ''}" id="last-page"
                onclick="
                    if (${this.page} !== ${this.pagesCount}) {
                        const changePageEvent = new CustomEvent('changePage', {detail: {page: 'last'}});
                        document.dispatchEvent(changePageEvent);
                    }"
            >${this.pagesCount}</div>`
    }

    static updateCatalogAfterAddInCart(itemId, count) {
        if (count > 0) {
            const inCartBlock = document.querySelector(`#product_${itemId} .product__inCart`);
            inCartBlock.innerText = `Добавлено: ${count} шт.`;
            inCartBlock.classList.remove('invisible');
        }
    }

    static updateCartAfterAddInCart(itemId, data) {
        const itemData = data.itemData;
        if (itemData.count === 1) {
            document.querySelector('.cart__items-list').innerHTML += View.getCartItem(itemId, itemData);
        } else if (itemData.count > 1) {
            const itemCountSpan = document.querySelector(`#cart-item_${itemId} .cart__count`);
            itemCountSpan.innerText = itemData.count;
        }
        document.querySelector('.cart__total-price-amount span').innerText = data.totalPrice;
    }

    static updateCartAfterDeleteItem(itemId, totalPrice) {
        const itemsList = document.querySelector('.cart__items-list');
        const itemBlock = document.querySelector(`#cart-item_${itemId}`);
        itemsList.removeChild(itemBlock);
        document.querySelector('.cart__total-price-amount span').innerText = totalPrice;
    }

    static updateCatalogAfterDeleteItem(itemId) {
        const inCartBlock = document.querySelector(`#product_${itemId} .product__inCart`);
        if (inCartBlock) {
            inCartBlock.classList.add('invisible');
        }
    }

    updatePagesBlock() {
        document.querySelector('.pages').innerHTML = this.getPagesBlock();
    }

    addClickAddBtnHandler(handler) {
        document.addEventListener('addProduct', (event) => {
            const itemId = event.detail.itemId;
            const data = handler(itemId);
            View.updateCatalogAfterAddInCart(itemId, data.itemData.count);
            View.updateCartAfterAddInCart(itemId, data);
        });
    }

    addClickDeleteBtnHandler(handler) {
        document.addEventListener('deleteProduct', (event) => {
            const itemId = event.detail.itemId;
            const totalPrice = handler(itemId);
            View.updateCatalogAfterDeleteItem(itemId);
            View.updateCartAfterDeleteItem(itemId, totalPrice);
        })
    }

    addClickSortBtnHandler(handler) {
        const self = this;
        document.addEventListener('sortCatalog', (event) => {
            const sortMethod = event.detail.sort;
            const data = handler(sortMethod);
            this.cartData = data.cartData;
            document.querySelector('.catalog').innerHTML = this.getProductCards(data.items);
            document.querySelector('.sort__button.active').classList.remove('active');
            switch (sortMethod) {
                case 'title':
                    document.querySelector('#sort__button-title').classList.add('active');
                    break;
                case 'price':
                    document.querySelector('#sort__button-price').classList.add('active');
                    break;
                default:
                    document.querySelector('#sort__button-default').classList.add('active');
            }
            self.page = 1;
            self.updatePagesBlock();
        })
    }

    addClickFilterBtnHandler(handler) {
        const self = this;
        document.addEventListener('filterCatalog', (event) => {
            const filterMethod = event.detail.filter;
            const data = handler(filterMethod);
            this.cartData = data.cartData;
            document.querySelector('.catalog').innerHTML = this.getProductCards(data.items);
            document.querySelector('.filter__button.active').classList.remove('active');
            if (filterMethod) {
                document.querySelector('#filter__button-avail').classList.add('active');
            } else {
                document.querySelector('#filter__button-all').classList.add('active');
            }
            self.page = 1;
            self.pagesCount = data.pagesCount;
            self.updatePagesBlock();
        })
    }

    addClickPageBtnHandler(handler) {
        const self = this;
        document.addEventListener('changePage', (event) => {
            const pageKey = event.detail.page;
            let page;
            let data;
            switch (pageKey) {
                case 'first':
                    page = 1;
                    break;
                case 'prev':
                    page = this.page - 1;
                    break;
                case 'next':
                    page = this.page + 1;
                    break;
                case 'last':
                    page = this.pagesCount;
            }
            this.page = page;
            data = handler(page);
            this.cartData = data.cartData;
            document.querySelector('.catalog').innerHTML = this.getProductCards(data.items);
            self.updatePagesBlock();
        })
    }

}