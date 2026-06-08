import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ProductCard } from '../components/ui/ProductCard';
import { getProducts } from '../lib/products';

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <h1>Loading products...</h1>;
  }

  if (error instanceof Error) {
    return (
      <>
        <h1>Could not load products</h1>
        <pre>{error.message}</pre>
      </>
    );
  }

  const categories = [
    'All',
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <div>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </>
  );
}