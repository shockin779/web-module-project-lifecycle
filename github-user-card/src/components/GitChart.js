import React from 'react';

class GitChart extends React.Component {
    render() {
        return <img src={`https://ghchart.rshah.org/${this.props.username}`} alt={`${this.props.username}'s Github chart`} />
    }
}

export default GitChart;