# API de Catálogo Funko Pop - Game of Thrones

API RESTful para gerenciamento de um catálogo de Funko Pops da franquia Game of Thrones. Permite cadastrar, consultar, atualizar e remover itens da coleção (personagem, casa, número da coleção, preço e status de estoque).

## Tecnologias

- Node.js + Express + TypeScript
- Sequelize ORM + PostgreSQL (Supabase)
- Swagger (swagger-ui-express + swagger-jsdoc)

## Pré-requisitos

- Node.js
- pnpm
- Banco PostgreSQL (Supabase) com credenciais de acesso

## Instalação

1. Clone o repositório:

```bash
   git clone <url-do-repositorio>
   cd backend
```

2. Instale as dependências:

```bash
   pnpm install
```

3. Copie o arquivo `.env.example` para `.env` e preencha com as credenciais do banco:

```bash
   cp .env.example .env
```

4. Inicie o servidor em modo de desenvolvimento:

```bash
   pnpm dev
```

5. Acesse a documentação Swagger em: http://localhost:3000/api-docs

## Endpoints

| Método | Rota            | Descrição                       |
| ------ | --------------- | ------------------------------- |
| GET    | `/recursos`     | Lista todos os Funko Pops       |
| GET    | `/recursos/:id` | Busca um Funko Pop por ID       |
| POST   | `/recursos`     | Cria um novo Funko Pop          |
| PUT    | `/recursos/:id` | Atualiza um Funko Pop existente |
| DELETE | `/recursos/:id` | Remove um Funko Pop             |

## Como testar

No Swagger UI, use o botão **"Try it out"** em cada endpoint, seguindo esta ordem:

1. **POST /recursos**: crie um novo Funko Pop preenchendo o JSON de exemplo.
2. **GET /recursos**: liste todos os registros cadastrados.
3. **GET /recursos/{id}**: busque o registro criado usando o ID retornado no POST.
4. **PUT /recursos/{id}**: atualize os dados do registro.
5. **DELETE /recursos/{id}**: remova o registro.

### Verificando a persistência

Para confirmar que os dados foram salvos, acesse o painel do Supabase, abra **Table Editor** e selecione a tabela `funko_pops`. Os registros criados, atualizados e removidos devem refletir as operações feitas na API.