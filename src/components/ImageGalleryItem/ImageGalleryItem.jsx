import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick }) => {

    return (<li onClick={onClick} className={s.ImageGalleryItem}>
            <img className={s.Image} src={src} alt={alt} />
        </li>
        )
};

export default ImageGalleryItem;