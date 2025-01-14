'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'SpotiSearch' });
  console.log('\x1b[33m', '[OK] Home page rendered');
});

module.exports = router;
