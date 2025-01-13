'use client'

const Faqs = () => {

  //@ts-ignore
  const onClickToggle = (e) => {
    e.currentTarget.closest(".faq__accordion-item").classList.toggle("active");
  };

  return (
    <>
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="faq">
            <h1 className="faq__title">FAQs</h1>
            <div className="faq__accordion">
              <div className="faq__accordion-left">
                <div className="faq__accordion-item">
                  <div
                    className="faq__accordion-header"
                    data-toggle="#ques1"
                    onClick={onClickToggle}
                  >
                    <h2>What services do you offer?</h2>
                    <span className="faq__accordion-close"></span>
                  </div>
                  <div className="faq__accordion-content" id="ques1">
                    <p>
                      Quantica specializes in iOS mobile app development, UI/UX
                      design, and logo creation. We offer tailored solutions,
                      from app concept and design to full development and
                      deployment, along with long-term support and optimization.
                    </p>
                  </div>
                </div>
                <div className="faq__accordion-item">
                  <div
                    className="faq__accordion-header"
                    data-toggle="#ques2"
                    onClick={onClickToggle}
                  >
                    <h2>What platforms do you develop for?</h2>
                    <span className="faq__accordion-close"></span>
                  </div>
                  <div className="faq__accordion-content" id="ques2">
                    <p>
                      Quantica focuses on iOS mobile app development. Our
                      expertise lies in building apps optimized for the Apple
                      ecosystem, ensuring high performance, intuitive user
                      interfaces, and seamless integration with iOS devices.
                    </p>
                  </div>
                </div>
                <div className="faq__accordion-item">
                  <div
                    className="faq__accordion-header"
                    data-toggle="#ques3"
                    onClick={onClickToggle}
                  >
                    <h2>Can you build a custom app for my business?</h2>
                    <span className="faq__accordion-close"></span>
                  </div>
                  <div className="faq__accordion-content" id="ques3">
                    <p>
                      Yes! We work closely with businesses to create custom iOS
                      apps that align with your brand and specific needs. From
                      small startups to established companies, we craft apps
                      that help you stand out in the competitive digital
                      landscape.
                    </p>
                  </div>
                </div>
                <div className="faq__accordion-item">
                  <div
                    className="faq__accordion-header"
                    data-toggle="#ques4"
                    onClick={onClickToggle}
                  >
                    <h2>How long does it take to develop an app?</h2>
                    <span className="faq__accordion-close"></span>
                  </div>
                  <div className="faq__accordion-content" id="ques4">
                    <p>
                      The development timeline depends on the complexity and
                      features of the app. Typically, app development can take
                      anywhere from 1 to 3 months, including the design,
                      development, and testing phases. We work closely with
                      clients to set clear milestones and ensure timely
                      delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq__accordion-right">
                <div className="faq__accordion-item">
                  <div
                    className="faq__accordion-header"
                    data-toggle="#ques5"
                    onClick={onClickToggle}
                  >
                    <h2>How much does app development cost?</h2>
                    <span className="faq__accordion-close"></span>
                  </div>
                  <div className="faq__accordion-content" id="ques5">
                    <p>
                      The cost of app development varies depending on the app’s
                      features, complexity, and design requirements. After
                      discussing your project in detail, we provide a
                      transparent, customized quote that fits your budget and
                      business goals.
                    </p>
                  </div>
                </div>
                <div className="faq__accordion-item">
                  <div
                    className="faq__accordion-header"
                    data-toggle="#ques6"
                    onClick={onClickToggle}
                  >
                    <h2>Do you offer support after the app is launched?</h2>
                    <span className="faq__accordion-close"></span>
                  </div>
                  <div className="faq__accordion-content" id="ques6">
                    <p>
                      Yes, we offer ongoing support and maintenance services
                      even after your app is launched. Our team ensures that
                      your app stays updated, secure, and runs smoothly as iOS
                      updates or user needs evolve.
                    </p>
                  </div>
                </div>
                <div className="faq__accordion-item">
                  <div
                    className="faq__accordion-header"
                    data-toggle="#ques7"
                    onClick={onClickToggle}
                  >
                    <h2>What sets Quantica apart?</h2>
                    <span className="faq__accordion-close"></span>
                  </div>
                  <div className="faq__accordion-content" id="ques7">
                    <p>
                      At Quantica, we blend creativity with technical expertise.
                      Our founder and CEO, Veaceslav Soltan, started his career
                      as a graphic designer, giving us a unique edge in
                      delivering visually stunning and user-friendly apps. We
                      offer personalized service, ensuring your app is crafted
                      to your exact specifications.
                    </p>
                  </div>
                </div>
                <div className="faq__accordion-item">
                  <div
                    className="faq__accordion-header"
                    data-toggle="#ques8"
                    onClick={onClickToggle}
                  >
                    <h2>How do I get started with Quantica?</h2>
                    <span className="faq__accordion-close"></span>
                  </div>
                  <div className="faq__accordion-content" id="ques8">
                    <p>
                      Getting started is simple! Contact us for a free
                      consultation where we’ll discuss your app idea, goals, and
                      requirements. From there, we’ll guide you through the
                      development process and help bring your vision to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="contact-us-img"></span>
        <span className="contact-us-img-2"></span>
      </section>
    </>
  );
};

export default Faqs;
