const { getPersonajes, addPersonaje, editPersonaje, deletePersonaje } = require('../../controllers/PersonajeController');
const { mocked } = require('ts-jest/utils');
const { Response } = require('express');

jest.mock('../../controllers/PersonajeController', () => ({
  getPersonajes: jest.fn(),
  addPersonaje: jest.fn(),
  editPersonaje: jest.fn(),
  deletePersonaje: jest.fn()
}));

describe('API Tests', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  describe('addPersonaje', () => {
    it('should add a new personaje', async () => {
      req.body = { name: 'Personaje 1', season: 'Temporada 1', location: 'Ubicación 1', gun: 'Arma 1', file: { filename: 'imagen.jpg' } };
      await addPersonaje(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ status: true, messages: 'success' });
    });
  });

  describe('editPersonaje', () => {
    it('should edit an existing personaje', async () => {
      req.params = { id: 'id-del-personaje-a-editar' };
      req.body = { name: 'Personaje Editado', season: 'Temporada Editada', location: 'Ubicación Editada', gun: 'Arma Editada' };
      await editPersonaje(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ status: true, message: 'Personaje Actualizado' });
    });
  });

  describe('deletePersonaje', () => {
    it('should delete an existing personaje', async () => {
      req.params = { id: 'id-del-personaje-a-eliminar' };
      await deletePersonaje(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ status: true, message: 'Personaje Eliminado' });
    });
  });
});
