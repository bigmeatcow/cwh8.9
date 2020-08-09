import React, { useState, useEffect } from "react";
import { Form, Card, Input, Button, message } from 'antd';

function Edit(props) {
    const { getFieldDecorator } = props.form;
    const handleSubmit = e => {
        console.log(e);
        e.preventDefault();

        props.form.validateFieldAndScroll((err,values) => {
            if(!err) {
                console.log(values);
                console.log("提交");
            } else {
                message.error("请输入正确的内容");
            }
        });
    };

    return (
        <Card title="产品编辑">
            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Item label="产品名称">
                    {getFieldDecorator("name",{
                        rules:[
                            {
                                required:true,
                                message:"请输入产品名称"
                            }
                        ]
                    })(<Input placeholder="请输入产品名称" />)}
                </Form.Item>
                <Form.Item label="产品负责人">
                    {getFieldDecorator("name",{
                        rules:[
                            {
                                required:true,
                                message:"请输入产品负责人"
                            }
                        ]
                    })(<Input placeholder="请输入产品负责人" />)}
                </Form.Item>
                <Form.Item label="产品简介">
                    {getFieldDecorator("name",{
                        rules:[
                            {
                                required:true,
                                message:"请输入产品简介"
                            }
                        ]
                    })(<Input placeholder="请输入产品简介" />)}
                </Form.Item>
                
                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        保存
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}
export default Form.create({name:"productEdit"})(Edit);