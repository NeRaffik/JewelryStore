function render(){
    const productsStore = LocalStorageUtil.getProducts();
    
    headerPage.render(productsStore.length);
    productsPage.render();

}

let CATALOG = [];

render();

fetch('server/launch.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
    })
    .catch(Error => {
        console.log(Error);
    });