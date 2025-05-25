# Test info

- Name: Тесты формы обратной связи на сайте Voxys >> Ошибки при невалидном номере телефона
- Location: C:\Users\adeli\Desktop\qa-internship-assignment-example\automation\tests\form.spec.ts:63:7

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.voxys.ru/contacts.html", waiting until "load"

    at C:\Users\adeli\Desktop\qa-internship-assignment-example\automation\tests\form.spec.ts:7:16
```

# Page snapshot

```yaml
- banner:
  - link:
    - /url: /
  - text: федеральный центр коммуникаций
  - link "Оставить заявку":
    - /url: /#feedbackForm
  - navigation:
    - link "+7 (495) 139-73-71":
      - /url: tel:74951397371
    - link "8 (800) 707-1000":
      - /url: tel:88007071000
    - paragraph: РУС
    - link "ENG":
      - /url: https://voxys.com/
    - list:
      - listitem:
        - link "Компания":
          - /url: /about.html
      - listitem:
        - link "Call-центр":
          - /url: /uslugi.html
      - listitem:
        - link "Рекрутинг":
          - /url: https://staff.voxys.ru/
      - listitem:
        - link "IT-продукты":
          - /url: "/cifrovye-reshenija.html "
      - listitem:
        - link "Новости":
          - /url: /news.html
      - listitem:
        - link "Twin":
          - /url: https://twin24.ai/
      - listitem:
        - link "Касание":
          - /url: https://kasanie-cc.ru/
      - listitem:
        - link "Карьера":
          - /url: /vacancy.html
      - listitem:
        - link "Контакты":
          - /url: /contacts.html
- main:
  - paragraph
  - heading "Контакты" [level=1]
  - paragraph: Нет дистанции между клиентом и бизнесом
  - paragraph:
    - text: ЦЕНТРАЛЬНЫЙ ОФИС / РОССИЯ
    - link "8 800 707 1000":
      - /url: tel:88007071000
  - paragraph: отдел продаж
  - text: "Почта:"
  - link "sales@voxys.ru":
    - /url: mailto:sales@voxys.ru
  - paragraph: Отдел по работе с тендерами
  - text: "Почта:"
  - link "tender@voxys.ru":
    - /url: mailto:tender@voxys.ru
  - paragraph: Отдел франчайзинга
  - text: "Почта:"
  - link "franchise@voxys.ru":
    - /url: mailto:franchise@voxys.ru
  - paragraph: Офис в Москве
  - text: "Адрес: 125167, Москва, ул. ул. Викторенко, 5, стр. 1 Телефон: 8 (800) 707-10-00"
  - paragraph: лаборатория воксис
  - text: "Адрес: Калининград, ул. Фрунзе, 6В Электронная почта: info@voxyslab.ru Сайт:"
  - link "voxyslab.ru":
    - /url: https://voxyslab.ru/
  - paragraph: Юридическая информация
  - paragraph: Общество с ограниченной ответственностью «Воксис».
  - paragraph: ИНН 6674223607 / ОГРН 1076674015549
  - text: "Юридический адрес: 620075, Свердловская область, г. Екатеринбург, ул. Розы Люксембург, стр. 19, 4 этаж. Генеральный директор:"
  - paragraph: Стецюк Алексей Юрьевич
  - paragraph: Центры коммуникаций
  - list:
    - listitem: Алагир Ардон Ачинск Барнаул Беслан Борисоглебск Брянск Бугуруслан Владикавказ Владимир Волгоград Вологда Воронеж Гай Грозный Грязи Дебесы Дигора Екатеринбург Елец Заводской Йошкар-Ола Калининград Калуга Клинцы Краснодар Кумертау Курган Курск Куртамыш Лебедянь Липецк Лиски Луганск Медногорск Михайловск Москва Назрань Нальчик Нижний Новгород Нижний Тагил Новая Ляля Новоорск Новотроицк Новочеркасск Октябрьский Отрадный Омск Орел Оренбург Орск Отрадный Пенза Петрозаводск Ростов-на-Дону Рузаевка Саранск Северск Симферополь Скопин Сорочинск Ставрополь Старый Оскол Таганрог Турочак Ульяновск Уфа Чебоксары Челябинск Чикола Шадринск Шуйское Элиста Эльхотово Якутск и города в СНГ
  - link "Подробнее":
    - /url: "#contacts-addresses"
  - paragraph
  - text: 100+ центров коммуникаций в России 200+ городов с сотрудниками, работающими дистанционно "Воксис" - федеральный центр коммуникаций
  - paragraph: Общие цели - общий результат
  - link "Партнёрам":
    - /url: /about.html
  - paragraph: Ты сможешь. мы поможем.
  - link "Карьера у нас":
    - /url: /vacancy.html
  - paragraph: Напишите нам
  - paragraph:
    - text: или позвоните по номеру
    - link "8 800 707 1000":
      - /url: tel:88007071000
  - combobox:
    - option "Заказать услугу"
    - option "Работа у нас"
    - option "Заявка на франшизу"
  - textbox "Имя"
  - textbox "Номер телефона"
  - textbox "Email"
  - textbox "Сообщение"
  - checkbox "Я согласен с политикой конфиденциальности и использования запрашиваемых данных"
  - link "Я согласен с политикой конфиденциальности и использования запрашиваемых данных":
    - /url: /privacy.html
  - checkbox "Согласен на обработку персональных данных"
  - link "Согласен на обработку персональных данных":
    - /url: /consent.html
  - checkbox "Согласен на рекламные рассылки" [checked]
  - text: Согласен на рекламные рассылки
  - iframe
  - button "Отправить" [disabled]
  - paragraph: 100+ контактных-центров
  - link "Контакты офисов":
    - /url: /contacts.html
