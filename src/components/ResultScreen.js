import React from 'react';
import '.././App.css';

export class ResultScreen extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            result : 0
        };
    }
    calculate = () =>{

        if(this.props.operator === '+'){
            this.setState({
                result : this.props.input1 + this.props.input2
            });
            return;
        }
        if(this.props.operator === '-'){
            this.setState({
                result : this.props.input1 - this.props.input2
            });
            return;
        }
        if(this.props.operator === '/'){
            this.setState({
                result : this.props.input1 / this.props.input2
            });
            return;
        }

    }
    render(){
        return (
            <div className="flex-container2">
                <div>{this.state.result}</div>
                <button className="numbers" onClick={this.calculate}>=</button>
            </div>
        );
    }

}