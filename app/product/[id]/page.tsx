import { ProductDetailPageBanner } from '@/components/ProductDetailPageBanner/ProductDetailPageBanner';
import { fetchProductById } from '@/services';
import { Container } from '@mantine/core';

export default async function Page({ params }: { params: { id: string } }) {
  let initialData;
  try {
    initialData = await fetchProductById(params.id);
  } catch (error) {
    console.log(error);
  }

  return (
    <Container size={'lg'}>
      <ProductDetailPageBanner initialData={initialData} initialId={params.id} />
    </Container>
  );
}
