import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick, id}) => {

    return (<li onClick={onClick} className={s.ImageGalleryItem}>
        <img id={id} className={s.Image} src={src} alt={alt}/>
        </li>
        )
};

export default ImageGalleryItem;