import type { Product } from '../types/product';
import { supabase } from './supabase';

export async function getProducts(): Promise<Product[]> {
  console.log('ENV URL:', import.meta.env.VITE_SUPABASE_URL);

  const response = await supabase
    .from('products')
    .select('*')
    .order('id');

  console.log('FULL SUPABASE RESPONSE:', response);

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.data ?? [];
}

export async function getProductById(id: number): Promise<Product | null> {
  const response = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.data;
}