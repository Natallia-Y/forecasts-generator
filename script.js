const button = document.querySelector('.forecast-btn');
const list = document.querySelector('.forecasts');
const listTemplate = document.querySelector('#forecast-item');
const textForecast = document.querySelector('h1');
const percentForecast = document.querySelector('p');

function helper(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

button.addEventListener('click', function () {
    makeListByTemplate(textForecast.textContent, percentForecast.textContent);

    const predictionNumber = helper(1, 6);
    let predictionText = "";

    switch (predictionNumber) {
        case 1:
            predictionText = "Сегодня тебя ждет невероятное знакомство";
            break;
        case 2:
            predictionText = "По возвращению домой, тебя ждет вкусный ужин и подарок";
            break;
        case 3:
            predictionText = "На работе тебя ждет повышение";
            break;
        case 4:
            predictionText = "День обещает быть насыщенным на эмоции";
            break;
        case 5:
            predictionText = "Сегодня тебе позвонят и скажут ту новость, которую ты так ждешь";
            break;
    };

    textForecast.textContent = `${predictionText}`;

    const predictionPercent = helper(0, 100);

    percentForecast.textContent = `Вероятность: ${predictionPercent}%`;
});

function makeListByTemplate(textForecast, percentForecast) {
    if (!textForecast || !percentForecast) {
        return;
    }
    const myList = listTemplate.content.cloneNode(true);

    myList.querySelector('h3').textContent = textForecast;
    myList.querySelector('p').textContent = percentForecast;

    list.prepend(myList);
};

/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
