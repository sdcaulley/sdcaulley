import React, { Component } from 'react';
import Register from '../../auth/Register';
import Login from '../../auth/Login';

class MyFront extends Component {
    constructor() {
      super();
      this.state = {
        visible: false
      };
      this.displayForm = this.displayForm.bind(this);
    }

    displayForm() {
      this.setState( { visible: true } );

      if (this.state.visible) {
        return
      }
    }

    render() {
      if(this.state.visible) {
        return <Login />;
      }  else {
        return (
          <React.Fragment>
            <p>Need to <a onClick={this.displayForm}>login</a>?</p>
            <Register />
          </React.Fragment>
        );
      }
    }
}

export default MyFront;
