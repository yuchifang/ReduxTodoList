import React, { useState, useEffect } from 'react'
import "antd/dist/antd.css"
import store from "../store/index";
import { TodoListStoreType } from "../InterFace"
import { changeInputAction, addListAction, deleteListAction, getInitListAction } from "../store/actionCreateors"
import axios from "axios"

//寫完自己整理一下 慢慢看一下整體的架構

import { TodoListUI } from "../components/TodoListUI"

export const TodoList: React.FC = ({ }) => {
    const [listState, setListState] = useState<TodoListStoreType>(store.getState())

    useEffect(() => {
        const getData = () => {
            axios.get("http://localhost:3000/list").then((res) => {
                console.log("res", res)
                const action = getInitListAction(res.data)
                store.dispatch(action)
            }).catch((res) => {
                console.log("res", res)
            })
        }

        getData()
    }, [])

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