
# Wanderly – Premium Travel Booking Platform 🌍

**Wanderly** is a boutique, premium travel and experience booking platform built for modern explorers.
Designed with a strong focus on **UI/UX, performance, and scalability**, and deployed using **Docker on AWS EC2**.

---

## 🚀 Production Deployment on AWS EC2 (Docker)

This guide explains how to deploy Wanderly on an **EC2 instance running Amazon Linux** using Docker & Docker Compose.

---

## 🧱 Architecture Overview

```
Internet
   |
   | (HTTP / HTTPS)
   |
EC2 Instance (Amazon Linux)
   |
   ├── Nginx (Reverse Proxy)
   │      └── Port 80 / 443
   |
   ├── Frontend (Next.js)
   │      └── Port 3000 (internal)
   |
   ├── Backend (Express API)
   │      └── Port 5000 (internal)
   |
   └── MongoDB
          └── Port 27017 (internal only)
```

---

## 🔐 Required AWS Security Group Ports

Configure the **EC2 Security Group** with the following inbound rules:

| Port  | Protocol | Source         | Purpose                |
| ----- | -------- | -------------- | ---------------------- |
| 22    | TCP      | Your IP        | SSH Access             |
| 80    | TCP      | 0.0.0.0/0      | HTTP (Public Access)   |
| 443   | TCP      | 0.0.0.0/0      | HTTPS (Optional – SSL) |
| 3000  | TCP      | ❌ NOT REQUIRED | Internal (Docker only) |
| 5000  | TCP      | ❌ NOT REQUIRED | Internal (Docker only) |
| 27017 | TCP      | ❌ NOT REQUIRED | Internal DB            |

⚠️ **Do NOT expose ports 3000, 5000, or 27017 publicly in production.**

---

## 🖥️ EC2 Instance Requirements

* **OS**: Amazon Linux 2 / Amazon Linux 2023
* **Instance Type**: `t2.micro` (minimum) / `t3.small` recommended
* **Storage**: 20 GB minimum
* **Elastic IP**: Recommended

---

## ⚙️ EC2 Initial Setup (Amazon Linux)

```bash
# Connect to EC2
ssh -i your-key.pem ec2-user@<EC2_PUBLIC_IP>

# Update system
sudo yum update -y
```

### Install Docker

```bash
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ec2-user
logout
```

Login again for Docker group changes to apply.

### Install Docker Compose

```bash
sudo curl -L https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 \
-o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
docker-compose version
```

---

## 📦 Clone the Repository

```bash
git clone https://github.com/iam-avinash-jagtap/Wander-Ly
cd Wander-Ly
```

---

## 🐳 Docker-Based Deployment (Recommended)

### One Command Deployment

```bash
docker-compose up --build -d
```

---

## 🌐 Application Access (Production)

| Service     | URL                          |
| ----------- | ---------------------------- |
| Website     | `http://<EC2_PUBLIC_IP>`     |
| Backend API | `http://<EC2_PUBLIC_IP>/api` |
| MongoDB     | Internal (Docker Network)    |

If Nginx is configured:

* Frontend → Port **80**
* Backend → `/api` route

---

## 🔁 Docker Management Commands

```bash
# View running containers
docker-compose ps

# Logs
docker-compose logs -f

# Restart services
docker-compose restart

# Stop services
docker-compose down

# Remove everything including DB
docker-compose down -v
```

---

## 📁 Project Structure

```
wanderly/
├── docker-compose.yml
├── src/
│   ├── frontend/
│   │   ├── Dockerfile
│   │   └── ...
│   ├── backend/
│   │   ├── Dockerfile
│   │   └── server.js
│   └── nginx/
│       └── default.conf
└── README.md
```

---

## 🔧 Environment Variables (Production)

### Backend `.env`

```env
MONGO_URI=mongodb://mongodb:27017/wanderly
PORT=5000
NODE_ENV=production
```

### Frontend `.env.local`

```env
NEXT_PUBLIC_API_URL=/api
```

---

## 🌍 Nginx Reverse Proxy


This allows:

* Clean URLs
* Single public port (80)
* Better security

---

## 🔐 HTTPS

Use **Let’s Encrypt + Certbot**:

```bash
sudo yum install certbot -y
```

Then configure SSL for Nginx.

---

## 🚨 Production Best Practices

✅ Use **Elastic IP**
✅ Enable **HTTPS**
✅ Do NOT expose MongoDB
✅ Use `.env` files (never commit secrets)
✅ Enable EC2 backups / snapshots
✅ Use `docker-compose -d`

---

## 🧪 Health Checks

```bash
docker ps
curl http://localhost
curl http://localhost/api/health
```

---
Got it 👍
Here it is **cleanly formatted in proper Markdown**, ready to **paste directly into your `README.md`**:

---

## ✅ Acsess App 

After this setup, you access your website using:

```text
http://<EC2_PUBLIC_IP>
```

**NOT**

* ❌ `:3000`
* ❌ `:5000`
* ❌ `localhost`

✅ **Only port 80 is exposed via Nginx.**

---

## 🧭 HOW ACCESS WORKS (UNDER THE HOOD)

```text
Browser
  |
  |  http://EC2_PUBLIC_IP
  |
AWS Security Group (Port 80 allowed)
  |
Nginx container (Port 80)
  |
  ├── "/"     → frontend:3000 (Next.js)
  └── "/api"  → backend:5000 (Express)
```

---

### 🔁 Request Flow

* Frontend loads from `/`
* Backend API loads from `/api`
* MongoDB is **internal only**

---

## 🟢 STEP-BY-STEP: ACCESS YOUR WEBSITE

### 1️⃣ Get EC2 Public IP

From AWS Console:

```text
EC2 → Instances → Public IPv4 address
```

Example:

```text
3.110.xxx.xxx
```

---

### 2️⃣ Make sure containers are running

On your EC2 instance:

```bash
docker ps
```

You should see:

```text
nginx
frontend
backend
mongodb
```

If not running, start them:

```bash
docker-compose up -d
```

---

✅ **That’s it!**
Open your browser and visit:

```text
http://<EC2_PUBLIC_IP>
```

Your **Wanderly website should load successfully** 🚀

---

## 🎯 Features

✨ Premium UI / UX <br>
🌙 Dark Mode<br>
📱 Fully Responsive<br>
🎭 Framer Motion Animations<br>
🏔️ Destination Showcase<br>
💳 Booking Flow<br>
📧 WhatsApp & Contact Integration<br>
🐳 Dockerized & Cloud Ready<br>
⚡ Optimized Next.js Build<br>

---

## 📞 Support & Contact

**Wanderly Travel Platform**

📞 Phone: +91 88884 74060<br>
💬 WhatsApp: Chat with Guide

---

## 📝 License

This project is proprietary software.
All rights reserved.

---
