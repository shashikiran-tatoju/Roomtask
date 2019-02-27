import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      roomDecressButton: true,
      roomincressButton: false,
      adultDecressButton: true,
      adultincressButton: false,
      childrenDecressButton: true,
      childernincressButton: false,
      RoomsVale: 1,
      adultValue: 1,
      childernVale: 0
    }
  }
  roomsDecrement = (event) => {
    event.preventDefault();
    var roomValue = this.state.RoomsVale;
    var adultValue = this.state.adultValue;
    var childernVale = this.state.childernVale;
    var totalCustomers=adultValue+childernVale; 
    if(totalCustomers < 5 && roomValue < 1){
      this.setState({
        roomDecressButton:true
      })
    }
    else if(totalCustomers < 9 && roomValue < 2){
      this.setState({
        roomDecressButton:true
      })
    }
   else if(totalCustomers < 13 && roomValue < 3){
      this.setState({
        roomDecressButton:true
      })
    }
   else if(totalCustomers < 17 && roomValue < 4){
      this.setState({
        roomDecressButton:true
      })
    }
    else{
      this.setState({
        roomDecressButton:false
      })
    }
    if (roomValue === 2) {
      this.setState({
        roomDecressButton: true,
      })
    } 
    if(totalCustomers < 17 && roomValue > 4){
      this.setState({
        RoomsVale: roomValue - 1, 
        roomDecressButton:false,
      roomincressButton: false,
      })
    }
    if(totalCustomers < 13 && roomValue > 3){
      this.setState({
        RoomsVale: roomValue - 1, 
        roomDecressButton:false,
      roomincressButton: false,
      })
    }
    if(totalCustomers < 9 && roomValue > 2){
      this.setState({
        RoomsVale: roomValue - 1, 
        roomDecressButton:false,
      roomincressButton: false,
      })
    }
    if(totalCustomers < 5 && roomValue > 1){
      this.setState({
        RoomsVale: roomValue - 1, 
        roomDecressButton:false,
      roomincressButton: false,
      })
    }
  }
  roomIncrement = (event) => {
    event.preventDefault();
    var roomValue = this.state.RoomsVale;
    var adultValue = this.state.adultValue;
    var childernVale=this.state.childernVale;
    var totalCustomers=adultValue+childernVale;
    this.setState({
      RoomsVale: roomValue + 1,
      roomDecressButton: false
    })
    if(roomValue === adultValue){
      this.setState({
        adultValue: adultValue + 1,
      })
    }
    if (adultValue === 5) {
      this.setState({
        adultValue: 5
      })
    }

    if (roomValue === 4) {
      this.setState({
        roomincressButton: true,
      })
    }
    if(totalCustomers < 17 && roomValue > 4){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 13 && roomValue > 3){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 9 && roomValue > 2){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 5 && roomValue > 1){
      this.setState({
        roomDecressButton:false
      })
    }
  }
  adultDecrement = (event) => {
    event.preventDefault();
    var adultValue = this.state.adultValue;
    var childernVale = this.state.childernVale;
    var RoomsVale = this.state.RoomsVale;
    if (adultValue === RoomsVale) {
      this.setState({
        adultDecressButton: true
      })
    }
    if(RoomsVale < adultValue){
      this.setState({
        adultValue: adultValue - 1,
        adultincressButton: false,
        childernincressButton: false
      })
          
    }
    
    var totalCustomers = adultValue + childernVale;
    if (totalCustomers === 5 &&  RoomsVale < 1 ) {
      this.setState({
        RoomsVale: 1,
        roomDecressButton:true
      })
    }
    if (totalCustomers === 9 && RoomsVale<2) {
      this.setState({
        RoomsVale: 2
      })
    }
    if (totalCustomers === 13 && RoomsVale<3) {
      this.setState({
        RoomsVale: 3
      })
    }
    if (totalCustomers === 17 && RoomsVale<4) {
      this.setState({
        RoomsVale: 4
      })
    }
    if(this.state.RoomsVale < 5){
      this.setState({
        roomincressButton:false
      })
    }
    if(this.state.RoomsVale === 5 && adultValue === 5){
      this.setState({
        adultDecressButton:true,
        adultValue:this.state.RoomsVale,
      adultDecressButton: true,
      })
    } 
    if(totalCustomers < 17 && RoomsVale > 4){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 13 && RoomsVale > 3){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 9 && RoomsVale > 2){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 5 && RoomsVale > 1){
      this.setState({
        roomDecressButton:false
      })
    }
  }
  adultIncrement = (event) => {
    event.preventDefault();
    var adultValue = this.state.adultValue;
    var childernVale = this.state.childernVale;
    var RoomsVale=this.state.RoomsVale;
    if(RoomsVale<= adultValue){
      this.setState({
        adultValue: adultValue + 1,
        childernincressButton: false,
        adultDecressButton:false
      })
    } 
    var totalCustomers = adultValue + childernVale;
    if (totalCustomers > 3 && totalCustomers < 6 && RoomsVale < 2 ) {
      this.setState({
        RoomsVale: 2
      })
    }
    if (totalCustomers > 7 && totalCustomers < 10 && RoomsVale < 3) {
      this.setState({
        RoomsVale: 3
      })
    }
    if (totalCustomers > 11 && totalCustomers < 14 && RoomsVale < 4 ) {
      this.setState({
        RoomsVale: 4
      })
    }
    if (totalCustomers > 15 && totalCustomers < 18 && RoomsVale < 5) {
      this.setState({
        RoomsVale: 5
      })
    }
    if (totalCustomers === 19) {
      this.setState({
        adultincressButton: true,
        childernincressButton: true,
        roomincressButton: true
      })
    }
    if(RoomsVale === 5){
      this.setState({
        roomincressButton:true,
      })
    }
    if(totalCustomers < 17 && RoomsVale > 4){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 13 && RoomsVale > 3){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 9 && RoomsVale > 2){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 5 && RoomsVale > 1){
      this.setState({
        roomDecressButton:false
      })
    }
  }
  childrenDecrement = (event) => {
    event.preventDefault();
    var adultValue=this.state.adultValue;
    var childernVale=this.state.childernVale;
    var RoomsVale=this.state.RoomsVale;
    this.setState({
      childernincressButton: false,
      adultincressButton: false, 
      childernVale:childernVale-1,
      adultDecressButton: false
    })
    if(childernVale === 1){
      this.setState({
        childrenDecressButton:true
      })
    }
    var totalCustomers=adultValue+childernVale;
    if(totalCustomers === 17 && RoomsVale < 4 ){
      this.setState({
        RoomsVale:4,
        roomincressButton: false,
      })
    }
    if(totalCustomers === 13 && RoomsVale < 3){
      this.setState({
        RoomsVale:3 
      })
    }
    if(totalCustomers === 9 && RoomsVale < 2){
      this.setState({
        RoomsVale:2 
      })
    }
    if(totalCustomers === 5 && RoomsVale < 1){
      this.setState({
        RoomsVale:1 
      })
    } 
    if(totalCustomers < 17 && RoomsVale > 4){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 13 && RoomsVale > 3){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 9 && RoomsVale > 2){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 5 && RoomsVale > 1){
      this.setState({
        roomDecressButton:false
      })
    }
  }
  childrenIncrement = (event) => {
    event.preventDefault();
    var adultValue=this.state.adultValue;
    var childernVale=this.state.childernVale;
    var RoomsVale=this.state.RoomsVale;
    this.setState({
      childrenDecressButton:false,
      childernVale:childernVale+1,  
    })
    if(childernVale === 14){
      this.setState({
        childernincressButton: true,
        adultincressButton: true,
      roomincressButton: true
      })
    }
    if(adultValue === 2 && childernVale === 7){
      this.setState({
      childernincressButton: true
      })
  }
    var totalCustomers=adultValue+childernVale;
    if(RoomsVale === 5){
      this.setState({
        roomincressButton: true
      })
    }
    if(totalCustomers === 4 && RoomsVale <2){
      if(RoomsVale === adultValue){
        this.setState({
          adultValue:2,
          RoomsVale:2
        })
      }
      else{
        this.setState({ 
          RoomsVale:2
        })
      }
    }
    if(totalCustomers === 8 && RoomsVale <3 ){
      if(RoomsVale === adultValue){
        this.setState({
          adultValue:3,
          RoomsVale:3
        })
      }
      else{
        this.setState({ 
          RoomsVale:3
        })
      }
    }
    if(totalCustomers === 12 && RoomsVale <4){
      if(RoomsVale === adultValue){
        this.setState({
          adultValue:4,
          RoomsVale:4
        })
      }
      else{
        this.setState({ 
          RoomsVale:4
        })
      } 
    }
    if(totalCustomers === 16 && RoomsVale <5){
      if(RoomsVale === adultValue){
        this.setState({
          adultValue:5,
          RoomsVale:5
        })
      }
      else{
        this.setState({ 
          RoomsVale:5
        })
      }
      
    }
    if (totalCustomers === 19) {
      this.setState({
        adultincressButton: true,
        childernincressButton: true,
        roomincressButton: true
      })
    }
    if(RoomsVale === 5){
      this.setState({
        roomincressButton: true
      })
    }
    if(totalCustomers < 17 && RoomsVale > 4){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 13 && RoomsVale > 3){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 9 && RoomsVale > 2){
      this.setState({
        roomDecressButton:false
      })
    }
    if(totalCustomers < 5 && RoomsVale > 1){
      this.setState({
        roomDecressButton:false
      })
    }
  }
  render() {
    return (
      <div className="App">
	 // <p> comment</p>
        <form>
          <div className="form__div">
            <label className="form__lbltitle">Rooms</label>
            <button disabled={this.state.roomDecressButton} className="form__decrementBtn" onClick={this.roomsDecrement}>-</button>
            <label className="form__lblValue">{this.state.RoomsVale}</label>
            <button disabled={this.state.roomincressButton} className="form__incrementDiv" onClick={this.roomIncrement}>+</button>
          </div>
          <div className="form__div">
            <label className="form__lbltitle">Adults</label>
            <button disabled={this.state.adultDecressButton} className="form__decrementBtn" onClick={this.adultDecrement}>-</button>
            <label className="form__lblValue">{this.state.adultValue}</label>
            <button disabled={this.state.adultincressButton} className="form__incrementDiv" onClick={this.adultIncrement}>+</button>
          </div>
          <div className="form__div">
            <label className="form__lbltitle">Childern</label>
            <button disabled={this.state.childrenDecressButton} className="form__decrementBtn" onClick={this.childrenDecrement}>-</button>
            <label className="form__lblValue">{this.state.childernVale}</label>
            <button disabled={this.state.childernincressButton} className="form__incrementDiv" onClick={this.childrenIncrement}>+</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
