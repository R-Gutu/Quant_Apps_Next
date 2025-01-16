import Image, { StaticImageData } from 'next/image';

export default function WhyIOS({ src, title, text }: { src: StaticImageData, title: string, text: string }) {
    return (
        <div className="why-ios__item">
            <div className="why-ios__item-img">
                <Image src={src} alt="" />
            </div>
            <div className="why-ios__item-text">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}