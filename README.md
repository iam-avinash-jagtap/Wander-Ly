# 🌍 Wanderly — Premium Travel Booking Platform

**Wanderly** is a modern, production-ready **travel booking & inquiry platform** built for scalability, security, and cloud-native deployments.

It supports:

* 🧳 Real-time trip bookings
* 📩 Contact & inquiry management
* 📊 Admin dashboards (Bookings & Inquiries)
* 🐳 Fully Dockerized microservices
* ☁️ Cloud deployment on AWS

---

## 🧠 Tech Stack

### 🌐 Frontend

* **Next.js 14**
* **TypeScript**
* Modern Admin UI (tables, dashboards)

### ⚙️ Backend

* **Node.js**
* **Express.js**
* REST APIs (`/api/bookings`, `/api/inquiries`)

### 🗄️ Database

* **MongoDB**
* Persistent Docker volume

### 🚦 Reverse Proxy

* **Nginx**
* Single public entry (Port 80)

### 🐳 Containerization

* **Docker**
* **Docker Compose**
* Images hosted on **Docker Hub**

---

## 🧱 Architecture Overview

```
Internet
   |
   |  HTTP (Port 80)
   |
AWS EC2
   |
   ├── Nginx (Reverse Proxy)
   │      ├── /        → Frontend (Next.js)
   │      └── /api     → Backend (Express)
   |
   ├── Frontend Container
   ├── Backend Container
   └── MongoDB Container (Internal only)
```

---

## ☁️ Setup — AWS

### ✅ EC2 Requirements

* **OS**: Amazon Linux 2 / Amazon Linux 2023
* **Instance Type**: `t3.small` recommended
* **Storage**: 20 GB
* **Security Group**:

  * Port `22` → SSH
  * Port `80` → HTTP
  * ❌ Do NOT expose MongoDB

---

### 🔐 SSH into EC2 Instance

1️⃣ Download your EC2 key pair (`.pem` file)

2️⃣ From your local machine:

```bash
chmod 400 your-key.pem
```

3️⃣ Connect to EC2:

```bash
ssh -i your-key.pem ec2-user@<EC2_PUBLIC_IP>
```

You are now logged into the server 🎉

---

## 🧰 Installation (Required Tools)

After logging into EC2, install all required dependencies.

---

### 🔄 Update System Packages

```bash
sudo yum update -y
```

---

### 🐳 Install Docker

```bash
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ec2-user
```

Logout and login again for Docker permissions to apply.

---

### 🧩 Install Docker Compose

```bash
sudo curl -L https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 \
-o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
docker-compose version
```

---

### 🌱 Install Git

```bash
sudo yum install git -y
git --version
```

---

## 🚀 Quick Start (Production Deployment)

Once installation is complete and `docker-compose.yml` is present:

```bash
docker-compose pull
docker-compose up -d
```

That’s it ✅
Your application is live.

---

## 🧠 What `docker-compose.yml` Creates

When executed, Docker Compose automatically creates:

### 🔹 Containers

* `wanderly-frontend` → Next.js UI
* `wanderly-backend` → Express APIs
* `wanderly-mongodb` → Database
* `wanderly-nginx` → Reverse proxy

### 🔹 Network

* `wanderly-network`
* Secure internal container communication

### 🔹 Storage

* `wanderly-storage`
* Persistent MongoDB data

### 🔹 Security

* Only **Nginx (Port 80)** is public
* Backend & DB are internal

---

## 🌐 Application Access

| Feature         | URL                         |
| --------------- | --------------------------- |
| Website         | `http://<SERVER_PUBLIC_IP>` |
| Admin Bookings  | `/admin/bookings`           |
| Admin Inquiries | `/admin/inquiries`          |

---

## 🧪 Health Checks

```bash
docker ps
curl http://localhost
curl http://localhost/api/bookings
curl http://localhost/api/inquiries
```

---

## 🎯 Where Else Can This Project Be Used?

Wanderly is **cloud-agnostic** and production-ready.

---

## 🟣 Terraform (Infrastructure as Code)

### 🔹 Usage

* Provision EC2, Security Groups, Elastic IP
* Install Docker via user-data
* Deploy using Docker Compose

### 🔹 Flow

```text
Terraform → EC2 → Docker → docker-compose up
```

### 🔹 Benefit

* Reproducible infrastructure
* Version-controlled AWS resources

---

## 🟡 GitLab CI (CI/CD Pipeline)

### 🔹 Usage

* Build Docker images
* Push to Docker Hub
* Deploy automatically to EC2

### 🔹 Flow

```text
Git Push → GitLab CI → Docker Hub → EC2 Pull
```

### 🔹 Benefit

* Automated deployments
* Faster release cycles

---

## 🟢 Amazon EKS (Kubernetes)

### 🔹 Usage

* Convert images to Kubernetes Deployments
* Use Ingress (Nginx Controller)
* MongoDB via StatefulSet or managed DB

### 🔹 Flow

```text
Docker Images → EKS → Pods → Ingress → Users
```

### 🔹 Benefit

* Auto-scaling
* High availability
* Enterprise-grade orchestration

---

## 🔐 Production Best Practices

✅ Use HTTPS (Let’s Encrypt)<br>
✅ Use Elastic IP<br>
✅ Keep MongoDB internal<br>
✅ Use Docker Hub images<br>
✅ Enable backups<br>
✅ Use CI/CD pipelines<br>

---

## 🏁 Final Notes

Wanderly is:

* 🚀 Production-ready
* 🔐 Secure by design
* 🧩 Easily extendable
* 🏢 Enterprise-friendly

---

## 📝 License

This project is proprietary software.
All rights reserved.

---

**✨ Wanderly — built to scale by Avinash Jagtap.** <br> 
**⚡ Happy__Learning_ 🎯 Happy__Clouding_ ☁️ Jay__DevOps_** 😄

