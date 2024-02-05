import { IProduct } from '@/models/product.model';
import { fetchProducts } from '@/services';
import { useQuery } from '@tanstack/react-query';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGetProducts = (filterParams: Record<string, any> | undefined) => {
  const {
    data: productsData,
    error,
    isFetching,
  } = useQuery<IProduct[]>({
    queryKey: ['getProducts', filterParams],
    queryFn: () => fetchProducts(filterParams),
    // enabled: !!productId,
  });

  return { productsData, error, isFetching };
};

export default useGetProducts;
