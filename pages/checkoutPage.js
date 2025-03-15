exports.CheckoutPage = class CheckoutPage{

    constructor(page) {
        this.page = page;
        this.firstNameElement = page.locator("#first-name");
        this.lastNameElement = page.locator("#last-name");
        this.zipcodeElement = page.locator("#postal-code");
        this.submitBtnElement = page.locator("#continue");
        this.crossErrorBtn = page.locator('button[class="error-button"]');
        this.validationMessage = page.locator("//h3[normalize-space()='Error: First Name is required']");

    }

    async withoutinputActionAutomate(){
        
        await this.submitBtnElement.click();

    }

    async crossErrorBtnAutomate(){
        await this.crossErrorBtn.click();
    }

    

    async inputActionAutomate(){
        await this.firstNameElement.fill("Aditya");
        await this.lastNameElement.fill("Saha");
        await this.zipcodeElement.fill("7210");
        await this.submitBtnElement.click();

    }

}