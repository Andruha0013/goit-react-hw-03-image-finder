import React, { Component } from "react";
//import PixabayApp from "../myLib/PixabayApp";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";



class App extends Component {
  state={
    searchExp: null,
    modal: false,
    img: {src: null, alt: null},
  }
  formSubit=(data)=>{
    this.setState({searchExp:data});
  }

  modalClick=()=>{
    window.removeEventListener("keydown",this.handleKeyPress);
    this.setState({modal: false});
  }
  handleKeyPress=(event)=>{
    if(event.key==="Esc"||event.key==="Escape"){
      this.modalClick();
    }
    //console.log(event);
}
  imgClick=(event)=>{
    this.setState({modal: true, img:{src:event.currentTarget.dataset.src,alt: event.currentTarget.dataset.tags}});
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.modal!==this.state.modal){
      if(this.state.modal===true){
        window.addEventListener("keydown",this.handleKeyPress);
      }
    }
  }
  
  render(){
    return (
      <div>
        <Searchbar
          onSubmit={this.formSubit}
        />
        <ImageGallery searchStr={this.state.searchExp} imgClick={this.imgClick}/>
        {this.state.modal && <Modal src={this.state.img.src} alt={this.state.img.alt} onAction={this.modalClick}/>}
      </div>
    );
  }
}

export default App;
