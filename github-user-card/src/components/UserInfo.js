import React from 'react';
import UserCard from './UserCard';
import GitChart from './GitChart';
import FollowersList from './FollowersList';

class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <UserCard user={this.props.user} />
                <GitChart username={this.props.user.login} />
                <FollowersList followers={this.props.followers} />
            </div>
        )
    }
}

export default UserInfo;