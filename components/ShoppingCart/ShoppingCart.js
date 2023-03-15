class ShoppingCart{

    handlerClear(){
        productsPage.render();
        ROOT_SHOPPINGCART.innerHTML = '';
    }

    handlerSetLocatiomStorage(element,id){
        productsPage.handlSetLocationStorage(element,id);

        shoppingPage.render();
    }

    render(){
        const productsStore = LocalStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;


        CATALOG.forEach(({id,productName,price}) => {
            if(productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">${productName}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} ₽</td>
                        <td>
                            <button class="shopping-element__btn btn_select" onclick="shoppingPage.handlerSetLocatiomStorage(this,'${id}');">
                                Удалить из корзины
                            </button>
                        </td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">Сумма:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} ₽</td>
                    </tr>
                </table>
            </div>
        `;

        ROOT_SHOPPINGCART.innerHTML = html;
    }
}

const shoppingPage = new ShoppingCart();