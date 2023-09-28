import { Category } from "./Category";

export interface Transaction {
    amount: string;
    date: string;
    name: string;
    category: Category;
    type: 'Received' | 'Sent';
}