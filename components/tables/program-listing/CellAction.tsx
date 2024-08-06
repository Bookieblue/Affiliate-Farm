import React, { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { DeleteIcon, Edit2Icon, EyeIcon, MoreHorizontal } from 'lucide-react';
import MainDialog from '../../../components/ui/FormField/MainDialog';
import { ProgramResponse } from '@/services/models/hooks/program/type';
import { useGetCategories } from '@/services/models/hooks/category/hook';
import { capitalizeFirstLetter } from '@/lib/helpers/formatWord';
import SubmitProgramForm from '@/components/forms/submitProgram';
import SelectInput from '@/components/ui/FormField/SelectInput';

interface ColumnsProps {
  onDeleteRow: (row: ProgramResponse) => void;
  onEditCategory: (row: ProgramResponse, newCategory: string) => void;
}

const CellAction: React.FC<ColumnsProps & { row: any }> = ({
  onDeleteRow,
  onEditCategory,
  row,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(''); // State to track which action triggered the modal
  const details = row.original;
  const [selectedRow, setSelectedRow] = useState<ProgramResponse | null>(null); // Track the selected row
  const [newCategory, setNewCategory] = useState(details.niche_details.name); // Initialize with current category

  const { data, isLoading, isSuccess } = useGetCategories();

  useEffect(() => {
    // Update newCategory when details change
    setNewCategory(details.niche_details.name);
  }, [details]);

  const handleViewDetails = (action: string) => {
    setModalOpen(true);
    setModalAction(action);
    setSelectedRow(details); // Set the selected row for editing
    // Set newCategory to current category value when opening modal
    setNewCategory(details.niche_details.name);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalAction('');
    setSelectedRow(null);
  };

  const handleEditCategory = () => {
    if (selectedRow) {
      onEditCategory(selectedRow, newCategory);
    }
    handleCloseModal();
  };

  const handleEditProgram = async (formData: ProgramResponse) => {
    // Logic for editing program
    handleCloseModal();
  };

  const handleDeleteProgram = () => {
    if (selectedRow) {
      onDeleteRow(selectedRow);
    }
    handleCloseModal();
  };


  const options = data
    ? data.map((category) => ({
        value: category.code,
        label: `${capitalizeFirstLetter(category.name)} Affiliate Program`,
      }))
    : [];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0 '>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleViewDetails('editCategory')}>
            <EyeIcon className='size-4 mr-2' /> Edit Category
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleViewDetails('editProgram')}>
            <Edit2Icon className='size-4 mr-2' /> Edit Program
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleViewDetails('deleteProgram')}>
            <DeleteIcon className='size-4 mr-2' /> Delete Program
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {isModalOpen && (
        <MainDialog
          isOpen={isModalOpen}
          onOpenChange={handleCloseModal}
          title={
            modalAction === 'editCategory'
              ? 'Edit Program Category'
              : modalAction === 'editProgram'
              ? 'Edit Program'
              : 'Delete Program'
          }
          description={
            modalAction === 'editCategory'
              ? 'Set a new category for the selected program.'
              : modalAction === 'editProgram'
              ? 'Edit program details here.'
              : 'Are you sure you want to delete the selected program? This action cannot be undone.'
          }
        >
          {modalAction === 'editCategory' && isSuccess && (
            <div>
              <SelectInput
                name="category"
                placeholder=""
                options={options}
                value={newCategory} // Ensure this is the current category
                onChange={(value) => setNewCategory(value)} // Directly pass the selected value
              />
              <Button onClick={handleEditCategory} className='w-full mt-4'>
                Update Category
              </Button>
            </div>
          )}
          {modalAction === 'editProgram' && (
            <div>
              <SubmitProgramForm isEdit={true} buttonText='Save Changes' onSubmit={handleEditProgram}/>
            </div>
          )}
          {modalAction === 'deleteProgram' && (
            <div>
              <Button onClick={handleDeleteProgram} className='w-full'>
                Yes, delete program
              </Button>
            </div>
          )}
        </MainDialog>
      )}
    </>
  );
};

export default CellAction;
