'use strict';

const express = require('express');

const dataModel = require('./item-model.js');

const routes = express.Router();

routes.get('/items', getAllItems);
routes.get('/items/:id', getOneItem);
routes.delete('/items/:id', deleteOneItem);
routes.put('/items/:id', updateOneItem);
routes.post('/items', addAnItem);

async function addAnItem(req,res,next) {
  try {
    const data = req.body;
    const item = new dataModel(data);
    await item.save();
    res.status(201).json(item);
  } catch(e) { next(e.message); }
}

async function getAllItems(req, res) {
  const items = await dataModel.find({});
  res.status(200).json(items);
}

async function getOneItem(req, res) {
  const id = req.params.id;
  const items = await dataModel.find({_id:id});
  res.status(200).json(items[0]);
}

async function deleteOneItem(req, res) {
  const id = req.params.id;
  await dataModel.findByIdAndDelete(id);
  res.status(204).send('Deleted');
}

async function updateOneItem(req, res) {
  const id = req.params.id;
  const data = req.body;
  const item = await dataModel.findByIdAndUpdate(id, data, {new:true, useFindAndModify:false});
  res.status(200).json(item);
}

module.exports = routes;
