'use strict';

const ItemModel = require('./item-model.js');

const Data = { };

Data.addAnItem = async(req,res,next) => {
  try {
    const data = req.body;
    const item = new ItemModel(data);
    res.status(404).json(item);
  } catch(e) { next(e.message); }
}

Data.getAllItems = async(req, res) => {
  const items = await ItemModel.find({});
  res.status(200).json(items);
}

Data.getOneItem = async(req, res) => {
  const id = req.params.id;
  const items = await ItemModel.find({_id:id});
  res.status(200).json(items[0]);
}

Data.deleteOneItem = async(req, res) => {

}

Data.updateOneItem = async(req, res) => {
  const id = req.param.id;
  const data = req.body;
  const item = await ItemModel.findByIdAndUpdate(id, data, {new:true, useFindAndModify:false});
  res.status(200).json(item);
}

module.exports = Data;