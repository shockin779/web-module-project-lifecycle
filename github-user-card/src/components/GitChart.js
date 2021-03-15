import React from 'react';
import './GitChart.css';

class GitChart extends React.Component {
    render() {
        return (
            <div className="gitchart">
                <img src={`https://ghchart.rshah.org/${this.props.username}`} alt={`${this.props.username}'s Github chart`} />
            </div>
        )
    }
}

export default GitChart;