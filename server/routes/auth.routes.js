const { Router } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = Router();

router.post('/register', async (request, response) => {
  try {
    const { email, password } = request.body;

    const candidate = await User.findOne({ email });

    if (candidate) {
      return response.status(400).json({ message: 'User already exists' })
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({ email, password: hashedPassword });

    await user.save();
    response.status(201).json({ message: 'User created' });

  } catch (e) {
      response.status(500).json({ message: 'Something went wrong, please try again'});
  }
})

router.post('/login', async (request, response) => {

})

module.exports =  router;
