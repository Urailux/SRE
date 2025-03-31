---
id: Database
title: Database
sidebar_label: Database
description: PostgreSQL usage guide for the eLearning project
---

# 🛢 eLearning Database Guide (PostgreSQL)

This document explains how to connect to the PostgreSQL database used in the eLearning project, including common commands and troubleshooting tips.

---

## 1️⃣ Connecting via Linux CLI (psql)

### 🔐 Required Info

- **Host:** `db.example.com` (replace with actual)
- **Port:** `5432`
- **Username:** `elearning_user`
- **Password:** (ask SRE or check `.env`)
- **Database:** `elearning_db`

### 📥 Connect using `psql`

```bash
psql -h db.example.com -U elearning_user -d elearning_db -port 

---

## 4️⃣ Accessing PostgreSQL via pgAdmin

[pgAdmin](https://www.pgadmin.org/) is a popular GUI tool for managing PostgreSQL databases.

---

### 🖥️ Step-by-Step: Add New Server

1. **Open pgAdmin**  
   Launch the app from your desktop or browser if hosted on a server.

2. **Right-click** on "Servers" → **Create → Server...**

3. Go to the **General** tab:
   - **Name:** `eLearning DB`

4. Go to the **Connection** tab:
   - **Host name/address:** `db.example.com`
   - **Port:** `5432`
   - **Username:** `elearning_user`
   - **Password:** `********` (check your `.env` or ask SRE)
   - ✅ Tick **Save Password**

5. Click **Save** — you should now see your database listed.

---

### 📌 Things to Know

- You must be on VPN or allowlisted IP to access production DB
- The password will be saved in your pgAdmin profile
- If authentication fails, check:
  - Firewall / security group
  - Username/password
  - TLS/SSL setting (if enforced)


### 📎 How to List databases and tables in PostgreSQL using psql
[atlassian.com: List Databases & Tables](https://www.atlassian.com/data/admin/how-to-list-databases-and-tables-in-postgresql-using-psql)
