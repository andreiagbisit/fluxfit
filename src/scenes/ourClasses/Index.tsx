import { SelectedPage, type ClassType } from '@/shared/types'
import Class1 from '@/assets/Class1.png'
import Class2 from '@/assets/Class2.png'
import Class3 from '@/assets/Class3.png'
import Class4 from '@/assets/Class4.png'
import Class5 from '@/assets/Class5.png'
import Class6 from '@/assets/Class6.png'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'

const classes: Array<ClassType> = [
    {
        name: 'Weight Training',
        description: "Unleash your potential through focused strength sessions that sculpt muscle, build endurance, and amplify power. Whether you're perfecting your form or pushing personal bests, every lift brings you closer to the physique and confidence you've been working for.",
        image: Class1
    },

    {
        name: 'Yoga Training',
        description: 'Find balance in movement and calm in strength. Our yoga classes blend flexibility, mindfulness, and control—helping you reconnect with your body while improving posture, mobility, and mental clarity. Breathe deeper, move smoother, and feel centered with every flow.',
        image: Class2
    },

    {
        name: 'Ab Core Traning',
        description: "Tighten, tone, and strengthen your foundation. These ab-focused workouts target every layer of your core with precision and intensity, building stability, balance, and serious definition. It's not just about abs—it's about total body control.",
        image: Class3
    },

    {
        name: 'Resistance Band Training',
        description: 'Redefine resistance with dynamic, full-body band workouts that challenge your muscles in new ways. Every stretch and pull builds tone, strength, and endurance—all while being joint-friendly and adaptable for any fitness level.',
        image: Class4
    },

    {
        name: 'Kettlebell Training',
        description: 'Combine strength, speed, and coordination with high-intensity kettlebell sessions that fire up your entire body. From swings to snatches, this is functional training at its best—explosive, efficient, and endlessly rewarding.',
        image: Class5
    },

    {
        name: 'Core Essentials Training',
        description: "Build the foundation for every movement with our Core Essentials Training sessions. This class focuses on improving posture, stability, and functional strength through guided ab and midsection exercises. Whether you’re a beginner or a seasoned athlete, our trainers ensure proper form and technique so you can unlock real strength from your center.",
        image: Class6
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div className='mx-auto w-5/6'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
            >
                <div className='md:w-3/5'>
                    <HText>
                        THE PATHS TO <span className='text-primary-500'>POWER</span>.
                    </HText>

                    <p className='py-5'>
                        Push harder, move smarter, and stay inspired. Our classes are 
                        built to ignite your energy, sharpen your strength, and keep you
                        coming back for more—every rep, every sweat, every session 
                        designed to push your limits and fuel real transformation.
                    </p>
                </div>
            </motion.div>

            <div className='mt-10 h-[373px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassType, index) => (
                        <Class key={`item.name-${index}`} 
                               name={item.name}
                               description={item.description}
                               image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses