const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(`User is on the {word}`, async (page) => {
    await browser.url(`${page}`);
});

When(`Promo banner appears close it`, async () => {
    try {
        const promoBannerCloseButton = await $('//button[@class="close"]');
        await promoBannerCloseButton.click();
    } catch {
        console.log("Banner is not seen");
    }
});

When(`User inputs {string} into the search bar`, async (phrase) => {
    const searchBar = await $('//input[@title="Search Site"]');
    await searchBar.addValue(phrase);
})

When(`User clicks search icon`, async () => {
    const searchIcon = await $('//button[@class="ico ico-search"]');
    await searchIcon.click();
})

When(`User opens Today's Best Deals tab`, async () => {
    const bestDealsTab = await $(`//*[@id="trendingBanner_720202"]`);
    await bestDealsTab.click();
})


When(`Users clicks page logo`, async () => {
    const pageLogo = await $(`//img[@alt="Newegg"]`);
    await pageLogo.click();
})

Then(`At least one item is available`, async () => {
    const itemsList = await $$('//div[@class="item-cell"]');
    await expect(itemsList).toBeElementsArrayOfSize({gte: 1});
});

Then(`User is on the main page back again`, async () => {
    const pageUrl = await browser.getUrl();
    await expect(pageUrl).toBe("https://www.newegg.com/");
})