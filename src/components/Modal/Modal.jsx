import css from "./Modal.module.css";
import PropTypes from 'prop-types';


const Modal=({src,alt,onAction})=>{
return(
    <div className={css.Overlay} onClick={onAction}>
        <div className={css.Modal}>
            <img src={src} alt={alt} />
        </div>
    </div>
);}

export default Modal;

Modal.propTypes={
    src:        PropTypes.string.isRequired,
    alt:        PropTypes.string,
    onAction:   PropTypes.func,
}