import { test, expect } from '@playwright/test';

test.describe('Тесты формы обратной связи на сайте Voxys', () => {
  const CONTACT_PAGE_URL = 'https://www.voxys.ru/contacts.html';
  
  test.beforeEach(async ({ page }) => {
    await page.goto(CONTACT_PAGE_URL);
  });

  // 1. Успешная отправка формы
  test('Успешная отправка формы с корректными данными', async ({ page }) => {
    // Заполняем все обязательные поля
    await page.selectOption('select[name="subject"]', '1'); // Выбираем тему обращения
    await page.fill('input[name="first-name"]', 'Иван Иванов');
    await page.fill('input[name="phone"]', '89991234567');
    await page.fill('input[name="email"]', 'ivan@example.com');
    await page.fill('textarea[name="msg"]', 'Тестовое сообщение');
    
    // Ставим галочки согласия
    await page.check('input[name="agree"]');
    await page.check('input[name="agree3"]');
    
    // Отправляем форму
    await page.click('form#feedbackform >> text=Отправить');
    
    // Проверяем успешную отправку
    await expect(page).toHaveURL(/feedback\.json/);
    await expect(page.locator('.success-message')).toBeVisible({ timeout: 10000 });
  });

  // 2. Проверка обязательных полей
  test('Ошибки при незаполненных обязательных полях', async ({ page }) => {
    await page.click('form#feedbackform >> text=Отправить');
    
    // Проверяем сообщения об ошибках для каждого обязательного поля
    await expect(page.locator('select[name="subject"] + .feedback__inline-error')).toHaveText('Пожалуйста, выберите тему обращения');
    await expect(page.locator('input[name="first-name"] + .feedback__inline-error')).toHaveText('Пожалуйста, заполните поле');
    await expect(page.locator('input[name="phone"] + .feedback__inline-error')).toHaveText('Пожалуйста, заполните поле');
    await expect(page.locator('input[name="email"] + .feedback__inline-error')).toHaveText('Пожалуйста, заполните поле');
    await expect(page.locator('textarea[name="msg"] + .feedback__inline-error')).toHaveText('Пожалуйста, заполните поле');
    await expect(page.locator('input[name="agree"] + .feedback__inline-error')).toBeVisible();
    await expect(page.locator('input[name="agree3"] + .feedback__inline-error')).toBeVisible();
  });

  // 3. Проверка валидации email
  test('Ошибки при невалидном email', async ({ page }) => {
    const invalidEmails = [
      'invalid',
      'invalid@',
      'invalid@example',
      'invalid@example.'
    ];

    for (const email of invalidEmails) {
      await page.fill('input[name="email"]', email);
      await page.click('form#feedbackform >> text=Отправить');
      await expect(page.locator('input[name="email"] + .feedback__inline-error')).toHaveText('Введите корректный email');
      await page.fill('input[name="email"]', '');
    }
  });

  // 4. Проверка валидации телефона
  test('Ошибки при невалидном номере телефона', async ({ page }) => {
    const invalidPhones = [
      '123',
      'abcdef',
      '8999123456',
      '+799912345678'
    ];

    for (const phone of invalidPhones) {
      await page.fill('input[name="phone"]', phone);
      await page.click('form#feedbackform >> text=Отправить');
      await expect(page.locator('input[name="phone"] + .feedback__inline-error')).toHaveText('Введите корректный номер');
      await page.fill('input[name="phone"]', '');
    }
  });

  // 5. Проверка опционального чекбокса рассылки
  test('Отправка формы без согласия на рассылку', async ({ page }) => {
    // Заполняем все обязательные поля
    await page.selectOption('select[name="subject"]', '1');
    await page.fill('input[name="first-name"]', 'Иван Иванов');
    await page.fill('input[name="phone"]', '89991234567');
    await page.fill('input[name="email"]', 'ivan@example.com');
    await page.fill('textarea[name="msg"]', 'Тестовое сообщение');
    
    // Ставим только обязательные галочки согласия
    await page.check('input[name="agree"]');
    await page.check('input[name="agree3"]');
    await page.uncheck('input[name="agree2"]'); // Убираем согласие на рассылку
    
    // Отправляем форму
    await page.click('form#feedbackform >> text=Отправить');
    
    // Проверяем успешную отправку
    await expect(page).toHaveURL(/feedback\.json/);
    await expect(page.locator('.success-message')).toBeVisible({ timeout: 10000 });
  });
});