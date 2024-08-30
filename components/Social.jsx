import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Social = ({ containerStyles, iconStyles }) => {
  const icons = [
    { icon: <FaFacebook />, path: "" },
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" },
  ];
  return (
    <div className={containerStyles}>
      {icons.map(({ icon, path }, index) => (
        <Link
          key={index}
          href={path}
          target='_blank'
          rel='noopener noreferrer'
          className={iconStyles}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
