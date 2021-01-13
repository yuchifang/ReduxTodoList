import React, { useState, useEffect } from 'react'
import "antd/dist/antd.css"
import { TodoListStoreType } from "../InterFace"
import { changeInputAction, addListAction, deleteListAction, geyMyListAction } from "../store/actionCreateors"
//寫完自己整理一下 慢慢看一下整體的架構
import { useDispatch, useSelector } from "react-redux"
import { TodoListUI } from "../components/TodoListUI"

export const TodoList: React.FC = ({ }) => {
    const listState = useSelector((state: TodoListStoreType) => state)
    const dispatch = useDispatch()
    // const [listState, setListState] = useState<TodoListStoreType>(store.getState())

    useEffect(() => {

        const action: any = geyMyListAction()
        dispatch(action)
    }, [])

    // useEffect(() => {

    //     const storeChange = () => {
    //         setListState(store.getState())
    //     }
    //     store.subscribe(storeChange)
    //     //subscribe功用 如果 redux 變化了調用方法 
    // }, [store])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const action = changeInputAction(e.target.value)
        dispatch(action)
    }

    const handleAdd = () => {
        if (listState.inputValue !== "") {

            const action = addListAction(listState.inputValue)
            dispatch(action)
        } else {
            alert("請輸入字串")
        }
    }

    const handleDelete = (id: number) => {
        const action = deleteListAction(id)
        dispatch(action)
    }
    return (
        <TodoListUI
            handleInputChange={handleInputChange}
            listState={listState}
            handleDelete={handleDelete}
            handleAdd={handleAdd} />
    );
}