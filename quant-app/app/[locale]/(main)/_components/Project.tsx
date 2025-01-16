'use client'
import Image from 'next/image'

export default function Project({ src, title, description } : any) {
    return (
        <div className="our-work__item d-flex">
            <div className="our-work__item-img">
                <Image src={src} alt="" />
            </div>
            <div className="our-work__item-text">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}