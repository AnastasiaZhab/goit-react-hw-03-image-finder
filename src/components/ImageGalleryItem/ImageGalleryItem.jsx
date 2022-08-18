import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick, id, largeImageURL}) => {

    return (<li className={s.ImageGalleryItem}>
        <img onClick={() => onClick(largeImageURL)} id={id} className={s.Image} src={src} alt={alt}/>
        </li>
        )
};

export default ImageGalleryItem;