import React, { Component } from 'react'

type ClassProps = {
    name: string;
    lastName: string;
    email: string;
    coneccted: boolean;
}

export type State = {
    name: string;
    lastName: string;
    email: string;
    coneccted: boolean;
}

export default class ContactClass extends Component<ClassProps, State> {

    constructor(props: ClassProps){
        super(props);
        this.state ={
            name: this.props.name,
            lastName: this.props.lastName,
            email: this.props.email,
            coneccted: this.props.coneccted
        }
    }
    
    cambiarstate(){
        console.log('clic', this.state.coneccted)
        this.setState((prevState) => console.log('clicsapo', prevState))
        console.log('clic', this.state.coneccted)
        console.log('despues click2', this.state.coneccted)
    }

    componentDidMount(){

    }

}