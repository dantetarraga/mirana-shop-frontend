import {
  BrandGalleryView,
  CollectItAllView,
  HeroView,
  LatestReleasesView,
  RecommendedView
} from '../views'
import ShopAdvantages from '../views/features/ShopAdvantages'

const HomePage = () => {
  return (
    <>
      <HeroView />

      <section className='mx-auto max-w-[1150px] mb-8 space-y-4 md:space-y-14 md:mb-14'>
        <BrandGalleryView />
        <CollectItAllView />
      </section>

      <section className='space-y-8 md:space-y-14'>
        <LatestReleasesView />
        <RecommendedView />
        <ShopAdvantages />
      </section>
    </>
  )
}

export default HomePage
