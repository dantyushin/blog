# Fullstack Blog (Laravel + React + Docker)

Этот репозиторий содержит блог-платформу, реализованную с использованием:

- **Laravel** (SQLite) — Backend REST API
- **React + Vite** — Frontend SPA
- **Docker + Nginx** — для удобного развёртывания

## 📁 Структура проекта

```

/project
│
├── frontend/          # React + Vite SPA
│   └── nginx/         # Nginx config
│   └── Dockerfile
│
├── backend/           # Laravel backend
│   └── Dockerfile
│   └── .env
│   └── database/      # SQLite файл будет тут
│
├── nginx/             # Основной Nginx (API + frontend)
│   └── default.conf
│
└── docker-compose.yml

````

---

## 🚀 Запуск проекта

### 📦 Убедитесь, что у вас установлен Docker

#### 🔹 **Windows 10/11 (через WSL2)**

* Используйте WSL2 (например, дистрибутив **Debian**) с установленным **Docker Engine**
* Убедитесь, что Docker работает внутри WSL (проверка: `docker version`)
* Все команды запускайте **изнутри WSL** (а не в PowerShell или CMD)

#### 🔹 **Linux**

* Установите Docker и Docker Compose:

```bash
sudo apt update
sudo apt install docker.io docker-compose -y
sudo usermod -aG docker $USER
newgrp docker
```

* Проверьте установку:

```bash
docker --version
docker-compose --version
```

#### 🔹 **macOS**

* Установите [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* Убедитесь, что Docker доступен в терминале:

```bash
docker --version
docker-compose --version
```

### 2. 🔧 Клонируйте репозиторий

```bash
git clone https://github.com/dantyushin/blog.git
cd blog
````

### 3. ⚙️ Переменные окружения (Laravel)

Переименуйте `.env.example` в `.env` в директории `/blog/backend`:

```bash
cd backend/
mv .env.example .env
```

### 4. 🧱 Соберите и запустите контейнеры

```bash
cd ..
docker-compose up --build
```

> Первый запуск может занять несколько минут (билд фронта, установка vendor-пакетов и пр.)

---

## 🌐 Доступ к приложению

| Компонент | URL                                                            |
| --------- | -------------------------------------------------------------- |
| Frontend  | [http://localhost:8080](http://localhost:8080)                           |
| Backend   | [http://localhost:8000/api/articles](http://localhost:8000/api/articles) |
| SQLite DB | `/backend/database/database.sqlite`                            |

---

## 🛠 Полезные команды

```bash
# Остановить и удалить контейнеры
docker-compose down

# Перезапуск с пересборкой
docker-compose up --build

# Зайти в backend-контейнер
docker exec -it backend bash

# Миграции (внутри backend)
php artisan migrate
```
