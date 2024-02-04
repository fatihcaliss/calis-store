import { IProduct } from '@/models/product.model';
import { fetchProductsByCategoryId } from '@/services';
import { useQuery } from '@tanstack/react-query';

const useGetCategoryProducts = (categoryId: number) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['getCategoryProducts'],
    queryFn: () => fetchProductsByCategoryId(categoryId),
    placeholderData: [],
  });

  return { products, error, isLoading };
};

export default useGetCategoryProducts;
