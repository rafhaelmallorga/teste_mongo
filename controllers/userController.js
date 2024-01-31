import { User as UserModel } from '../models/User.js';

export class UserControler {
  static async create(req, res) {
    try {
      const { name, age, phone, cpf } = req.body;

      const user = {
        name,
        age,
        phone,
        cpf
      };

      const response = await UserModel.create(user);

      res.status(201).json({ response, msg: 'Criado com sucesso' });
    } catch (error) {
      console.log(error);
    }
  }
}
