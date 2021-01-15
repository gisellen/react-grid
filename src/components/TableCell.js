import React, { Component } from 'react'

export default class TableCell extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: '',
        }
        this.cellClick = this.cellClick.bind(this)
    }
    cellClick(){
        this.setState({
            color: this.props.color,
        })
    }
    render() {
        return (
            <div className="cell" onClick={this.cellClick} style={{backgroundColor: `${this.state.color}`}}>
            </div>
        )
    }
}
