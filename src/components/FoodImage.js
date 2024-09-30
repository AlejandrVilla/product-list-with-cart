function FoodImage({ image, alt, className }) {
    return (
        <picture>
            <source 
                className={className} 
                srcSet={image.desktop} 
                media="(min-width: 1024px)" 
            />
            <source 
                className={className} 
                srcSet={image.tablet} 
                media="(min-width: 768px)" 
            />
            <source 
                className={className} 
                srcSet={image.mobile} 
                media="(min-width: 480px)" 
            />
            <img
                className={className}  
                src={image.thumbnail} 
                alt={alt} 
            />
        </picture>
    );
}

export { FoodImage };