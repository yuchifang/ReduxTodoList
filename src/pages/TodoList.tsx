import React, { useState, useEffect } from 'react'
import "antd/dist/antd.css"
import { Input, Button, List } from "antd";
import store from "../store/index";
import { CHANGE_INPUT, ADD_LIST, DELETE_LIST } from "../store/actionTypes"
import { TodoListStoreType } from "../InterFace"
import { changeInputAction, addListAction, deleteListAction } from "../store/actionCreateors"
//寫完自己整理一下 慢慢看一下整體的架構

import { TodoListUI } from "../components/TodoListUI"

export const TodoList: React.FC = ({ }) => {
    const [listState, setListState] = useState<TodoListStoreType>(store.getState())

    useEffect(() => {
        const storeChange = () => {
            setListState(store.getState())
        }
        store.subscribe(storeChange)
        //subscribe功用 如果 redux 變化了調用方法 
    }, [store])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    const handleAdd = () => {
        const action = addListAction(listState.inputValue)
        store.dispatch(action)
    }

    const handleDelete = (id: number) => {
        const action = deleteListAction(id)
        store.dispatch(action)
    }

    return (
        <TodoListUI
            handleInputChange={handleInputChange}
            listState={listState}
            handleDelete={handleDelete}
            handleAdd={handleAdd} />
    );
}