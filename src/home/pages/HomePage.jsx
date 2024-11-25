import {
  BrandGallerySection,
  CollectItAllSection,
  HeroSection,
  LatestReleasesSection,
  RecommendedSection
} from '../sections'

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <div className='mx-auto max-w-[1250px]'>
        <BrandGallerySection />

        <CollectItAllSection />
      </div>

      <LatestReleasesSection />

      <RecommendedSection />
    </>
  )
}

export default HomePage
