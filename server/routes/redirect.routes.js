const { Router } = require('express');
const Link = require('../models/Link');
const router = Router();

router.get('/:code', async (request, response) => {
  try {

    const link = await Link.findOne({ code: request.params.code });

    if (link) {
      link.clicks += 1;
      await link.save();
      return response.redirect(link.from);
    }

    response.status(404).json('Link not found');

  } catch (e) {
    response.status(500).json({ message: 'Something went wrong, please try again'});
  }
})

module.exports = router;
