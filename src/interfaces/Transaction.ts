export interface Transaction {
    amount: string;
    date: string;
    name: string;
    type: 'Received' | 'Sent';
}