- contentinfo:
  - navigation:
    - link "Компания":
      - /url: /about.html
    - list:
      - listitem:
        - link "О нас":
          - /url: /about.html
      - listitem:
        - link "Закупки":
          - /url: /zakupki.html
      - listitem:
        - link "ИТ-деятельность":
          - /url: /itdejatelnost.html
      - listitem:
        - link "Партнерство":
          - /url: /partnerstvo.html
      - listitem:
        - link "История":
          - /url: /history.html
      - listitem:
        - link "Миссия и ценности":
          - /url: /mission.html
      - listitem:
        - link "Социальная ответственность":
          - /url: /socotvetstvennost.html
      - listitem:
        - link "Безопасность":
          - /url: /bezopasnost.html
      - listitem:
        - link "Инвесторам":
          - /url: /investors.html
      - listitem:
        - link "Политика по персональным данным":
          - /url: /privacy.html
    - link "Карьера":
      - /url: /vacancy.html
    - list:
      - listitem:
        - link "Вакансии":
          - /url: /vacancy.html
      - listitem:
        - link "Корпоративная жизнь":
          - /url: /corplive.html
      - listitem:
        - link "Начало карьеры":
          - /url: /start.html
    - link "Новости":
      - /url: /news.html
    - list:
      - listitem:
        - link "Новости компании":
          - /url: /news.html
      - listitem:
        - link "Публикации СМИ":
          - /url: /smi.html
      - listitem:
        - link "Кейсы":
          - /url: /case.html
      - listitem:
        - link "Пресс-релизы":
          - /url: /press.html
      - listitem:
        - link "Медиабанк":
          - /url: /mediabank.html
      - listitem:
        - link "Наша команда":
          - /url: /ourteam.html
      - listitem:
        - link "Контакты для СМИ":
          - /url: /smi-contacts.html
      - listitem:
        - link "Блог":
          - /url: /blog.html
    - link "Call-центр":
      - /url: /uslugi.html
    - list:
      - listitem:
        - link "Обработка входящих вызовов":
          - /url: /uslugi/vhodyashchie-zvonki.html
      - listitem:
        - link "Обзвон клиентов":
          - /url: /uslugi/obzvon-klientov.html
      - listitem:
        - link "Организация колл-центра":
          - /url: /uslugi/organizatciya-call-centra.html
      - listitem:
        - link "Неголосовой контакт-центр":
          - /url: /uslugi/negolosovoy-kontakt-tsentr.html
      - listitem:
        - link "Наши IT решения":
          - /url: https://voxys.digital
      - listitem:
        - link "IT-лаборатория":
          - /url: https://voxyslab.ru/
    - link "IT продукты":
      - /url: /cifrovye-reshenija.html
    - list:
      - listitem:
        - link "Заказная разработка решений":
          - /url: /cifrovye-reshenija/zakaznaja-razrabotka-reshenij.html
      - listitem:
        - link "Омниканальная платформа OMNIVOX":
          - /url: /cifrovye-reshenija/omnikanalnaja-platforma-omnivox.html
      - listitem:
        - link "Автообзвон клиентов":
          - /url: /cifrovye-reshenija/avtoobzvon-robotom.html
      - listitem:
        - link "Автоматизация колл-центра":
          - /url: /cifrovye-reshenija/avtomatizacija-call-centra.html
      - listitem:
        - link "Контроль качества звонков":
          - /url: /cifrovye-reshenija/kontrol-kachestva-zvonkov.html
      - listitem:
        - link "Конструктор голосовых роботов":
          - /url: /cifrovye-reshenija/konstruktor-golosovyh-robotov.html
      - listitem:
        - link "Чат-платформа для бизнеса":
          - /url: /cifrovye-reshenija/chat-platform.html
      - listitem:
        - link "Речевая аналитика":
          - /url: /cifrovye-reshenija/rechevaja-analitika.html
      - listitem:
        - link "Чат-боты":
          - /url: /cifrovye-reshenija/chat-bot.html
      - listitem:
        - link "Голосовые роботы":
          - /url: /cifrovye-reshenija/golosovye-roboty.html
      - listitem:
        - link "Бот-суфлёр":
          - /url: /cifrovye-reshenija/bot-sufljor.html
      - listitem:
        - link "WFM":
          - /url: /cifrovye-reshenija/wfm.html
      - listitem:
        - link "Информационная панель":
          - /url: /cifrovye-reshenija/informacionnaja-panel.html
      - listitem:
        - link "Система управления знаниями":
          - /url: /cifrovye-reshenija/sistema-upravlenija-znanijami.html
      - listitem:
        - link "A-ZONE":
          - /url: /cifrovye-reshenija/a-zone.html
      - listitem:
        - link "QMT":
          - /url: /cifrovye-reshenija/qmt.html
      - listitem:
        - link "Screen Script":
          - /url: /cifrovye-reshenija/screen-script.html
      - listitem:
        - link "V-rec":
          - /url: /cifrovye-reshenija/v-rec.html
      - listitem:
        - link "Smart Logger":
          - /url: /cifrovye-reshenija/smart-logger.html
      - listitem:
        - link "Voice Navigator":
          - /url: /cifrovye-reshenija/voice-navigator.html
      - listitem:
        - link "Система обучения и оценки персонала":
          - /url: /cifrovye-reshenija/sistema-obuchenija-i-ocenki-personala.html
    - link "Решения":
      - /url: /otraslevye-resheniya.html
    - list:
      - listitem:
        - link "Банки":
          - /url: /otraslevye-resheniya/call-centr-dlya-bankov.html
      - listitem:
        - link "Страховые компании":
          - /url: /otraslevye-resheniya/call-centr-dlya-strahovoy-kompanii.html
      - listitem:
        - link "Интернет-магазины":
          - /url: /otraslevye-resheniya/call-centr-dlya-internet-magazina.html
      - listitem:
        - link "Транспортные и логистические компании":
          - /url: /otraslevye-resheniya/call-centr-dlya-transportnykh-kompaniy.html
      - listitem:
        - link "Туристические компании":
          - /url: /otraslevye-resheniya/call-centr-dlya-turisticheskih-companiy.html
      - listitem:
        - link "Телеком и медиасервисы":
          - /url: /otraslevye-resheniya/call-centr-dlya-proizvoditeley-elektrotehniki-i-po.html
      - listitem:
        - link "Ритейл (FMCG)":
          - /url: /otraslevye-resheniya/call-centr-dlya-riteyla.html
      - listitem:
        - link "Автосалоны":
          - /url: /otraslevye-resheniya/call-centr-dlya-avtosalonov.html
      - listitem:
        - link "IT компании":
          - /url: /otraslevye-resheniya/call-centr-dlya-it-kompaniy.html
      - listitem:
        - link "Медицинские центры":
          - /url: /otraslevye-resheniya/call-centr-dlya-mediciny.html
      - listitem:
        - link "Государственные учреждения":
          - /url: /otraslevye-resheniya/call-centr-dlya-gosudarstvennyh-uchrezhdeniy.html
      - listitem:
        - link "Недвижимость":
          - /url: /otraslevye-resheniya/call-centr-dlya-agentstva-nedvizhimosti.html
      - listitem:
        - link "Промышленные предприятия":
          - /url: /otraslevye-resheniya/call-centr-dlya-promyshlennyh-predpriyatiy.html
      - listitem:
        - link "Общественное питание":
          - /url: /otraslevye-resheniya/call-centr-dlya-horeca.html
    - link "Каналы коммуникации":
      - /url: /connect.html
    - list:
      - listitem:
        - link "Входящие звонки":
          - /url: /connect/vhodjaschie-zvonki.html
      - listitem:
        - link "Исходящие звонки":
          - /url: /connect/ishodjaschie-zvonki.html
      - listitem:
        - link "Чаты":
          - /url: /connect/chaty.html
  - paragraph:
    - text: © ООО «Вокcис» ИНН 6674223607
    - link "Раскрытие информации ООО \"Воксис\" на сайте агентства Интерфакс":
      - /url: https://www.e-disclosure.ru/portal/company.aspx?id=39253
    - link "Перечень инсайдерской информации ООО \"Воксис\"":
      - /url: /img/Doki/Perecen_ins_inf_OOO_Voksis.docx
  - paragraph: "Мы в социальных сетях:"
  - link:
    - /url: https://vk.com/voxys_team
    - img: .f__soc-list
  - link:
    - /url: https://ok.ru/group/55521990672392
    - img
  - link:
    - /url: https://t.me/voxysnews
    - img
