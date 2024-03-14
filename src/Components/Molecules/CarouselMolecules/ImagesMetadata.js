const importAllImages = (context) => {
    let images = {};
    context.keys().map((item, index) => {
      images[item.replace('./', '')] = context(item);
    });
    return images;
  };
  
  const firstEditionImages = importAllImages(require.context("../../../Layout/Assets/Volume1", false, /\.(png|jpe?g|svg)$/));
  const secondEditionImages = importAllImages(require.context("../../../Layout/Assets/Volume2", false, /\.(png|jpe?g|svg)$/));
  const thirdEditionImages = importAllImages(require.context("../../../Layout/Assets/Volume3", false, /\.(png|jpe?g|svg)$/));
  
  const createMetadata = (images) => {
    const metadata = [];
    Object.keys(images).forEach((imageName, index) => {
      const aspectRatio = getImageAspectRatio(imageName); // Ottieni l'aspect ratio dell'immagine
      metadata.push({
        title: "First Edition",
        aspectRatio: aspectRatio,
        imagePath: images[imageName],
        alt: `First Edition pic ${index + 1}`
      });
    });
    return metadata;
  };
  
  const getImageAspectRatio = (imageName) => {
    if (imageName.includes("horizontal")) {
      return "3/2";
    } else {
      return "2/3";
    }
  };
  
  export const Volume1Metadata = createMetadata(firstEditionImages);
  export const Volume2Metadata = createMetadata(secondEditionImages);
  export const Volume3Metadata = createMetadata(thirdEditionImages);
  