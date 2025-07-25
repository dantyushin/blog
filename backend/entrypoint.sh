#!/bin/sh

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

php artisan key:generate
php artisan serve --host=0.0.0.0 --port=8000
