import { Category } from "./Category";

export interface Transaction {
    id: string;
    amount: string;
    date: string;
    name: string;
    category: Category;
    type: 'Received' | 'Sent';
}