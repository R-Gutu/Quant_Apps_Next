'use client'

const onClickToggle = (e: any) => {
    e.currentTarget.closest(".faq__accordion-item").classList.toggle("active");
};

export default function Accordion({ num, title, text }: { num: number, title: string, text: string }) {
    return (
        <div className="faq__accordion-item">
            <div
                className="faq__accordion-header"
                data-toggle={`ques#${num}`}
                onClick={onClickToggle}
            >
                <div className="working-process-accordion__header">
                    <span>0{num}</span>

                    <h2>{title}</h2>
                </div>

                <span className="faq__accordion-close"></span>
            </div>

            <div className="faq__accordion-content" id={`ques${num}`}>
                <p>{text}</p>
            </div>
        </div>
    )
}