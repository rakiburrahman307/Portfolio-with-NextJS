"use client"
import { Button } from '@/components/ui/button';
import resume from '../assets/resume/resume.pdf';
import { FiDownload } from 'react-icons/fi';
const DownloadFile = ({ fileContent, fileType, fileName}) => {
  const handleDownload = () => {
    const blob = new Blob([fileContent], { type: fileType });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
    onClick={handleDownload}
    variant='outline'
    size='lg'
    className='uppercase flex items-center gap-2'
  >
    <span>Download CV</span>
    <FiDownload className='text-xl' />
  </Button>
  );
};

export default DownloadFile;
