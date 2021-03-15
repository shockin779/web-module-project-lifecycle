import React from 'react';
import './FollowerCard.css';

class FollowerCard extends React.Component {
    render() {
    return (
        <div className="follower">
            <a rel='noreferrer' target='_blank' href={this.props.follower.html_url}>
                <img src={this.props.follower.avatar_url} alt={`${this.props.follower.login}'s avatar`}/>
                {/* <p>Username: {this.props.follower.login}</p> */}
                <p>Username:</p>
                <p>{this.props.follower.login}</p>
            </a>
        </div>
    )
    }
}

export default FollowerCard;