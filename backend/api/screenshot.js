import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export default async (req, res) => {
  const { url } = req.query;

  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.createPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    const screenshot = await page.screenshot({ type: 'png' });

    await browser.close();

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(screenshot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
