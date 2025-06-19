# 🧠 backend_reenbit_rainee_camp

Це бекендова частина чату з авто-відповідями на основі випадкових цитат з [Quotable API](https://api.quotable.io). Побудовано з використанням **Node.js**, **Express.js** та **MongoDB**.

## 📦 Технології

- Node.js
- Express.js
- MongoDB Atlas / локальна MongoDB
- Axios (для запиту до зовнішнього API)
- CORS
- dotenv
- nodemon

## 🚀 Швидкий старт

### 1. Клонування репозиторію

```bash

git clone https://github.com/your-username/chat-api-bot-backend.git

cd chat-api-bot-backend

```

### 2. Встановлення залежностей

```bash

npm install

```

### 3. Створення .env файлу

Створи файл `.env` у корені проєкту та додай:

```ini

PORT=3000

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/chatdb?retryWrites=true&w=majority

```

> Заміни `<username>` та `<password>` на свої дані з MongoDB Atlas або використай `mongodb://localhost:27017/chatdb` для локальної БД.

### 4. Запуск сервера

**Розробка:**

```bash

npm run dev

```

**Продакшн:**

```bash

npm start

```

