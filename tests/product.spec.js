import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/checkoutPage.js';
const { ProductPage } = require("../pages/productPage.js");
const { CartPage } = require("../pages/cartPage.js");

let page, context; // Global page and context instance

test.describe.serial('E2E Test Suite', () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext(); // Creates a single browser context for all tests
        page = await context.newPage(); // Single page instance for all tests
        await page.goto("https://www.saucedemo.com/");
        await page.locator('input[id="user-name"]').fill("standard_user");
        await page.locator('input[id="password"]').fill("secret_sauce");
        await page.locator("#login-button").click();
    });

    test.afterAll(async () => {
        await page.close(); // Close the page after all tests
        await context.close(); // Close the browser context
    });

    test.describe('Product Page Test', () => {
        test("Verify it is visited in correct URL.", async () => {
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        });

        test("Verify clicking the footer Twitter button redirects to Twitter and returns.", async () => {
            const productPage = new ProductPage(page);
            const [newPage] = await Promise.all([
                context.waitForEvent('page'), // Wait for a new tab to open
                productPage.productpagefootertwitterBtnAutomate()
            ]);

            await newPage.waitForLoadState();
            await expect(newPage).toHaveTitle("Sauce Labs (@saucelabs) / X");
            await newPage.close(); // Close new tab
            await page.bringToFront(); // Bring original page back
        });

        test("Verify clicking the footer Facebook button redirects to Facebook and returns.", async () => {
            const productPage = new ProductPage(page);
            const [newPage] = await Promise.all([
                context.waitForEvent('page'),
                productPage.productpagefooterfacebookBtnAutomate()
            ]);

            await newPage.waitForLoadState();
            await expect(newPage).toHaveTitle("Sauce Labs | Facebook");
            await newPage.close(); // Close new tab
            await page.bringToFront();
        });

        test("Verify clicking the footer LinkedIn button redirects to LinkedIn and returns.", async () => {
            const productPage = new ProductPage(page);
            const [newPage] = await Promise.all([
                context.waitForEvent('page'),
                productPage.productpagefooterlinkedinBtnAutomate()
            ]);

            await newPage.waitForLoadState();
            await expect(newPage).toHaveURL("https://www.linkedin.com/company/sauce-labs/");
            await newPage.close(); // Close new tab
            await page.bringToFront();
        });

        test("Verify Cart Page Sorting is working low to high", async () => {
            const productPage = new ProductPage(page);
            await productPage.productpagefilter();
            await expect(productPage.filterverification).toBeVisible();
        });

        test("Verify Hamburger Button is Working", async () => {
            const productPage = new ProductPage(page);
            await productPage.actionHamburger();
            await expect(productPage.hamburgerBtnVerification).toBeVisible();
        });

        test("Verify Add Product to cart", async () => {
            const productPage = new ProductPage(page);
            await productPage.productpageAutomate();
        });
    });

    test.describe('Cart Page Test', () => {
        test.beforeEach(async () => {
            await page.goto("https://www.saucedemo.com/cart.html"); // Navigate before each test
        });

        test("Verify it is visited in correct URL.", async () => {
            await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
        });

        test("Verify to remove a product and checkout the page", async () => {
            const cartPage = new CartPage(page);
            await cartPage.cartpageAutomate();
        });
    });


    test.describe('Checkout Page Test', () => {
        test.beforeEach(async () => {
            await page.goto("https://www.saucedemo.com/checkout-step-one.html"); // Navigate before each test
        });

        test("Verify it is visited in checkout URL.", async () => {
            await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
        });

        test("Verify to user cannot checkout the page without filling Information", async () => {
            const checkoutPage = new CheckoutPage(page);
            await checkoutPage.withoutinputActionAutomate();
            await expect(checkoutPage.validationMessage).toBeVisible("Error: First Name is required");
        });

        test("Verify to clicking cross button, the validation message is hidden.", async () => {
            const checkoutPage = new CheckoutPage(page);
            await checkoutPage.withoutinputActionAutomate();
            await checkoutPage.crossErrorBtnAutomate();
            await expect(checkoutPage.validationMessage).not.toBeVisible("Error: First Name is required");
        });

        test("Verify to checkout with correct Information", async () => {
            const checkoutPage = new CheckoutPage(page);
            await checkoutPage.inputActionAutomate();
            await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
        });

    });

});
