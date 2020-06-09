import React from "react";
import { connect } from "react-redux";
import Redux from "redux";



const mapStateToProps = state => ({
    count: state
  });

const CounterComponent = ({ count, dispatch }) => (

    <div>
        <p>{count}</p>
        <button onClick = {() => dispatch({type : 'ADD'})}>+</button>
        <button onClick = {() => dispatch({type : 'REMOVE'})}>-</button>
        <br/>
        <button onClick = {() => dispatch({type : 'ADD10'})}>+ 10</button>
        <button onClick = {() => dispatch({type : 'REMOVE10'})}>- 10</button>
        <br/>
        <button onClick = {() => dispatch({type : 'RESET'})}>RESET</button>
    </div>
);

export default connect(
  mapStateToProps
)(CounterComponent);