import React from 'react';
import UserCard from './UserCard';
import GitChart from './GitChart';
import FollowersList from './FollowersList';

class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>User Info for {this.props.username}</h2>
                <UserCard />
                <GitChart username={this.props.username} />
                <FollowersList />
            </div>
        )
    }
}

export default UserInfo;