export type PaginationType = {
    amount: number;
    page: number;
    entries: number;
    onPagination: React.Dispatch<React.SetStateAction<number>>,
    onChange: React.Dispatch<React.SetStateAction<number>>
} 