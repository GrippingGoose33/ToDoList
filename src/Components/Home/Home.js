import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    constructor(){
        super();

        this.state = {
            name: 'Emilio',

        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'Chango', 
            })
        }, 3000);
    }

    render() {
        const buttonStyle={
            backgroundColor: 'gray' ,
            border: '1px solid black',
        }

        const {name} = this.state;

        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                <a href="https://www.youtube.com/watch?v=M5V_IXMewl4">Youtube</a>

                <div>
                    {/* style in line */}
                    <button style= {{
                        backgroundColor: 'red',
                        border: '1px solid black',
                    }}>
                        Click
                    </button>
                    {/* style objecs */}
                    <button style={buttonStyle}>
                        Click
                    </button>
                </div>

            </div>
        );
    }
}

export default Home;