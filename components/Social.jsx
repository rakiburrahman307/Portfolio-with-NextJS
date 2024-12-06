import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Social = ({ containerStyles, iconStyles }) => {
  const icons = [
    { icon: <FaFacebook />, path: "https://www.facebook.com/rakiburrahman305" },
    { icon: <FaGithub />, path: "https://github.com/rakiburrahman307" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/md-rakibur-rahman-14b33a2a4" },
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
