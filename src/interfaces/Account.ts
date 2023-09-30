import { ITransaction } from "./Transaction";

export interface IAccount {
    name: string;
    number: string;
    startBalance: number;
    balance: number;
    transactions: ITransaction[];
}