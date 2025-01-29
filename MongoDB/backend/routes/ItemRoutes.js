const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.post('/', async (req, res) => {
    const { name, description } = req.body;
    const newItem = new Item({ name, description });
    await newItem.save();
    res.json(newItem);
});

router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

router.put('/:id', async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
});

router.delete('/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
});

module.exports = router;
