import { Transaction } from "./Transaction";

export interface Account {
    name: string;
    startBalance: number;
    balance: number;
    transactions: Transaction[];
}