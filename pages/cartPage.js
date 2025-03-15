exports.CartPage = class CartPage{

    constructor(page) {
        this.page = page;
        this.removelabbackpackElement= page.locator("#remove-sauce-labs-backpack");
        this.checkoutElement = page.locator("#checkout");
       
    }




//Action on Elements

async cartpageAutomate(){
    await this.removelabbackpackElement.click();
    await this.checkoutElement.click();
}


}