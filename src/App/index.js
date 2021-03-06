import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {acts, acts1} from './reducer/action'
import Exam from './component/exam.js'
import MeRef from './component/meRef.js'
import Bi from './component/bi.js'
import $ from 'jquery';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'asdasd'
        }
    }
    changeName(me){
        me.setState((preState)=>{
            return {
                name:preState.name+'1111'
            }
        })
    }
    componentDidMount(){
        alert(process.env.DB_HOST)
        $.get('/src/data.json',function(res){
           
        })
        $.get('http://localhost:8090/aaa',function(res){
           
        })
    }
    render(){
        let { changeName } = this;
        let { name } = this.state;
        return (
            <div>
                <div>默认数据</div>
                <div>远程数据</div>
                <div>{this.props.appData.newsList}</div>
                {name}
                <button onClick={()=>{
                    changeName(this)
                }}>按钮</button>
                <Exam/>
                <MeRef/>
                <Bi/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appData: state.appData
    }
}

const mapDispatchToProps = ()=> {
    return dispatch => {
        return {
            actions: bindActionCreators(acts,dispatch),
            actions1: bindActionCreators(acts1,dispatch)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);