class Products{

    constructor(){
        this.classNameActive = 'products-element__btn_active';
        this.lableAdd = 'Добавить в корзину';
        this.lableRemove = 'Удалить из корзины';
    }
    
    handlSetLocationStorage(element, id){
        const { pushProduct, products } = LocalStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.lableRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.lableAdd;
        }

        headerPage.render(products.length);
    }

    render(){
        const productsStore = LocalStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id,productName,price,img}) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.lableAdd;
            } else {
                activeText = this.lableRemove;
                activeClass = ' ' + this.classNameActive;
            }

            htmlCatalog += `
              <li class="products-element">
                <span class="products-element__productName">${productName}</span>
                <img class="products-element__img" src = "${img}" />
                <span class="products-element__price">
                    ${price.toLocaleString()} ₽ 
                </span>
                <button class="products-element__btn${activeClass}" onclick="productsPage.handlSetLocationStorage(this,'${id}');">
                    ${activeText}
                </button>
              </li>  
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
//productsPage.render();