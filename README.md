## inTrend App

## Used:
- React slick - a carousel component built with React.

themoviedb.org API Для бекенду використовуй themoviedb.org API. Використовувати
наступні ендпоінти.

/trending/get-trending список найпопулярніших фільмів на сьогодні для створення
колекції на головній сторінці. /search/search-movies пошук фільму за ключовим
словом на сторінці фільмів. /movies/get-movie-details запит повної інформації
про фільм для сторінки кінофільму. /movies/get-movie-credits запит інформації
про акторський склад для сторінки кінофільму. /movies/get-movie-reviews запит
оглядів для сторінки кінофільму.

Маршрути У застосунку повинні бути такі маршрути. Якщо користувач зайшов за
неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

'/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
'/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
'/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією
про кінофільм. /movies/:movieId/cast – компонент Cast, інформація про акторський
склад. Рендериться на сторінці MovieDetails. /movies/:movieId/reviews –
компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
Code Splitting (поділ коду) Додай асинхронне завантаження JS-коду для маршрутів
застосунку, використовуючи React.lazy() і Suspense.

npm install --save-dev prettier eslint (husky with automatic formatting) npx mrm
lint-staged
