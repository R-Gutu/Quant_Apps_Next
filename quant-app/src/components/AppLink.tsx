import { Link } from "@/i18n/routing";
import { Typography } from "@mui/material";

interface AppLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const AppLink = ({ href, children, onClick }: AppLinkProps) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <Typography
        component="a"
        onClick={onClick}
        sx={{
          fontFamily: `"ClashDisplay", "Inter", sans-serif`,
          fontSize: "14px",
          lineHeight: "34px",
          color: "white",
          textAlign: "center",
          opacity: "0.75",
          fontWeight: "400",
          cursor: "pointer",
          position: "relative",
          width: "fit-content",
          transition: "all var(--transition)",
          "&:hover": {
            opacity: 1,
            transform: "translateX(5px)",
          },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};

export default AppLink;