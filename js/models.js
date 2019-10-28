class CatalogModel {
    constructor(data) {
        this.data = data;
        this.filtered = false;
        this.sorted = null;
        this.pageSize = 15;
    }

    getData(page, resetKey) {
        let data;
        switch (resetKey) {
            case 'sort':
                this.sorted = null;
                if (this.filtered) {
                    data = this.getFilteredData(false);
                } else {
                    data = this.data;
                }
                break;
            case 'filter':
                this.filtered = false;
                if (this.sorted) {
                    data = this.getSortedData(this.sorted, false);
                } else {
                    data = this.data;
                }
                break;
            default:
                if (this.sorted) {
                    data = this.getSortedData(this.sorted, false);
                } else if (this.filtered) {
                    data = this.getFilteredData(false);
                } else {
                    data = this.data;
                }
        }
        return data.slice((page-1)*this.pageSize, (page-1)*this.pageSize + this.pageSize);
    }

    getSortedData(sortKey, firstPage) {
        // во избежание бесконечного цикла вызовов
        this.sorted = null;
        const data = this.filtered ? this.getFilteredData(false) : this.data;
        let sortedData = data.slice();
        let result;
        this.sorted = sortKey;
        switch(sortKey) {
            case 'title':
                sortedData.sort((item1, item2) => {
                    if (item1.title > item2.title) return 1;
                    if (item1.title < item2.title) return -1;
                });
                break;
            case 'price':
                sortedData.sort((item1, item2) => {
                    if (item1.price > item2.price) return 1;
                    if (item1.price < item2.price) return -1;
                });
                break;
        }
        result = firstPage ? sortedData.slice(0, 15) : sortedData;
        return result;
    }

    getFilteredData(firstPage) {
        const data = this.sorted ? this.getSortedData(this.sorted, false) : this.data;
        let tempData = data.slice();
        const filteredData = tempData.filter((item) => item.available);
        const result = firstPage ? filteredData.slice(0, 15) : filteredData;
        this.filtered = true;
        return result;
    }

    getPagesCount(data) {
        if (data === undefined) {
            return Math.ceil(this.data.length/this.pageSize);
        } else {
            return Math.ceil(data.length/this.pageSize);
        }
    }

    getItemById(itemId) {
        let itemData;
        for (let item of this.data) {
            if (item.id === itemId) {
                itemData = {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price
                }
            }
        }
        return itemData
    }

}

class CartModel {
    constructor() {
        this.getDataFromLS();
    }

    getData() {
        return {
            items: this.items,
            totalPrice: this.totalPrice,
        };
    }

    getDataFromLS() {
        const lsItems = localStorage.getItem('cartItems');
        const lsTotalPrice = localStorage.getItem('cartTotalPrice');
        this.items = lsItems ? JSON.parse(lsItems) : {};
        this.totalPrice = lsTotalPrice ? JSON.parse(lsTotalPrice) : 0;
    }

    setDataToLS() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
        localStorage.setItem('cartTotalPrice', JSON.stringify(this.totalPrice));
    }

    addItem(itemData) {
        this.getDataFromLS();
        if (this.items && this.items[itemData.id]) {
            this.items[itemData.id].count++;
        } else {
            this.items[itemData.id] = {
                title: itemData.title,
                image: itemData.image,
                price: itemData.price,
                count: 1
            }
        }
        this.totalPrice += itemData.price;
        this.setDataToLS();
        return {
            itemData: this.items[itemData.id],
            totalPrice: this.totalPrice
        };
    }

    deleteItem(itemId) {
        this.getDataFromLS();
        this.totalPrice -= this.items[itemId].price * this.items[itemId].count;
        delete this.items[itemId];
        this.setDataToLS();
        return this.totalPrice;
    }
}