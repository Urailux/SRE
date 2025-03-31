---
id: eLearning Project Deployment Guide
title: eLearning Project Deployment Guide
sidebar_label: eLearning Project Deployment Guide
description: Deployment & Docker usage guide for the eLearning project
---

# 📦 eLearning Project Deployment Guide

> This guide covers Docker usage, image handling, and deployment commands used by the SRE team for the eLearning project.

---

## 🧊 Docker Image Overview

The Docker image for the eLearning project is built from the source code using a `Dockerfile

---

## 🔍 Common Docker Commands
| Command | Description |
|--------|-------------|
| `docker ps` | List running containers |
| `docker ps -a` | List all containers (including stopped ones) |
| `docker images` | Show all local Docker images |
| `docker logs -f <container>` | Follow container logs in real time |
| `docker exec -it <container> /bin/bash` | Access container shell |
| `docker stop <container>` | Stop a running container |
| `docker start <container>` | Start a stopped container |
| `docker rm <container>` | Remove a stopped container |
| `docker rmi <image>` | Remove an unused image |
| `docker build -t <image-name> .` | Build an image from the Dockerfile |
| `docker run -d -p 3000:3000 --name <container> <image>` | Run a container in detached mode |
| `docker compose up -d` | Start containers using Docker Compose |
| `docker compose down` | Stop and remove Docker Compose containers |
| `docker system prune -f` | Clean up unused containers/images (⚠️ use with caution) |

> 💡 Replace `<container>` and `<image>` with actual names such as `elearning`, `elearning-app`.

---

## 🎯 Team Best Practices

- Use descriptive names for images and containers, e.g., `elearning-app:2024.03`
- Use `.env` files with `--env-file` to manage configs separately from code
- Use `docker-compose.yml` for multi-container setups

---