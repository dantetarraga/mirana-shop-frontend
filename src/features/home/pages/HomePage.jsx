import {
  BrandGalleryView,
  CollectItAllView,
  HeroView,
  LatestReleasesView,
  RecommendedView
} from '../views'

const HomePage = () => {
  return (
    <>
      <HeroView />

      <section className='mx-auto max-w-[1250px] mb-8'>
        <BrandGalleryView />
        <CollectItAllView />
      </section>

      <section>
        <LatestReleasesView />
        <RecommendedView />
      </section>
    </>
  )
}

export default HomePage
