import React from 'react';
import './Header.css';

class Header extends React.Component {

    state = {
        searchText: ''
    }

    handleChanges = e => {
        this.setState({...this.state, searchText: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.changeUsername(this.state.searchText);
        this.setState({...this.state, searchText: ''})
    }

    render() {
        return (
            <div className='header'>
                <h1>Github Cards</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChanges} name='user-searchbox' className='user-searchbox' placeholder='Username...' value={this.state.searchText} />
                </form>
            </div>
        )
    }
}

export default Header;