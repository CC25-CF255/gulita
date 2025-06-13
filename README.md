
# 🩺 Gulita - Gula Lihat Tanda

**Gulita** (singkatan dari _Gula Lihat Tanda_) adalah sebuah aplikasi web cerdas yang membantu mendeteksi tanda-tanda diabetes melalui citra atau data visual yang dianalisis menggunakan model machine learning. Aplikasi ini menggabungkan kekuatan teknologi web dan AI untuk memberikan prediksi dini terhadap diabetes secara cepat dan mudah diakses oleh masyarakat.


## 📁 Project Structure

```
gulita/
│
├── backend/      # REST API dibangun dengan Hapi.js and PostgreSQL
├── frontend/     # Web UI menggunakan React, TypeScript, TailwindCSS, ShadCN
├── ml_service/   # Flask ML service endpoint
└── ml_model/     # TensorFlow model dan script training
```

## Installation

### 1. Clone Repository
```
git clone https://github.com/username/gulita.git
cd gulita
```
### 2. Setup Backend (Hapi.js)
```
cd backend
npm install
cp .env.example .env  # Configure your PostgreSQL and ML_SERVICE_URL
npm run dev
```
### 3. Setup Frontend (React)
```
cd frontend
npm install
npm run dev
```
### 4. Setup ML Service (Flask)
```
cd ml_service
pip install -r requirements.txt
python app.py
```
## 🔐 Environment Variables

backend/.env
```
PORT=YOUR_PORT
HOST=YOUR_HOST
BCRYPT_SALT_ROUNDS=

# PostgreSQL Connection
DB_USER=YOUR_DB_USER
DB_HOST=YOUR_DB_HOST
DB_NAME=YOUR_DB_NAME
DB_PASSWORD=YOUR_DB_PASSWORD
DB_PORT=YOUR_DB_PORT
DATABASE_URL=YOUR_DATABASE_URL

# Huggingface Connection
HUGGING_FACE_API_URL=YOUR_ML_URI

JWT_SECRET=YOUR_JWT-SECRET

```
frontend/.env
```
VITE_API_BASE_URL=YOUR_VITE_API_BASE_URL

```

## 📸 UI Preview

![App Screenshot](https://i.imgur.com/gETH2fX.png)
![App Screenshot](https://i.imgur.com/oj7JTzY.png)

👥 Team

- [Cindy Alya Putri](https://www.linkedin.com/in/cindy-alya-putri/)
- [Bella Priska Putri Aprillia](https://www.linkedin.com/in/bella-priska-putri-aprillia-05296627b/)
- [Putra Adimulya Wali Zhafran](https://www.linkedin.com/in/putra-adimulya-wali-zhafran-9a5a91279/)
- [Dwi Rizki Kurnia]()
- [Titan Apriliyan Nadine Ananta](https://www.linkedin.com/in/titan-apriliyan-73046623b/)
