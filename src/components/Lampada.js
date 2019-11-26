import React from 'react';
import { directive } from '@babel/types';


class Lampada extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lampada: "Apagada",
            lampada_style: "lamp-apagada"
        }
        console.log(this.state.lampada);
    }
    async change() {
        console.log('Change');
        await this.state.lampada === 'Acesa' ? this.setState({lampada: "Apagada", lampada_style: "lamp-apagada"}) : this.setState({lampada: "Acesa", lampada_style: "lamp-acesa"});
        console.log(this.state.lampada);
        
    }

    render() {
        return (
            <div 
                className={ this.state.lampada_style + " lampada-cont" } 
                onClick={() => { this.change() }}>
                    <h1>{this.state.lampada}</h1>
            </div>
            
        )
    }
}


export default Lampada;
