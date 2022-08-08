import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ key, src, alt }) => {
    console.log(src)
        return (<li className={s.ImageGalleryItem}>
            <img className={s.Image} src={src} alt={alt} />
        </li>
        )
};

export default ImageGalleryItem;