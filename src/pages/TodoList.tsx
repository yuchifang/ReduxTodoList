import React, { useState, useEffect } from 'react'
import "antd/dist/antd.css"
import { Input, Button, List } from "antd";
import store from "../store/index";
import { changeInput, addList } from "../store/actionType"
import { TodoListStateType } from "../InterFace"
//寫完自己整理一下 慢慢看一下整體的架構



export const TodoList: React.FC = ({ }) => {
    const [listState, setListState] = useState<TodoListStateType>(store.getState())

    useEffect(() => {
        const storeChange = () => {
            setListState(store.getState())
        }
        store.subscribe(storeChange)
        //subscribe功用 如果 redux 變化了調用方法 
    }, [store])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const action = {
            type: changeInput,
            value: e.target.value
        }
        store.dispatch(action)
    }

    const handleClick = () => {
        const action = {
            type: addList,
            value: listState.inputValue
        }
        store.dispatch(action)
    }

    return (
        <div style={{ margin: "10px" }}>
            <div>
                <Input
                    placeholder={listState.inputValue}
                    style={{ width: "250px", marginRight: "10px" }}
                    onChange={handleInputChange}
                    value={listState.inputValue}
                />
                <Button onClick={handleClick} type="primary">增加</Button >
            </div>
            <div style={{ margin: "10px", width: "300px" }}>
                <List
                    bordered //邊框
                    dataSource={listState.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)} //小項是怎麼渲染的
                />
            </div>
        </div>
    );
}