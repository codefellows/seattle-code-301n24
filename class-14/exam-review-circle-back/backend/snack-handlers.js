const SnackHandlers = {};
const SnackModel = require('./models/snack-model');

SnackHandlers.create = async (request, response) => {
  try {
    // const { name, description } = request.body;
    const newSnack = await SnackModel.create(request.body);
    response.status(200).send(newSnack);
  } catch(error) {
    response.status(404).send('sorry pantry is empty');
  }
}

SnackHandlers.getAll = async (request, response) => {
  try {
    const snacks = await SnackModel.find({});
    response.status(200).json(snacks);
  } catch(error) {
    response.status(500).send('there are no snacks in the pantry for you');
  }
}

SnackHandlers.getOne = async (request, response) => {
  try {
    const snack = await SnackModel.findById(request.params.id);
    response.status(200).json(snack);
  } catch(error) {
    response.status(500).send('Sorry, Jacob ate your chips');
  }
}

SnackHandlers.delete = async (request, response) => {
  try {
    await SnackModel.findByIdAndDelete(request.params.id);
    response.status(200).json('this snack has been eaten!');
  } catch(error) {
    response.status(404).send('Unable to delete the snack');
  }
}

SnackHandlers.update = async (request, response) => {
  try {
    let updatedSnack = await SnackModel.findByIdAndUpdate(request.params.id, request.body, { new: true });
    response.status(200).json(updatedSnack);
  } catch(error) {
    response.status(404).send('Unable to update that snack');
  }
}

module.exports = SnackHandlers;
