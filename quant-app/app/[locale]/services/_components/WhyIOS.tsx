import Image from 'next/image';

export default async function WhyIOS({ src, title, text }: { src: string, title: string, text: string }) {
    return (
        <div className="why-ios__item">
            <div className="why-ios__item-img">
                <Image src={src} alt={title} width={200} height={0} className='w-auto h-auto' />
            </div>
            <div className="why-ios__item-text">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}