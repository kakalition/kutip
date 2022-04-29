# Kutip
Quotes generator with simple typewriter effect.

## Libraries Used
1. Laravel with Laravel Fortify
2. ReactJS
3. TailwindCSS
4. Axios
5. Lodash

## Setup
Run in terminal: `./vendor/bin/sail artisan migrate:fresh --seed` to populate quotes in database.

### Notes
a. Modify authors and quotes
1. To modify authors, edit file in database/seeders/AuthorSeeder.php.
2. To modify quotes, edit file in database/seeders/QuoteSeeder.php.
3. Run same command in setup. (make sure author_id in QuoteSeeder.php correspond to correct author id in AuthorSeeder.php)

b. Or you can manually modify it using SQL queries.
