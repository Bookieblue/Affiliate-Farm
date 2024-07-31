// pages/page.tsx
'use client'
import React, { ChangeEvent, Suspense, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import NestedDialog from '@/components/ui/FormField/NestedDialog'

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === 'text/csv') {
      setSelectedFile(file)
    } else {
      setSelectedFile(null)
      // Optionally, you can show an error message if the file type is not CSV
    }
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFormSubmit = () => {
    // Simulated form submission logic
    if (selectedFile) {
      // Perform any additional validation or submission logic here
      // For demonstration, setTimeout is used to simulate form submission delay
      setTimeout(() => {
        setIsSuccessDialogOpen(true)
      }, 1000)
    }
  }

  const handleCloseDialog = () => {
    setIsSuccessDialogOpen(false)
  }

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
              htmlFor='csvFile'
              className='block regular-16 mt-10 text-cream-50'
            >
              Upload sheet
            </label>
            <div className='relative rounded-md flex items-center justify-center'>
              <input
                type='file'
                id='csvFile'
                name='csvFile'
                accept='.csv'
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
          description='Brand swill to start benefitting from massive exposure and a quickly growing affiliate program spread though our targeted outreach to our bloggers & content creators'
        >
          <Button
            className='w-full mt-3'
            onClick={() => router.push('/upload-program')}
          >
            Go back now
          </Button>
        </NestedDialog>
      </section>
    </Suspense>
  )
}

export default Page
