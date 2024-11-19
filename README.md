### Описание

В репозитории содержится базовый шаблон для выполнения тестового задания.

В шаблоне отображены: Переключатель пар, таймфреймов, темы, а также выделена область для отображения графика.

P.S.: Менять в шаблоне можно абсолютно все, по своему усмотрению

### Что нужно сделать:

1. **Клонировать репозиторий** к себе.
2. **Реализовать получение исторических данных по выбранной паре** через REST API Binance:

   - Настроить запрос к REST API Binance для получения данных по выбранной паре.
   - Обработать полученные данные и подготовить их для отображения на графике.

3. **Реализовать получение данных в реальном времени** по выбранной паре через WebSocket API Binance:

   - Настроить соединение с WebSocket API Binance.
   - Обработать входящие сообщения для отображения новых данных на графике.

4. **Вывести полученные данные на страницу** с использованием библиотеки TradingView Lightweight Charts:

   - Построить график в формате свечей (candlesticks), используя библиотеку.
   - Обеспечить обновление графика при поступлении новых данных в реальном времени.

5. **Залить в свой гитхаб** привязав второй remote в локальном репозитории

6. **Задеплоить рабочий код** на платформу для развертывания (например, GitHub Pages, Vercel или Netlify).

7. **Прислать ссылки** на:
   - Репозиторий с кодом.
   - Рабочую версию приложения.

### Полезные ссылки:

- [Документация Binance API](https://developers.binance.com/docs/derivatives/usds-margined-futures/general-info)
- [Документация TradingView Lightweight Charts](https://tradingview.github.io/lightweight-charts/docs)