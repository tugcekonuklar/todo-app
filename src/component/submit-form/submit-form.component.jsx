import React from 'react';

import './submit-form.style.css'

export class SubmitForm extends React.Component {
  state = {
      title: '',
      content: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === '') return;
    this.props.onFormSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="content-wrapper">
          <div>
            <input
              type='text'
              className='input is-focused'
              placeholder='Enter Title'
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <input
              type='text'
              className='input'
              placeholder='Enter Item'
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
            />
          </div>
          <div>
            <button className='button'>Add</button>
          </div>
        </div>
      </form>
    );
  }
};