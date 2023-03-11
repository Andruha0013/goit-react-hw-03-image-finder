import css from "./Button.module.css";
import PropTypes from 'prop-types';

const LoadMoreBtn=({clickFunction})=>{
    return (
        <button className={css.Button} onClick={clickFunction} >Load more</button>
    );
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes={
    clickFunction: PropTypes.func.isRequired,
}