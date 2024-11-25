import {
  BrandGallerySection,
  CollectItAllSection,
  HeroSection,
  LatestReleasesSection
} from '../sections'

const Homepage = () => {
  return (
    <>
      <HeroSection />

      <div className='mx-auto max-w-[1250px]'>
        <BrandGallerySection />

        <CollectItAllSection />
      </div>

      <LatestReleasesSection />
    </>
  )
}

export default Homepage
