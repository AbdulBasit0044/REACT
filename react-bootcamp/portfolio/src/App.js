import React, {Component} from 'react';

class App extends Component{

state = {displayBio: false};

    toogleDisplayBio = () =>{
        console.log('readMore this', this)
        this.setState({displayBio: !this.state.displayBio});
    }


    render(){
        return(
            <div>
                <h1>High five</h1>
                <p>This is gooououodud</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>This is something cool.</p>
                            <p>This is something cool.</p>
                            <p>This is something cool.</p>
                            <button onClick={this.toogleDisplayBio}>Show less</button>
                        </div>
                    ): (<div><button onClick={this.toogleDisplayBio}>Read More</button></div>)
                }
        </div>
        )
        
    }
}
export default App;