import React from 'react';
import './UserCard.css';

class UserCard extends React.Component {
    render() {
        return (
            <div className="user-card">
                <div className="user-card-container">
                    <div className="user-avatar">
                        <img src={this.props.user.avatar_url} alt={`${this.props.user.login}'s avatar`} />
                    </div>
                    <div className="user-info">
                        <p>{`Name: ${this.props.user.name}`}</p>
                        <p>{`Username: ${this.props.user.login}`}</p>
                        <p>{`Followers: ${this.props.user.followers}`}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;