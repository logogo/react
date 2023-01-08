import React, { Component } from 'react';
import oStyle from './container.css';

export default class Container extends Component {
    render() {
        return (<div className={oStyle.red}>{this.props.children}</div>);
    }
}
