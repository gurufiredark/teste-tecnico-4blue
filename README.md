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

# 3. Ative o ambiente virtual (toda vez para executar o backend)
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# 4. Instale as dependências
pip install -r requirements.txt

# 5. Aplique as migrações do banco de dados (Cria o arquivo db.sqlite3)
#Para limpar o histórico exclua o arquivo 'db.sqlite3' e execute o comando abaixo novamente
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

Com certeza! Adicionar uma seção de "Dicas Úteis" e também as "Decisões Técnicas" (que é um requisito pedido no PDF do teste) vai deixar seu README.md muito mais profissional e completo.

Aqui está uma versão atualizada e robusta do seu arquivo. Ela inclui o que você já tinha, mais a explicação sobre como resetar o banco e uma breve explicação técnica.

Você pode copiar e colar este conteúdo no seu arquivo README.md:

Markdown

# Teste Técnico - 4Blue (Chatbot Simulado)

Este projeto é uma aplicação Fullstack composta por um backend em **Django** e um frontend em **React (Vite + TypeScript)**, desenvolvida como parte do teste técnico para a 4Blue.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Python](https://www.python.org/) (v3.10 ou superior)
- [Git](https://git-scm.com/)

---

## 🚀 Instalação e Execução

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

# 5. Aplique as migrações do banco de dados (Cria o arquivo db.sqlite3)
python manage.py migrate

# 6. Inicie o servidor (Rodará em [http://127.0.0.1:8000](http://127.0.0.1:8000))
python manage.py runserver
```

### 2. Frontend (React + Vite)

No terminal do frontend, acesse a pasta do frontend e instale as dependências:

```bash
# 1. Entre na pasta do frontend

cd frontend

# 2. Instale as dependências do Node
npm install

# 3. Inicie o servidor de desenvolvimento

npm run dev

```

# 🛠️ Decisões Técnicas

## Backend (Django)

Modelagem de Dados: Foi criada uma única model Message contendo campos para identificar o usuário (user A ou B), o conteúdo (message) e uma identificação booleana (is_response) para diferenciar mensagens enviadas pelo usuário das respostas automáticas do sistema.

Banco de Dados: Utilizado o SQLite padrão do Django pela simplicidade de configuração e portabilidade.

API: Endpoints REST simples (/api/chat/send e /api/chat/history/<user>) utilizando JsonResponse para comunicação leve com o frontend.

CORS: Configurado via django-cors-headers para permitir que o Frontend (porta 5173) se comunique com o Backend (porta 8000).

Frontend (React + TypeScript)
Gerenciamento de Estado: O estado do "Usuário Ativo" (activeUser) é gerenciado no componente pai (App.tsx) utilizando o hook useState. Esse estado é passado via props para as rotas filhas.

Roteamento: Utilizado react-router-dom para navegação. A rota / redireciona para /chat, e o acesso às telas é condicionado à seleção prévia de um usuário, garantindo uma experiência fluida.

Estilização: CSS puro modularizado por componente para manter a simplicidade e facilitar a manutenção.
