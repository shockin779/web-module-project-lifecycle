import React from 'react';
import FollowerCard from './FollowerCard';
import './FollowersList.css';

class FollowersList extends React.Component {
    render() {
        return(
            <div className='followers-list'>
                {this.props.followers.map(follower => <FollowerCard follower={follower} key={follower.id} />)}
            </div>
        )
    }
}

export default FollowersList;