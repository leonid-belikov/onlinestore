class StorePresenter {
    constructor(data) {
        let catalogData;
        let pagesCount;
        let cartData;
        this.catalogModel = new CatalogModel(data);
        this.cart = new CartModel(data);
        catalogData = this.catalogModel.getData(1, null);
        pagesCount = this.catalogModel.getPagesCount();
        cartData = this.cart.getData();
        this.view = new View(catalogData, pagesCount, cartData);

        this.view.addClickAddBtnHandler((itemId) => this.cart.addItem(this.catalogModel.getItemById(itemId)));
        this.view.addClickDeleteBtnHandler((itemId) => this.cart.deleteItem(itemId));
        this.view.addClickSortBtnHandler((sortKey) => {
            if (sortKey) {
                return {
                    items: this.catalogModel.getSortedData(sortKey, true),
                    cartData: this.cart.getData()
                };
            } else {
                return {
                    items: this.catalogModel.getData(1, 'sort'),
                    cartData: this.cart.getData()
                };
            }
        });
        this.view.addClickFilterBtnHandler((filterKey) => {
            if (filterKey) {
                return {
                    items: this.catalogModel.getFilteredData(true),
                    cartData: this.cart.getData(),
                    pagesCount: this.catalogModel.getPagesCount(this.catalogModel.getFilteredData(false))
                }
            } else {
                return {
                    items: this.catalogModel.getData(1, 'filter'),
                    cartData: this.cart.getData(),
                    pagesCount: this.catalogModel.getPagesCount()
                }
            }
        });
        this.view.addClickPageBtnHandler((page) => {
            return {
                items: this.catalogModel.getData(page, null),
                cartData: this.cart.getData()
            }
        });
    }
}