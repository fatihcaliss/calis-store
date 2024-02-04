import { ICategory } from '@/models/category.model';
import { fetchAllCategories } from '@/services';
import { useQuery } from '@tanstack/react-query';

const useGetAllCategories = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery<ICategory[]>({
    queryKey: ['getAllCategories'],
    queryFn: fetchAllCategories,
    placeholderData: [],
  });

  return { categories, error, isLoading };
};

export default useGetAllCategories;
