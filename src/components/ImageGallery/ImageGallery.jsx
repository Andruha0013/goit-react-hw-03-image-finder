import React, { Component } from "react";
import Loader from "../Loader/Loader";
import PropTypes from 'prop-types';


import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import css from "./ImageGallery.module.css";
import PixabayApp from "../../myLib/PixabayApp";
import {USER_KEY} from "myLib/GLABAL_VARS";
import { ITEMS_PER_PAGE } from "myLib/GLABAL_VARS";

const pixabay=new PixabayApp(USER_KEY);


class ImageGallery extends Component{
    state={
        imagesList: [],
        loading: false,
        page: 1,
        more: false,
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.searchStr!==this.props.searchStr|| prevState.page!==this.state.page){
            this.setState({loading:true});
            pixabay.setPerPage(ITEMS_PER_PAGE);
            pixabay.setPage(this.state.page);
            pixabay.search(this.props.searchStr).then(res=>{
                //console.log(res);
                let list=[];
                if(prevProps.searchStr===this.props.searchStr){
                    list=prevState.imagesList.concat(res.hits);
                }
                else{
                    list=res.hits;
                }
                if(res.totalHits>(this.state.page*pixabay.getPerPage())){
                    this.setState({imagesList:list,loading:false,more: true});
                }
                else{
                    this.setState({imagesList:list,loading:false, more: false});
                }
            });
        }
    }

    loadMore=()=>{
        this.setState((prevState)=>{
            return ({page: prevState.page+1});
        });
    }

    render(){
        return(
            <div className={css.GalleryWraper}>
                <ul className={css.ImageGallery}>
                {this.state.imagesList.map((item)=>{
                    return (
                        <ImageGalleryItem 
                            key={item.id}
                            itemData={item}
                            imgClick={this.props.imgClick}
                        />
                    )
                })}
                </ul>
                {this.state.loading && <Loader/>}
                {this.state.more && <Button clickFunction={this.loadMore}/>}
            </div>
        );
    }
}

export default ImageGallery;

ImageGallery.propTypes={
    searchStr:  PropTypes.string,
    imgClick:   PropTypes.func,
}