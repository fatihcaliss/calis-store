import { IProduct } from '@/models/product.model';
import { fetchProductById } from '@/services';
import { useQuery } from '@tanstack/react-query';

const useGetProductDetail = (productId: string) => {
  const {
    data: productDetailData,
    error,
    isFetching,
  } = useQuery<IProduct>({
    queryKey: ['getProductDetail', productId],
    queryFn: () => fetchProductById(productId),
    enabled: !!productId,
  });

  return { productDetailData, error, isFetching };
};

export default useGetProductDetail;
