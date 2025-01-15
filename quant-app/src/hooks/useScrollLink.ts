import { useNavigate } from "react-router-dom";

export const useScrollLink = () => {
  // const navigate = useNavigate();

  const navigateWithScroll = (e : any, route : any, scrollTo : any) => {
    e.preventDefault();
    // navigate(route, { state: { scrollTo: scrollTo } });
  };

  return { navigateWithScroll };
};