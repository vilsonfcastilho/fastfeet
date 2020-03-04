import User from '../models/User';

class UserController {
  async index(req, res) {
    const user = await User.findAll();

    return res.json(user);
  }

  async update(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (!userExists) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    const user = await User.update(req.body);

    return res.json(user);
  }
}

export default new UserController();
