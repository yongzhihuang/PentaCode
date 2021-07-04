const puppeteer = require('puppeteer');

async function getElText(page, selector) {
	return await page.evaluate((selector) => {
		return document.querySelector(selector).innerText
	}, selector);
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Write your code here

  const navigationPromise = page.waitForNavigation();
  await page.goto('https://www.youtube.com/watch?v=d9Pndaq9MJs');
  await page.waitForSelector('h1.title');

  await page.evaluate(_ => {
    window.scrollBy(0, window.innerHeight);
  });
  await page.waitFor(2000);
  await page.waitForSelector('#comments');
  await navigationPromise;


  const comments = [];
  for (let i = 1; i < 5; i++) {
    const authorSelector = `.style-scope:nth-child(${i}) > #comment > #body > #main > #header > #header-author > #author-text > .style-scope`;
    const commentSelector = `.style-scope:nth-child(${i}) > #comment > #body > #main > #expander #content-text`;
    await page.waitForSelector(commentSelector);
    await page.waitForSelector(authorSelector);
    const commentText = await getElText(page, commentSelector);
    const author = await getElText(page, authorSelector);

    if (commentText && author) {
      // write each comment to DB or file
      // or batch the for processing later
      console.log(`${author}: ${commentText}`);
      comments.push(commentText);
    }
  }

  // write to file, save to db, etc.
  await browser.close();
})()
