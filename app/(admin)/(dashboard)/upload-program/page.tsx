'use client';
import React, {
  ChangeEvent,
  Suspense,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NestedDialog from '@/components/ui/FormField/NestedDialog';
import { useCreateBulkProgram } from '@/services/models/hooks/program/hook';

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const { data, mutate, isPending, isError, isSuccess } =
    useCreateBulkProgram();

  useEffect(() => {
    if (isSuccess && selectedFile) {
      setSelectedFile(null);
      setIsSuccessDialogOpen(true);
    }
  }, [isSuccess]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('handleFileChange called'); // Log to check if function is called
    const file = e.target.files?.[0];
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop()?.toLowerCase();
      const acceptedFileExtensions = ['xls', 'xlsx'];

      console.log('Selected file:', file); // Log file details
      console.log('File extension:', fileExtension);

      if (fileExtension && acceptedFileExtensions.includes(fileExtension)) {
        setSelectedFile(file);
      } else {
        setSelectedFile(null);
        console.log('Invalid file type selected');
      }
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFormSubmit = () => {
    // Simulated form submission logic
    if (selectedFile) {
      mutate(selectedFile);
    }
  };

  const handleCloseDialog = () => {
    setIsSuccessDialogOpen(false);
  };

  return (
    <Suspense fallback={<p>Loading....</p>}>
      <section className='padding-container'>
        <div className='bg-gray-40 mt-20 w-full p-3 lg:p-6 h-fit rounded-lg'>
          <div>
            <p className='bold-24 text-cream-50'>
              Bulk upload affiliate programs
            </p>
            <p className='regular-16 text-cream-20'>
              Add new affiliate program to site with XLS sheet.{' '}
              <Link href='/' className='text-yellow-50 underline'>
                Download sample here
              </Link>
              .
            </p>
          </div>
          <div className='space-y-4'>
            <label
              htmlFor='excelFile'
              className='block regular-16 mt-10 text-cream-50'
            >
              Upload sheet
            </label>
            <div className='relative rounded-md flex items-center justify-center'>
              <input
                type='file'
                id='excelFile'
                name='excelFile'
                accept='.xls,.xlsx'
                ref={fileInputRef}
                className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                onChange={handleFileChange}
              />
              <button
                type='button'
                className='relative z-10 py-2 px-4 text-sm w-full bg-transparent text-gray-10 border border-[#32312C] rounded-md'
                onClick={handleButtonClick}
              >
                Upload sheet here
              </button>
            </div>
            {selectedFile && (
              <p className='text-sm text-gray-500'>
                Selected file: {selectedFile.name}
              </p>
            )}
          </div>
          <Button className='w-full mt-10' onClick={handleFormSubmit}>
            Submit Affiliate Program
          </Button>
        </div>
        <NestedDialog
          isOpen={isSuccessDialogOpen}
          onClose={handleCloseDialog}
          title='Affiliate program uploaded'
          description='Brand swill to start benefitting from massive exposure and a quickly growing affiliate program spread though our targeted outreach to our bloggers & content creators'
        >
          <Button
            className='w-full mt-3'
            onClick={() => router.push('/program-listing')}
          >
            Go back now
          </Button>
        </NestedDialog>
      </section>
    </Suspense>
  );
};

export default Page;
