import React from 'react';
import '.././App.css';

export class Numbers extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            input1 : 0,
            input2 : 0
        }
    }

    setInput = (input) =>{
        
        if(this.state.input1 === 0){
            
            this.setState ({
                input1 : input
            }, this.props.callbackFromNumbers(this.state.input1, this.state.input2));
            
        }
        if(this.state.input1 !== 0 && this.state.input2 === 0){
            this.setState ({
                input2 : input
            }, () => this.props.callbackFromNumbers(this.state.input1, this.state.input2));
        }
        
        
    }
    print = () =>{
        console.log(this.state.input1);
        console.log(this.state.input2);
        console.log("------------")    

    }

    createButtons = ()=>{
        var arr = [1,2,3];
        return arr.map(e => {
            return <button className="numbers" onClick={() => this.setInput(e)}>{e}</button>;
            }
        );
    }
    render() {
        return (<div>
            {/* <div className="flex-container">
                {this.createButtons()};
            </div> */}
            <div className="flex-container">
                <button className="numbers" onClick={() => this.setInput(1)}>1</button>
                <button className="numbers" onClick={() => this.setInput(2)}>2</button>
                <button className="numbers" onClick={() => this.setInput(3)}>3</button>
            </div>
            <div className="flex-container">
                <button className="numbers" onClick={() => this.setInput(4)}>4</button>
                <button className="numbers" onClick={() => this.setInput(5)}>5</button>
                <button className="numbers" onClick={() => this.setInput(6)}>6</button>
            </div>
            <div className="flex-container">
                <button className="numbers" onClick={() => this.setInput(7)}>7</button>
                <button className="numbers" onClick={() => this.setInput(8)}>8</button>
                <button className="numbers" onClick={() => this.setInput(9)}>9</button>
            </div>
            <div className="flex-container">

                <button className="numbers" onClick={this.print}></button>
                <button className="numbers" onClick={() => this.setInput(0)}>0</button>
                <button className="numbers"></button>
            </div>
        </div>
        );

    }

}