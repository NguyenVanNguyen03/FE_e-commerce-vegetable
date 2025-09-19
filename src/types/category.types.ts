export interface Category {
  _id: string;
  name: string;
  image: string;
}

export interface CategoryResponse {
  success: boolean;
  data: Category[];
}
