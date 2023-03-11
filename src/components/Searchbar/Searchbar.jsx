import React, { Component } from "react";
import css from "./Searchbar.module.css";
import PropTypes from "prop-types";

class Searchbar extends Component{
    state={
        searchExpression : "",
    }

    handleChangeInput=(event)=>{
        this.setState({searchExpression:event.currentTarget.value.toLowerCase()});
    }
    onSubmitFunction=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.searchExpression);
        this.setState({searchExpression:""});
    }

    render(){
        return(
            <header className={css.searchbar}>
            <form className={css.form} onSubmit={this.onSubmitFunction}>
                <button type="submit" className={css.button}>
                <span className={css.button_label}>Search</span>
                </button>

                <input
                className={css.input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handleChangeInput}
                value={this.state.searchExpression}
                />
            </form>
            </header>
        );
    }
}

export default Searchbar;


Searchbar.protoTypes={
    onSubmit: PropTypes.func,   
}