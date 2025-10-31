import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ContactUsImage from '@/assets/ContactUsImage.png'
import HText from '@/shared/HText'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-gray-200 px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-primary-300 focus:ring-offset-0`
    
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()
  
    const onSubmit = async (e: any) => {
        const isValid = await trigger()
        
        if (!isValid) {
            e.preventDefault()
        }
    }

    return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER */}
            <motion.div className='md:w-3/5'
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
                    <span className='text-primary-500'>
                        CONNECT WITH US
                    </span> 
                    
                    {' '}AND IGNITE YOUR DRIVE.
                </HText>

                <p className='my-5'>
                    Whether you're curious, motivated, or ready to begin—we're here to 
                    answer your questions, guide your next steps, and help you move 
                    forward with confidence. Our team is committed to making sure you 
                    have everything you need to start strong and stay on track toward 
                    your fitness goals.
                </p>
            </motion.div>

            {/* FORM & IMAGE */}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div className='mt-10 basis-3/5 md:mt-0'
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                >
                    <form target='_blank'
                          onSubmit={onSubmit}
                          action='https://formsubmit.co/08bc47b59996f2e134f9e626dc7396f0'
                          method='POST'
                    >
                        <input className={inputStyles}
                               type='text'
                               placeholder='Name'
                               {...register('name', {
                                    required: true,
                                    maxLength: 100,
                               })} 
                        />

                        {errors.name && (
                            <p className='-mt-3 mb-5 text-red-600'>
                                <ExclamationCircleIcon className='h-5 w-5 mr-1 -mt-1 inline' />
                                {errors.name.type === 'required' && 'This field is required.'}
                                {errors.name.type === 'maxLength' && 'Max length is 100 characters.'}
                            </p>
                        )}

                        <input className={inputStyles}
                               type='email'
                               placeholder='Email'
                               {...register('email', {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                               })} 
                        />
                        
                        {errors.email && (
                            <p className='-mt-3 mb-5 text-red-600'>
                                <ExclamationCircleIcon className='h-5 w-5 mr-1 -mt-1 inline' />
                                {errors.email.type === 'required' && 'This field is required.'}
                                {errors.email.type === 'pattern' && 'Invalid email address.'}
                            </p>
                        )}

                        <textarea className={inputStyles}
                               placeholder='Type your message here...'
                               rows={4}
                               cols={50}
                               {...register('message', {
                                    required: true,
                                    maxLength: 2000,
                               })} 
                        />

                        {errors.message && (
                            <p className='-mt-3 text-red-600'>
                                <ExclamationCircleIcon className='h-5 w-5 mr-1 -mt-1 inline' />
                                {errors.message.type === 'required' && 'This field is required.'}
                                {errors.message.type === 'maxLength' && 'Max length is 2000 characters.'}
                            </p>
                        )}

                        <button type='submit'
                                className='mt-5 rounded-lg bg-secondary-400 px-10 py-2 transition duration-500 hover:text-white hover:bg-primary-500 font-bold'
                        >
                            Submit
                        </button>
                    </form>
                </motion.div>

                <motion.div className='relative mt-16 basis-2/5 md:mt-0'
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                >
                    <div className='md:before:content-(--content-logo3) w-full before:absolute before:-bottom-20 before:-right-10 before:-z-1'>
                        <img className='w-full'
                             alt='contact-us-image'
                             src={ContactUsImage} />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
    )
}

export default ContactUs