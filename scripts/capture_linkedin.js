/* eslint-disable */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,800']
    });
    const page = await browser.newPage();

    // Set viewport
    await page.setViewport({ width: 1280, height: 800 });

    console.log('Navigating to LinkedIn...');
    await page.goto('https://www.linkedin.com/company/balvia-properties/', { waitUntil: 'networkidle2' });

    // Handle potential login/signup modal
    try {
        console.log('Checking for modals...');
        const closeButton = await page.$('button[data-tracking-control-name="public_profile_contextual-sign-in-modal_modal_dismiss"]');
        if (closeButton) {
            console.log('Dismissing modal...');
            await closeButton.click();
            await new Promise(r => setTimeout(r, 1000));
        }
    } catch (e) {
        console.log('No modal found or error dismissing:', e.message);
    }

    // Scroll down to load posts
    console.log('Scrolling...');
    await page.evaluate(() => {
        window.scrollBy(0, 500);
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.evaluate(() => {
        window.scrollBy(0, 500);
    });
    await new Promise(r => setTimeout(r, 2000));

    // Take screenshots of the feed area
    // Since specific post selectors are hard to guess, we'll take a few viewport screenshots
    // and crop them manually or just use them as "feed previews".
    // Better: try to find the feed container.

    const outputDir = path.join(__dirname, '../public/images');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Taking screenshots...');

    // Screenshot 1: Top of feed
    await page.screenshot({ path: path.join(outputDir, 'linkedin-feed-1.png') });

    // Scroll a bit more
    await page.evaluate(() => {
        window.scrollBy(0, 600);
    });
    await new Promise(r => setTimeout(r, 1000));

    // Screenshot 2: Middle of feed
    await page.screenshot({ path: path.join(outputDir, 'linkedin-feed-2.png') });

    console.log('Done!');
    await browser.close();
})();
