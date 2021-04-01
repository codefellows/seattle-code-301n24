# Code 301 Final Assessment

## API Server Bug List

### src/server.js

- Missing: `app.use(express.json())`
- Incorrect: `app.use( () => crudRoutes)` should be `app.use(crudRoutes)`
- Error Handler should be: `app.use( (error,req,res,next) => {`
  - It's missing the error param, so it'll never work

### src/routes.js

- Missing Implementation: `deleteOneItem()` has not been implemented at all
- Incorrect Status: `addAnItem()` is returning a 200 response instead of a 201
- Missing: There is no handler defined for getting 1
  - Needs: `routes.get('/items/:id', getOneItem)` in that upper section
- Misspelling: `getOneItem()` and  `updateItem()` both are using `req.param` instead of `req.params`
- Missing: `addAnItem()` is missing `await item.save()`
  - it'll make an instance but will not save it to the database

## React App Bug List

### src/app.js

- Missing: `updateItem()` and `deleteItem()` don't call `this.getItems();` to refresh the screen from the database
- Missing `<Items ...>` doesn't have the prop with the update method in it.
  - Needs: `handleUpdate={this.updateItem}`

### src/components/add-item.js

- Missing: There's not a default export in this class
- Wrong Var: `handleChange()` does a `this.setState({})` with `field` instead of `formData`

### src/components/items.js

- Incorrect: Trying to list with `.forEach()` instead of `.map()`

### src/components/update-item.js

- Incorrect: `<Form>` uses `this.handleChange` instead of `this.handleSubmit` for the `onSubmit` handler
- Incorrect: `handleChange` does `this.setState(item)` instead of `this.setState({item})`
  - The braces matter!
- Incorrect: Button's onClick handler invokes the function instead of referencing it
  - This: `onClick={ this.props.handleDelete(item._id) }`
  - Should be: `onClick={ () => this.props.handleDelete(item._id) }`
