import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ image }) => {

    const arrayImages = image;

    return (
        <ul className={s.ImageGallery}>
            {arrayImages.map(item => (
                <ImageGalleryItem key={item.id} src={item.webformatURL} alt={item.tags} />
            )
            )}

        </ul>
    )
};

export default ImageGallery;