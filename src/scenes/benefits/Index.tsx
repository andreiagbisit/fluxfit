import HText from '@/shared/HText'
import { SelectedPage, type BenefitType } from '@/shared/types'
import { BuildingOfficeIcon, SwatchIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsImage from '@/assets/BenefitsImage.png'

const benefits: Array<BenefitType> = [
    {
        icon: <BuildingOfficeIcon className='h-6 w-6' />,
        title: 'Elite Training Environment',
        description: 'Experience top-tier fitness equipment and amenities designed to elevate every workout. Train with comfort and performance.'
    },

    {
        icon: <SwatchIcon className='h-6 w-6' />,
        title: 'Workouts for Every Style',
        description: "Whether you're building strength or enhancing flexibility, our expert-led classes are crafted to help you progress faster."
    },

    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: 'Certified Fitness Experts',
        description: 'Train with certified professionals who guide, motivate, and tailor programs to help you reach peak performance faster and smarter.'
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='benefits'
             className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADER */}
            <motion.div className='md:my-5 md:w-3/5'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
            >
                <HText>
                    NOT JUST A GYM. IT'S YOUR{' '}
                    
                    <span className='text-primary-500'>
                        TURNING POINT
                    </span>.
                </HText>

                <p className='my-5 text-sm'>
                    Experience next-level training with cutting-edge facilities, 
                    world-class coaching, and programs built to accelerate your 
                    progress. We're committed to your transformation every step of 
                    the way.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div className='md:flex items-center justify-between gap-8 mt-5'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit key={benefit.title}
                             icon={benefit.icon}
                             title={benefit.title}
                             description={benefit.description}
                             setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS & DESCRIPTION */}
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                {/* GRAPHIC */}
                <img className='mx-auto'
                     alt='benefits-image'
                     src={BenefitsImage}
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:-z-1 before:content-(--content-zigzag)'>
                            <motion.div initial='hidden'
                                        whileInView='visible'
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            hidden: { opacity: 0, x: 50 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                            >
                                <HText>
                                    ONE MOVEMENT, COUNTLESS BODIES—
                                    
                                    <span className='text-primary-500'>
                                        TRANSFORMED
                                    </span>.
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                    >
                        <p className='my-5'>
                            Join a thriving community of members achieving real fitness results. 
                            Experience expertly guided workouts, supportive coaching, and proven 
                            programs designed to help you build strength, confidence, and a 
                            healthier lifestyle. Every training session moves you closer to your 
                            goals—no guesswork, just progress.
                            <br /><br />

                            Push past limits with environments built for performance and recovery. 
                            From dynamic training to personalized support, everything is designed 
                            to keep you motivated, challenged, and seeing results that last.
                        </p>

                    </motion.div>

                    {/* BUTTON */}
                    <div className='relative mt-16'>
                        <div className='before:absolute before:-bottom-20 before:right-40 before:-z-1 before:content-(--content-flower)'>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Enter the Movement
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits