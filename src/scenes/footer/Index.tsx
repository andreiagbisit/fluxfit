import Logo4 from '@/assets/Logo4.png'
import Link from './Link'
import type { SelectedPage } from '@/shared/types'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className='bg-primary-300 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img alt='logo-4' src={Logo4} />

                <p className='my-5'>
                    FluxFit brings together passionate individuals who strive to become 
                    their strongest selves. Through expert-led workouts, supportive 
                    trainers, and a community built on grit and progress, we make every 
                    session a step toward lasting strength and confidence.
                </p>

                <p>
                    <b>&copy; 2025 FluxFit</b>. All Rights Reserved.
                </p>
            </div>
            
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>
                    Links
                </h4>
                    <p className='my-5'>
                        <Link 
                            page='Home' 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </p>

                    <p className='my-5'>
                        <Link 
                            page='Benefits' 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </p>
                    
                    <p className='my-5'>
                        <Link 
                            page='Our Classes'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} 
                        />
                    </p>
                    
                    <p>
                        <Link 
                            page='Contact Us'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </p>
            </div>
            
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>
                    Contact Us
                </h4>

                <p className='my-5 flex items-start gap-2'>
                    <EnvelopeIcon className='h-5 w-5 mt-0.5 shrink-0' /> fluxfitph@gmail.com
                </p>

                <p className='my-5 flex items-start gap-2'>
                    <MapPinIcon className='h-5 w-5 mt-0.5 shrink-0' /> Unit 302, SkyPark Tower, Manuel A. Roxas Highway, Brgy. Malabanias, Angeles City, Pampanga 2009
                </p>

                <p className='flex items-start gap-2'>
                    <PhoneIcon className='h-5 w-5 mt-0.5 shrink-0' /> (+63)-917-458-3629
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer