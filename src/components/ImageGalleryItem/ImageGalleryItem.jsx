import css from "./ImageGalleryItem.module.css";
import PropTypes from 'prop-types';

const ImageGalleryItem=({itemData,imgClick})=>{
    return (
            <li key={itemData.id} className={css.ImageGalleryItem} data-src={itemData.largeImageURL} data-tags={itemData.tags} onClick={imgClick}>
                <img className={css.ImageGalleryItem_image} src={itemData.webformatURL} alt="" />
            </li>
    );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes={
    itemData:   PropTypes.object.isRequired,
    imgClick:   PropTypes.func,
}