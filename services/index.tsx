import axios from 'axios';

// Function to fetch all categories
export const fetchAllCategories = async () => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/categories/');
  return response.data;
};

// Function to fetch specific category by ID
export const fetchProductsByCategoryId = async (categoryId: number) => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`
  );
  return response.data;
};

// Function to fetch specific product by ID
export const fetchProductById = async (productId: string) => {
  const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
  return response.data;
};
