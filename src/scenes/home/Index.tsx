import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'
import Logo2 from '@/assets/Logo2.png'
import HomeImage from '@/assets/HomeImage.png'
import SponsorUnderArmour from '@/assets/SponsorUnderArmour.png'
import SponsorDecathlon from '@/assets/SponsorDecathlon.png'
import SponsorPocari from '@/assets/SponsorPocari.png'
import SponsorCosmo from '@/assets/SponsorCosmo.png'
import SponsorNB from '@/assets/SponsorNB.png'
import SponsorAsics from '@/assets/SponsorAsics.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')
  
  return (
    <section
      id='home'
      className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
    >
      {/* IMAGE & MAIN HEADER */}
      <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
                  onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className='z-10 mt-32 md:basis-3/5'>

          {/* HEADINGS */}
          <motion.div className='md:-mt-20'
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:-z-1 md:before:content-(--content-logo3)'>
                <img alt='logo-2' src={Logo2} />
              </div>
            </div>

            <p className='mt-8 text-sm'>
              Train harder. Train smarter. Transform your body faster with 
              industry-leading workouts designed for real change—powered 
              by expert coaching, cutting-edge training technology, and a 
              community that pushes you beyond your limits. Ignite your 
              potential and redefine what's possible.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div className='mt-8 flex items-center gap-8'
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Get Started
            </ActionButton>

            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 transition duration-500'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
            >
              <p>Get in Touch</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className='flex basis-3/5 justify-center md:z-10
                        md:ml-40 md:mt-16 md:justify-items-end'
        >
          <img alt='home-image' src={HomeImage} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-6/6 items-center justify-between gap-8'>
              <img alt='underArmour-sponsor' src={SponsorUnderArmour} />
              <img alt='decathlon-sponsor' src={SponsorDecathlon} />
              <img alt='pocari-sponsor' src={SponsorPocari} />
              <img alt='cosmo-sponsor' src={SponsorCosmo} />
              <img alt='nb-sponsor' src={SponsorNB} />
              <img alt='asics-sponsor' src={SponsorAsics} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home