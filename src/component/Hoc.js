import React, { Component } from 'react';

const Hoc = function(Com) {
    class Com1 extends Component {
        render() {
            const json = { name: 'lil', age: 1111 };
            return <Com {...json}/>;
        }
    }
    return Com1;
};

export default Hoc;
