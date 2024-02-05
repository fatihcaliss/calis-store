import { IProduct } from '@/models/product.model';
import { fetchProducts } from '@/services';
import { useQuery } from '@tanstack/react-query';

const useGetProducts = () => {
  const {
    data: productsData,
    error,
    isFetching,
  } = useQuery<IProduct[]>({
    queryKey: ['getProducts'],
    queryFn: () => fetchProducts(),
    // enabled: !!productId,
  });

  return { productsData, error, isFetching };
};

export default useGetProducts;
