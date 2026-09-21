
import { Request, Response } from 'express';
import { FunkoPop } from '../models/FunkoPop';

// GET /recursos - lista todos
export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const funkos = await FunkoPop.findAll();
    res.status(200).json(funkos);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar os Funko Pops.', erro: (error as Error).message });
  }
};

// GET /recursos/:id - busca por id
export const getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const funkoId = Number(id);

    if (!id || Array.isArray(id) || isNaN(funkoId)) {
      res.status(400).json({ mensagem: 'ID inválido.' });
      return;
    }

    const funko = await FunkoPop.findByPk(funkoId);

    if (!funko) {
      res.status(404).json({ mensagem: 'Funko Pop não encontrado.' });
      return;
    }

    res.status(200).json(funko);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar o Funko Pop.', erro: (error as Error).message });
  }
};

// POST /recursos - cria um novo
export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { personagem, casa, numeroColecao, preco, emEstoque } = req.body;

    if (!personagem || !casa || numeroColecao === undefined || preco === undefined) {
      res.status(400).json({
        mensagem: 'Campos obrigatórios ausentes: personagem, casa, numeroColecao e preco são obrigatórios.',
      });
      return;
    }

    const novoFunko = await FunkoPop.create({
      personagem,
      casa,
      numeroColecao,
      preco,
      emEstoque: emEstoque ?? true,
    });

    res.status(201).json(novoFunko);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar o Funko Pop.', erro: (error as Error).message });
  }
};

// PUT /recursos/:id - atualiza um existente
export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const funkoId = Number(id);

    if (!id || Array.isArray(id) || isNaN(funkoId)) {
      res.status(400).json({ mensagem: 'ID inválido.' });
      return;
    }

    const { personagem, casa, numeroColecao, preco, emEstoque } = req.body;

    const funko = await FunkoPop.findByPk(funkoId);

    if (!funko) {
      res.status(404).json({ mensagem: 'Funko Pop não encontrado.' });
      return;
    }

    await funko.update({ personagem, casa, numeroColecao, preco, emEstoque });

    res.status(200).json(funko);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar o Funko Pop.', erro: (error as Error).message });
  }
};

// DELETE /recursos/:id - remove um registro
export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const funkoId = Number(id);

    if (!id || Array.isArray(id) || isNaN(funkoId)) {
      res.status(400).json({ mensagem: 'ID inválido.' });
      return;
    }

    const funko = await FunkoPop.findByPk(funkoId);

    if (!funko) {
      res.status(404).json({ mensagem: 'Funko Pop não encontrado.' });
      return;
    }

    await funko.destroy();

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao remover o Funko Pop.', erro: (error as Error).message });
  }
};
