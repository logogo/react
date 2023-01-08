import React, { Component } from 'react';
const asyncComponent = (importComponent) => {
    class Com1 extends Component {
        constructor() {
            super();
            this.state = {
                component: null
            };
        }
        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({ component: cmp.default });
                });
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
    return Com1;
};

export default asyncComponent;
