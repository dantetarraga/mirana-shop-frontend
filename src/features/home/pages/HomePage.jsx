import {
  BrandGalleryView,
  CollectItAllView,
  HeroView,
  LatestReleasesView,
  RecommendedView
} from '../views'
import ShopAdvantages from '../views/ShopAdvantages'

const HomePage = () => {
  return (
    <>
      <HeroView />

      <section className='mx-auto max-w-[1250px] mb-8'>
        <BrandGalleryView />
        <CollectItAllView />
      </section>

      <section className=''>
        <LatestReleasesView />
        <RecommendedView />
        <ShopAdvantages />
      </section>
    </>
  )
}

export default HomePage
