const importAllImages = (context) => {
    let images = {};
    context.keys().map((item, index) => {
        images[item.replace('./', '')] = context(item);
    });
    return images;
};

const artist21 = importAllImages(require.context("../../../Layout/Assets/ArtistImages/DAS21-Artists", false, /\.(png|jpe?g|webp)$/));
const artist22 = importAllImages(require.context("../../../Layout/Assets/ArtistImages/DAS22-Artists", false, /\.(png|jpe?g|webp)$/));
const musicians21 = importAllImages(require.context("../../../Layout/Assets/MusiciansImages/DAS21 MUSICIANS", false, /\.(png|jpe?g|webp)$/));
const musicians22 = importAllImages(require.context("../../../Layout/Assets/MusiciansImages/DAS22 MUSICIANS", false, /\.(png|jpe?g|webp)$/));


const createMetadata = (images) => {
    const metadata = [];
    Object.keys(images).forEach((imageName, index) => {
        metadata.push({
            title: "Editions",
            aspectRatio:'3/2',
            imagePath: images[imageName],
            alt: `Edition pic ${index + 1}`
        });
    });
    return metadata;
};



export const ArtistFirstEditionMetadata = createMetadata(artist21);
export const ArtistSecondEditionMetadata = createMetadata(artist22);
export const MusiciansFirstEditionMetadata = createMetadata(musicians21);
export const MusiciansSecondEditionMetadata = createMetadata(musicians22);

