exports.ProductPage = class ProductPage{

    constructor(page) {
        this.page = page;
        this.labbackpackElement= page.locator("#add-to-cart-sauce-labs-backpack");
        this.bikelightElement = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.cartElement = page.locator("a[class='shopping_cart_link']");
        this.filterbtn = page.locator('select[class="product_sort_container"]');
        this.filterverification = page.locator("//button[@id='add-to-cart-sauce-labs-onesie']");
        this.hamburgerbtn = page.locator("//button[@id='react-burger-menu-btn']");
        this.hamburgerBtnVerification = page.locator("//a[@id='reset_sidebar_link']");
        this.twitterBtn = page.locator('a[data-test="social-twitter"]');
        this.twitterBtn = page.locator('a[data-test="social-twitter"]');
        this.fbBtn = page.locator('a[data-test="social-facebook"]');
        this.LinkedinBtn = page.locator('li[class="social_linkedin"]');
       
    }




//Action on Elements
async productpagefootertwitterBtnAutomate(){
    await this.twitterBtn.click();

}

async productpagefooterfacebookBtnAutomate(){
    await this.fbBtn.click();

}

async productpagefooterlinkedinBtnAutomate(){
    await this.LinkedinBtn.click();
}

async productpagefilter(){
    await this.filterbtn.click();
    await this.filterbtn.selectOption("Price (low to high)");
}

async actionHamburger(){
    await this.hamburgerbtn.click();
}

async productpageAutomate(){
    await this.labbackpackElement.click();
    await this.bikelightElement.click();
    await this.cartElement.click();
}


}