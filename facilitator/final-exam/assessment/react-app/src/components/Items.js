import { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class Items extends Component {

  render() {

    return (
      <section>
        <h2>Items...</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.itemsList.map((item, idx) =>
                <Item key={item._id} info={item} />
              )
            }
          </tbody>
        </Table>


      </section>
    );
  }
}

class Item extends Component {

  render() {

    const info = this.props.info;

    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.description}</td>
        <td>
          <Button data-testid={`delete-button-${info.name}`}>Delete Item</Button>
        </td>
      </tr>
    );
  }
}

export default Items;
