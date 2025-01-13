import { useEffect } from "react";

const MobileMenu = () => {

  // useEffect(() => {
  //   const target = document.getElementById("projects");
  //   const menuItem = document.querySelectorAll(
  //     '.menu__item[data-id="projects"]'
  //   );

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       menuItem.forEach((e) => e.classList.add("active"));
    //     } else {
    //       menuItem.forEach((e) => e.classList.remove("active"));
    //     }
    //   });
    // });

  //   if (target) {
  //     observer.observe(target);
  //   } else {
  //     menuItem.forEach((e) => e.classList.remove("active"));
  //   }

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [location]);

  // const onClickMobileLink = () => {
  //   const mobileMenu = document.querySelector(".mobile-menu");
  //   mobileMenu.classList.remove("active");
  // };

  // const onClickClose = () => {
  //   const mobileMenu = document.querySelector(".mobile-menu");
  //   mobileMenu.classList.remove("active");
  // };

  return (
    <div className="mobile-menu">
      <span className="close" 
      // onClick={() => onClickClose()}
      ></span>
      <ul className="menu">
        <li
          className={`menu__item mobile-link ${
            location.pathname === "/services" ? "active" : ""
          }`}
          // onClick={() => onClickMobileLink()}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // navigate("/services");
            }}
          >
            Services
          </a>
        </li>
        <li
          className="menu__item mobile-link"
          data-id="projects"
          // onClick={() => onClickMobileLink()}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // navigate("/main", { state: { scrollTo: "projects" } });
            }}
          >
            Projects
          </a>
        </li>
        <li
          className={`menu__item mobile-link ${
            location.pathname === "/about-us" ? "active" : ""
          }`}
          // onClick={() => onClickMobileLink()}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // navigate("/about-us");
            }}
          >
            About us
          </a>
        </li>
        <li
          className={`menu__item mobile-link ${
            location.pathname === "/contact-us" ? "active" : ""
          }`}
          // onClick={() => onClickMobileLink()}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // navigate("/contact-us");
            }}
          >
            Contact us
          </a>
        </li>
        <li
          className={`menu__item mobile-link ${
            location.pathname === "/faqs" ? "active" : ""
          }`}
          // onClick={() => onClickMobileLink()}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // navigate("/faqs");
            }}
          >
            FAQs
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
