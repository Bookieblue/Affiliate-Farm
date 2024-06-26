// components/CategoryForm.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Button } from "../ui/button";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface CategoryFormProps {
    onAddCategory: (category: { no: string; category: string; programNo: string; publishedDate: string; }) => void;
  }
  
  const CategoryForm: React.FC<CategoryFormProps> = ({ onAddCategory }) => {
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryFAQ, setCategoryFAQ] = useState<string>("");

  const handleCategoryNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleFAQChange = (value: string) => {
    setCategoryFAQ(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Create a new category object and call onAddCategory
    const newCategory = {
      no: (Math.random() * 1000).toFixed(0), // Generate a random number for the category number
      category: categoryName,
      programNo: '123 Programs', // This can be adjusted as needed
      publishedDate: new Date().toISOString().split('T')[0], // Current date
    };
    onAddCategory(newCategory);
    setCategoryName('');
    setCategoryFAQ('');
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-cream-50  text-base font-medium mb-2" htmlFor="categoryName">
            Category name
          </label>
          <input
            id="categoryName"
            type="text"
            value={categoryName}
            onChange={handleCategoryNameChange}
            className="w-full px-3 py-2 text-gray-10 bg-transparent  border border-gray-20 rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base text-cream-50 font-medium mb-2" htmlFor="categoryFAQ">
            Category FAQ
          </label>
          <ReactQuill
            value={categoryFAQ}
            onChange={handleFAQChange}
            className="bg-transparent text-gray-10 rounded-md "
          />
        </div>
        <Button className="w-full">Add category</Button>
      </form>
    </div>
  );
};

export default CategoryForm;
