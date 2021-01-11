export interface TodoListStoreType {
    inputValue: string,
    list: string[],
}
export interface TodoListUIProps {
    listState: TodoListStoreType,
    handleDelete: (id: number) => void,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleAdd: () => void

}
export interface ActionType {
    type: string,
    value: any
}