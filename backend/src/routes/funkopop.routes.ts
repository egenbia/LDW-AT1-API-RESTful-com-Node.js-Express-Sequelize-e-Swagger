import { Router } from 'express';
import { getAll, getById, create, update, remove } from '../controllers/funkopop.controller';

const router = Router();

/**
 * @swagger
 * /recursos:
 *   get:
 *     summary: Lista todos os Funko Pops cadastrados
 *     description: Retorna um array com todos os registros do catálogo.
 *     tags: [FunkoPop]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FunkoPop'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                 erro:
 *                   type: string
 *             example:
 *               mensagem: "Erro ao buscar os Funko Pops."
 *               erro: "Detalhe técnico do erro"
 */
router.get('/recursos', getAll);

/**
 * @swagger
 * /recursos/{id}:
 *   get:
 *     summary: Busca um Funko Pop pelo ID
 *     description: Retorna os dados detalhados de um único registro.
 *     tags: [FunkoPop]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Funko Pop
 *     responses:
 *       200:
 *         description: Registro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FunkoPop'
 *       400:
 *         description: ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *             example:
 *               mensagem: "ID inválido."
 *       404:
 *         description: Funko Pop não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *             example:
 *               mensagem: "Funko Pop não encontrado."
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                 erro:
 *                   type: string
 *             example:
 *               mensagem: "Erro ao buscar o Funko Pop."
 *               erro: "Detalhe técnico do erro"
 */
router.get('/recursos/:id', getById);

/**
 * @swagger
 * /recursos:
 *   post:
 *     summary: Cria um novo Funko Pop
 *     description: Cadastra um novo registro no catálogo.
 *     tags: [FunkoPop]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FunkoPopInput'
 *     responses:
 *       201:
 *         description: Registro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FunkoPop'
 *       400:
 *         description: Campos obrigatórios ausentes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *             example:
 *               mensagem: "Campos obrigatórios ausentes: personagem, casa, numeroColecao e preco são obrigatórios."
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                 erro:
 *                   type: string
 *             example:
 *               mensagem: "Erro ao criar o Funko Pop."
 *               erro: "Detalhe técnico do erro"
 */
router.post('/recursos', create);

/**
 * @swagger
 * /recursos/{id}:
 *   put:
 *     summary: Atualiza um Funko Pop existente
 *     description: Atualiza os dados de um registro já cadastrado.
 *     tags: [FunkoPop]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Funko Pop
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FunkoPopInput'
 *     responses:
 *       200:
 *         description: Registro atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FunkoPop'
 *       400:
 *         description: ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *             example:
 *               mensagem: "ID inválido."
 *       404:
 *         description: Funko Pop não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *             example:
 *               mensagem: "Funko Pop não encontrado."
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                 erro:
 *                   type: string
 *             example:
 *               mensagem: "Erro ao atualizar o Funko Pop."
 *               erro: "Detalhe técnico do erro"
 */
router.put('/recursos/:id', update);

/**
 * @swagger
 * /recursos/{id}:
 *   delete:
 *     summary: Remove um Funko Pop
 *     description: Remove um registro do catálogo pelo ID.
 *     tags: [FunkoPop]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Funko Pop
 *     responses:
 *       204:
 *         description: Registro removido com sucesso (sem conteúdo)
 *       400:
 *         description: ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *             example:
 *               mensagem: "ID inválido."
 *       404:
 *         description: Funko Pop não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *             example:
 *               mensagem: "Funko Pop não encontrado."
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                 erro:
 *                   type: string
 *             example:
 *               mensagem: "Erro ao remover o Funko Pop."
 *               erro: "Detalhe técnico do erro"
 */
router.delete('/recursos/:id', remove);

export default router;