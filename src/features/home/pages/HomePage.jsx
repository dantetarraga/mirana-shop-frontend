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

      <section className='mx-auto max-w-[1250px]'>
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
