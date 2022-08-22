import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ image, onClick }) => {

    const arrayImages = image;

    return (
        <ul className={s.ImageGallery}>
            {arrayImages.map(({id, webformatURL, alt, largeImageURL}) => (
                <ImageGalleryItem onClick={onClick} id={id} key={id} src={webformatURL} alt={alt} largeImageURL={largeImageURL} />
            )
            )}

        </ul>
    )
};

export default ImageGallery;