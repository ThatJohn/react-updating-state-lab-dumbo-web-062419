// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    clickHandler = event => {
        this.setState({settings: {...this.state.settings, bitrate: 12}});
    }
    resClickHandler = () => {
        this.setState({settings: {...this.state.settings, video: {resolution: '720p'} }})
    }

    render() {
        return (
            
            <div>
                <button className="bitrate" onClick={this.clickHandler} >Bitrate</button>
                <button className="resolution" onClick={this.resClickHandler} >Resolution</button>
            </div>
        );
    }
}