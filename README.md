# API de Catálogo Funko Pop - Game of Thrones

API RESTful desenvolvida com Node.js, Express, TypeScript, Sequelize (PostgreSQL) e documentação Swagger.

## Tecnologias

- Node.js + Express + TypeScript
- Sequelize ORM + PostgreSQL (Supabase)
- Swagger (swagger-ui-express + swagger-jsdoc)

## Instalação

1. Clone o repositório

2. Instale as dependências:
   pnpm install
3. Copie o arquivo `.env.example` para `.env` e preencha com suas credenciais do banco:
   cp .env.example .env
4. Rode o servidor em modo desenvolvimento:
   pnpm dev

5. Acesse a documentação interativa em:
   http://localhost:3000/api-docs

## Endpoints

| Método | Rota          | Descrição                       |
| ------ | ------------- | ------------------------------- |
| GET    | /recursos     | Lista todos os Funko Pops       |
| GET    | /recursos/:id | Busca um Funko Pop por ID       |
| POST   | /recursos     | Cria um novo Funko Pop          |
| PUT    | /recursos/:id | Atualiza um Funko Pop existente |
| DELETE | /recursos/:id | Remove um Funko Pop             |
