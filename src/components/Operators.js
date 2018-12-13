import React from 'react';
import '.././App.css';


export class Operators extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedOperator : null
        }
        
    }

    setOperator = (operator) => {
        if(this.state.selectedOperator === null){
            
            this.setState({
                selectedOperator : operator
            }, this.props.callbackFromOperators(operator));
        }
    } 

    render(){
        return(
            <div className="flex-container">
                <button className="numbers" onClick={() => this.setOperator("+")}>+</button>
                <button className="numbers" onClick={() => this.setOperator("-")}>-</button>
                <button className="numbers" onClick={() => this.setOperator("/")}>/</button>
            </div>
            

        );
    }
}


