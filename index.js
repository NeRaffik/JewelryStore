function render(){
    const productsStore = LocalStorageUtil.getProducts();
    
    headerPage.render(productsStore.length);
    productsPage.render();

}

spinnerPage.render();

let CATALOG = [];

//https://api.myjson.online/v1/records/d9537e83-d34f-44e2-9c27-85a0f8951740

fetch('server/launch.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        //setTimeout(() => {
			spinnerPage.handleClear();
		//	render();
		//}, 1000);

        render();
    })
    .catch(() => {
        spinnerPage.handleClear();
    	errorPage.render();
    });