- text: × На нашем сайте мы используем cookie для сбора информации технического характера. В частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего местоположения. Совершая любые действия на сайте, вы
- link "соглашаетесь с политикой обработки персональных данных":
  - /url: /privacy.html
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test.describe('Тесты формы обратной связи на сайте Voxys', () => {
   4 |   const CONTACT_PAGE_URL = 'https://www.voxys.ru/contacts.html';
   5 |   
   6 |   test.beforeEach(async ({ page }) => {
>  7 |     await page.goto(CONTACT_PAGE_URL);
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
   8 |   });
   9 |
   10 |   // 1. Успешная отправка формы
   11 |   test('Успешная отправка формы с корректными данными', async ({ page }) => {
   12 |     // Заполняем все обязательные поля
   13 |     await page.selectOption('select[name="subject"]', '1'); // Выбираем тему обращения
   14 |     await page.fill('input[name="first-name"]', 'Иван Иванов');
   15 |     await page.fill('input[name="phone"]', '89991234567');
   16 |     await page.fill('input[name="email"]', 'ivan@example.com');
   17 |     await page.fill('textarea[name="msg"]', 'Тестовое сообщение');
   18 |     
   19 |     // Ставим галочки согласия
   20 |     await page.check('input[name="agree"]');
   21 |     await page.check('input[name="agree3"]');
   22 |     
   23 |     // Отправляем форму
   24 |     await page.click('form#feedbackform >> text=Отправить');
   25 |     
   26 |     // Проверяем успешную отправку
   27 |     await expect(page).toHaveURL(/feedback\.json/);
   28 |     await expect(page.locator('.success-message')).toBeVisible({ timeout: 10000 });
   29 |   });
   30 |
   31 |   // 2. Проверка обязательных полей
   32 |   test('Ошибки при незаполненных обязательных полях', async ({ page }) => {
   33 |     await page.click('form#feedbackform >> text=Отправить');
   34 |     
   35 |     // Проверяем сообщения об ошибках для каждого обязательного поля
   36 |     await expect(page.locator('select[name="subject"] + .feedback__inline-error')).toHaveText('Пожалуйста, выберите тему обращения');
   37 |     await expect(page.locator('input[name="first-name"] + .feedback__inline-error')).toHaveText('Пожалуйста, заполните поле');
   38 |     await expect(page.locator('input[name="phone"] + .feedback__inline-error')).toHaveText('Пожалуйста, заполните поле');
   39 |     await expect(page.locator('input[name="email"] + .feedback__inline-error')).toHaveText('Пожалуйста, заполните поле');
   40 |     await expect(page.locator('textarea[name="msg"] + .feedback__inline-error')).toHaveText('Пожалуйста, заполните поле');
   41 |     await expect(page.locator('input[name="agree"] + .feedback__inline-error')).toBeVisible();
   42 |     await expect(page.locator('input[name="agree3"] + .feedback__inline-error')).toBeVisible();
   43 |   });
   44 |
   45 |   // 3. Проверка валидации email
   46 |   test('Ошибки при невалидном email', async ({ page }) => {
   47 |     const invalidEmails = [
   48 |       'invalid',
   49 |       'invalid@',
   50 |       'invalid@example',
   51 |       'invalid@example.'
   52 |     ];
   53 |
   54 |     for (const email of invalidEmails) {
   55 |       await page.fill('input[name="email"]', email);
   56 |       await page.click('form#feedbackform >> text=Отправить');
   57 |       await expect(page.locator('input[name="email"] + .feedback__inline-error')).toHaveText('Введите корректный email');
   58 |       await page.fill('input[name="email"]', '');
   59 |     }
   60 |   });
   61 |
   62 |   // 4. Проверка валидации телефона
   63 |   test('Ошибки при невалидном номере телефона', async ({ page }) => {
   64 |     const invalidPhones = [
   65 |       '123',
   66 |       'abcdef',
   67 |       '8999123456',
   68 |       '+799912345678'
   69 |     ];
   70 |
   71 |     for (const phone of invalidPhones) {
   72 |       await page.fill('input[name="phone"]', phone);
   73 |       await page.click('form#feedbackform >> text=Отправить');
   74 |       await expect(page.locator('input[name="phone"] + .feedback__inline-error')).toHaveText('Введите корректный номер');
   75 |       await page.fill('input[name="phone"]', '');
   76 |     }
   77 |   });
   78 |
   79 |   // 5. Проверка опционального чекбокса рассылки
   80 |   test('Отправка формы без согласия на рассылку', async ({ page }) => {
   81 |     // Заполняем все обязательные поля
   82 |     await page.selectOption('select[name="subject"]', '1');
   83 |     await page.fill('input[name="first-name"]', 'Иван Иванов');
   84 |     await page.fill('input[name="phone"]', '89991234567');
   85 |     await page.fill('input[name="email"]', 'ivan@example.com');
   86 |     await page.fill('textarea[name="msg"]', 'Тестовое сообщение');
   87 |     
   88 |     // Ставим только обязательные галочки согласия
   89 |     await page.check('input[name="agree"]');
   90 |     await page.check('input[name="agree3"]');
   91 |     await page.uncheck('input[name="agree2"]'); // Убираем согласие на рассылку
   92 |     
   93 |     // Отправляем форму
   94 |     await page.click('form#feedbackform >> text=Отправить');
   95 |     
   96 |     // Проверяем успешную отправку
   97 |     await expect(page).toHaveURL(/feedback\.json/);
   98 |     await expect(page.locator('.success-message')).toBeVisible({ timeout: 10000 });
   99 |   });
  100 | });
```