import { ICategory } from "./Category";

export interface ITransaction {
    id: string;
    amount: string;
    date: string;
    name: string;
    category: ICategory;
    type: 'Received' | 'Sent';
}