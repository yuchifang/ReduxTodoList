import React from 'react'
import { Input, Button, List } from "antd";
import { TodoListUIProps } from "../InterFace"


export const TodoListUI: React.FC<TodoListUIProps> = ({ listState, handleDelete, handleInputChange, handleAdd }) => {
    return (
        <div style={{ margin: "10px" }}>
            <div>
                <Input
                    placeholder={listState.inputValue}
                    style={{ width: "250px", marginRight: "10px" }}
                    onChange={handleInputChange}
                    value={listState.inputValue}
                />
                <Button onClick={handleAdd} type="primary">增加</Button >
            </div>
            <div style={{ margin: "10px", width: "300px" }}>
                <List
                    bordered //邊框
                    dataSource={listState.list}
                    renderItem={(item, id) => (
                        <List.Item>
                            <List.Item.Meta description={item} />
                            <div>
                                <Button onClick={() => handleDelete(id)} type="default">X</Button>
                            </div>
                        </List.Item>
                    )} //小項是怎麼渲染的
                />
            </div>
        </div>);
}