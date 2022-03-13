const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://rac.canex.com.br');

  await page.waitForNavigation();

  await page.type('#logar_email', 'juliocesar@canex.com.br');
  await page.type('#logar_senha', 'julioac9');
  await page.click('[type="submit"]');

  await page.waitForNavigation();
  
  await page.goto('https://rac.canex.com.br/colaborador/edit.action?colaborador.id=46');

  await page.waitForSelector('#crud_form_colaborador_nome');

  let element = await page.$('#crud_form_colaborador_nome');
  let name = await element.evaluate(el => el.value, element);
  
  console.log(name);

  await browser.close();
})();
