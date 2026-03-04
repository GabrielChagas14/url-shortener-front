# 🔗 URL Shortener — Frontend

Interface web para encurtamento de URLs, construída com **React**, **Vite** e **TailwindCSS v4**. Consome uma API REST para gerar links curtos a partir de URLs longas.

## ✨ Funcionalidades

- Encurta qualquer URL via formulário simples
- Exibe o link encurtado com acesso direto (clicável)
- Feedback visual de sucesso após geração do link

## 🛠️ Tecnologias

| Tecnologia | Versão |
|---|---|
| React | 19 |
| Vite | 7 |
| TailwindCSS | 4 |
| ESLint | 9 |

## 📋 Pré-requisitos

- **Node.js** >= 18
- Backend da API rodando em `http://localhost:8080` (veja a seção de backend)

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/GabrielChagas14/url-shortener-front.git
cd url-shortener-front

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 🔌 Integração com o Backend

O frontend faz requisições para o endpoint abaixo:

```
POST http://localhost:8080/api/url/create
Content-Type: application/json

{ "originalUrl": "https://exemplo.com/url-muito-longa" }
```

**Resposta esperada:**
```json
{
  "shortUrl": "http://localhost:8080/abc123"
}
```

> Certifique-se de que o backend esteja rodando antes de utilizar a aplicação.

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── input.jsx     # Componente de campo de entrada
│   └── button.jsx    # Componente de botão de envio
├── App.jsx           # Componente principal com lógica de encurtamento
└── main.jsx          # Ponto de entrada da aplicação
```

## 📜 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o ESLint no projeto |
