#!/bin/bash

if [ ! -f /var/www/database/database.sqlite ]; then
    touch /var/www/database/database.sqlite
    echo "✅ Created database.sqlite"
fi

if ! grep -q "^APP_KEY=" /var/www/.env || grep -q "APP_KEY=$" /var/www/.env; then
    php artisan key:generate
    echo "🔑 Generated APP_KEY"
fi

exec php artisan serve --host=0.0.0.0 --port=8000
