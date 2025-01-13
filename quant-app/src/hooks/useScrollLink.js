import { useNavigate } from "react-router-dom";

export const useScrollLink = () => {
  const navigate = useNavigate();

  const navigateWithScroll = (e, route, scrollTo) => {
    e.preventDefault();
    navigate(route, { state: { scrollTo: scrollTo } });
  };

  return { navigateWithScroll };
};