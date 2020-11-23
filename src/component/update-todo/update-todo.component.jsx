import React from 'react';

export class UpdateTodoForm extends React.Component {
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
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Title"
                                value={this.state.title}
                                onChange={(e) => this.setState({ title: e.target.value })} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Content</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Content" value={this.state.content}
                                onChange={(e) => this.setState({ content: e.target.value })}></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <button className='button bd-notification is-danger button-layout'>Update</button>
                    </div>
                </div>
            </form>
        );
    }
};
