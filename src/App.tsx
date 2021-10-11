import Gallery from "./components/Gallery";
import styles from "./App.module.scss";
import { GalleryVariant } from "./components/Gallery/Gallery.types";
import TopBar from "./components/TopBar/TopBar";
import ToggleSwitch from "./components/ToggleSwitch";
import { useState } from "react";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  // Gallery Variant in App State
  const [galleryVariant, setGalleryVariant] = useState<GalleryVariant>(
    GalleryVariant.FULL
  );

  // Initialize empty array for mock Items
  let mockElements = [];

  // Count of Mock Itemsx
  const numberOfElements = 10;

  // Generate and fill Mock Item Array
  for (let i = 0; i < numberOfElements; i++) {
    mockElements.push(<div className={styles.mockItem}>Item: {i}</div>);
  }

  // Toggle between Gallery Variants
  const toggleGalleryVariant = () => {
    let updatedGalleryVaraint =
      galleryVariant === GalleryVariant.FULL
        ? GalleryVariant.INSET
        : GalleryVariant.FULL;

    setGalleryVariant(updatedGalleryVaraint);
  };

  return (
    <div className="App">
      <TopBar>
        {!isMobile && <h1>React Gallery ZR</h1>}
        <div className={styles.GalleryToggleContainer}>
          <p>
            Gallery Variant: <span>{galleryVariant}</span>
          </p>
          <ToggleSwitch onClick={toggleGalleryVariant} />
        </div>
      </TopBar>

      <main>
        <Gallery variant={galleryVariant}>
          {mockElements.map((element, index) => (
            <div key={`element-index${index}`}>{element}</div>
          ))}
        </Gallery>
      </main>
    </div>
  );
}

export default App;
