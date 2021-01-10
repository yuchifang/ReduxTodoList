import React, { useState } from 'react'
import "antd/dist/antd.css"
import { Input, Button, List } from "antd";
import store from "../store/index";
//寫完是是自己整理一下
interface TodoListProps {

}


export const TodoList: React.FC<TodoListProps> = ({ }) => {
    const [state, setstate] = useState(store.getState())
    console.log(state)
    return (
        <div style={{ margin: "10px" }}>
            <div>
                <Input
                    placeholder="Write Somthing"
                    style={{ width: "250px", marginRight: "10px" }} />
                <Button type="primary">增加</Button >
            </div>
            <div style={{ margin: "10px", width: "300px" }}>
                <List
                    bordered //邊框
                    dataSource={[]}
                    renderItem={item => (<List.Item>{item}</List.Item>)} //小項是怎麼渲染的
                />
            </div>
        </div>
    );
}