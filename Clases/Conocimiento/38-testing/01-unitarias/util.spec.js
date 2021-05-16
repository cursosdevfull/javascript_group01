const { generateText, checkAndGenerate } = require('./util');
const puppeteer = require('puppeteer');

describe('Utils', () => {
  it('Generate text success', () => {
    const value = generateText('Sergio', 30);

    expect(value).toBe('Sergio (30 years old)');
  });

  it('Generate a valid text output', () => {
    const value = checkAndGenerate('Sergio', 30);

    expect(value).toBe('Sergio (30 years old)');
  });

  it('Generate message in browser', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: ['--window-size=1920, 1080'],
    });

    const page = await browser.newPage();
    await page.goto(
      'D:/Cursos/javascript_group01/Clases/Conocimiento/38-testing/01-unitarias/index.html'
    );

    await page.click('input#name');
    await page.type('input#name', 'Sergio');
    await page.click('input#age');
    await page.type('input#age', '40');
    await page.click('#btnAddUser');
    const textGenerated = await page.$eval(
      '.user-item',
      (el) => el.textContent
    );
    expect(textGenerated).toBe('Sergio (40 years old)');
  }, 10000);
});
