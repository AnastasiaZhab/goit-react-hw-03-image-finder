import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ image, onClick }) => {

    const arrayImages = image;

    return (
        <ul className={s.ImageGallery}>
            {arrayImages.map(item => (
                <ImageGalleryItem onClick={onClick} id={item.id} key={item.id} src={item.webformatURL} alt={item.alt} largeImageURL={item.largeImageURL} />
            )
            )}

        </ul>
    )
};

export default ImageGallery;