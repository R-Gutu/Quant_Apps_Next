
import ProjectType from '@/lib/types/ProjectType'
import Image from 'next/image'

export default function Project({ src, title, description } : ProjectType) {
    return (
        <div className="our-work__item d-flex">
            <div className="our-work__item-img">
                <Image src={src} alt={title} width={400} height={0} className='w-auto h-auto'/>
            </div>
            <div className="our-work__item-text items-center">
                <h4>{title}</h4>
                <p className='!font-clash !font-regular !text-[15px]'>{description}</p>
            </div>
        </div>
    )
}