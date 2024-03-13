import React, { Component } from "react";

//----------functional component--------------

export function FunctionalComponent(){
    return <p>This is a paragragh from a traditional functional component.</p>
}

//----------Class component------------------

export class ClassComponent extends Component{
    render(){
        return <h3>This heading is from a class component.</h3>
    }
}
