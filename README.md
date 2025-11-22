# Teste Técnico - 4Blue

Este projeto é uma aplicação Fullstack composta por um backend em **Django** e um frontend em **React (Vite + TypeScript)**.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Python](https://www.python.org/) (v3.10 ou superior)
- [Git](https://git-scm.com/)

---

## Instalação e Execução

É necessário abrir **dois terminais**: um para rodar o Backend e outro para o Frontend.

### 1. Backend (Django)

No terminal do backend, acesse a pasta do backend e configure o ambiente Python:

```bash
# 1. Entre na pasta do backend
cd backend

# 2. Crie o ambiente virtual (Apenas na primeira vez)
python -m venv venv

# 3. Ative o ambiente virtual
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# 4. Instale as dependências
pip install -r requirements.txt
# (Se o arquivo ainda não existir, use: pip install django)

# 5. Aplique as migrações do banco de dados
python manage.py migrate

# 6. Inicie o servidor
python manage.py runserver
```

### 2. Frontend (React + Vite)

No terminal do frontend, acesse a pasta do frontend e insstale as dependências:

```bash
# 1. Entre na pasta do frontend
cd frontend

# 2. Instale as dependências do Node
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```
