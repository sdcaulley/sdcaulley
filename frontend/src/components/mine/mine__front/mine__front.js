import React, { Component } from 'react';
import Register from '../../auth/Register';
import Login from '../../auth/Login';
import './mine__front.css';
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
            <p className='mine-front__p'>Need to
              <button onClick={this.displayForm} className='mine-front__button'>
                Login
              </button>?
            </p>
            <Register />
          </React.Fragment>
        );
      }
    }
}

export default MyFront;
