import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ image, onClick }) => {

    const arrayImages = image;

    return (
        <ul className={s.ImageGallery}>
            {arrayImages.map(item => (
                <ImageGalleryItem onClick={onClick} key={item.id} src={item.webformatURL} alt={item.tags} />
            )
            )}

        </ul>
    )
};

export default ImageGallery;