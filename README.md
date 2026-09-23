# API de Catálogo Funko Pop - Game of Thrones

API RESTful desenvolvida com Node.js, Express, TypeScript, Sequelize (PostgreSQL) e documentação Swagger para gerenciamento de um catálogo de Funko Pops da franquia Game of Thrones,
permitindo cadastrar, consultar, atualizar e remover itens da coleção
(personagem, casa, número da coleção, preço e status de estoque).

## Tecnologias

- Node.js + Express + TypeScript
- Sequelize ORM + PostgreSQL (Supabase)
- Swagger (swagger-ui-express + swagger-jsdoc)

## Instalação

1. Clone o repositório
2. pnpm install
3. Copie o arquivo `.env.example` para `.env` e preencha com suas credenciais do banco
4. pnpm dev
5. http://localhost:3000/api-docs

## Endpoints

| Método | Rota          | Descrição                       |
| ------ | ------------- | ------------------------------- |
| GET    | /recursos     | Lista todos os Funko Pops       |
| GET    | /recursos/:id | Busca um Funko Pop por ID       |
| POST   | /recursos     | Cria um novo Funko Pop          |
| PUT    | /recursos/:id | Atualiza um Funko Pop existente |
| DELETE | /recursos/:id | Remove um Funko Pop             |

Sim, boa ideia — deixa o processo documentado pra quem for avaliar/rodar o projeto depois. Adicione essa seção no `README.md`, depois da parte de "Instalação":

## Como Testar

1. Suba o servidor:

```markdown
cd backend

pnpm dev
```

2. Confirme no terminal que apareceu:

```

✅ Conexão com o banco de dados estabelecida com sucesso.
📦 Tabelas sincronizadas com o banco de dados.
🚀 Servidor rodando em http://localhost:3000
```

 3. Acesse a documentação interativa no navegador:

```

http://localhost:3000/api-docs
```

4. No Swagger UI, teste cada endpoint usando o botão **"Try it out"**:

```

- **POST /recursos** — crie um novo Funko Pop preenchendo o JSON de exemplo.
- **GET /recursos** — liste todos os registros cadastrados.
- **GET /recursos/{id}** — busque o registro criado pelo ID retornado no POST.
- **PUT /recursos/{id}** — atualize os dados do registro.
- **DELETE /recursos/{id}** — remova o registro.
```

5. Para confirmar a persistência, acesse o painel do Supabase → **Table Editor** → tabela `funko_pops`, e verifique que os dados criados/atualizados/removidos refletem corretamente.
