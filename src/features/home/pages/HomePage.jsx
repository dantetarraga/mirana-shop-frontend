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

      <section className='mx-auto max-w-[1150px] space-y-4 md:space-y-14 mb-14'>
        <BrandGalleryView />
        <CollectItAllView />
      </section>

      <section className='md:space-y-14 spcae-y-4'>
        <LatestReleasesView />
        <RecommendedView />
        <ShopAdvantages />
      </section>
    </>
  )
}

export default HomePage
