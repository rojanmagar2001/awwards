import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "@/animation/menu";

interface DataProps {
  title: string;
  href: string;
  index: number;
}

interface LinkProps {
  data: DataProps;
  isActive: boolean;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
}

export const NavLink: React.FC<LinkProps> = ({
  data,
  isActive,
  setSelectedIndicator,
}) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[10px] h-[10px] bg-white rounded-full absolute left-[-30px]"
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default Link;
