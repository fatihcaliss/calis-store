import { IProduct } from '@/models/product.model';
import { fetchProducts } from '@/services';
import { useQuery } from '@tanstack/react-query';

const useGetProducts = (filterParams: Record<string, string>) => {
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
