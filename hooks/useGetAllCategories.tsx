import { ICategory } from '@/models/category.model';
import { fetchAllCategories } from '@/services';
import { useQuery } from '@tanstack/react-query';

const useGetAllCategories = (initialCategoriesData: ICategory[]) => {
  const {
    data: categories,
    error,
    isLoading,
    isFetching,
  } = useQuery<ICategory[]>({
    queryKey: ['getAllCategories'],
    queryFn: fetchAllCategories,
    initialData: initialCategoriesData,
    placeholderData: [],
  });

  return { categories, error, isLoading, isFetching };
};

export default useGetAllCategories;
