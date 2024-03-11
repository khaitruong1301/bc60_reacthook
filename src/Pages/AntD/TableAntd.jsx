//Phần 1: phần import thư viện
import React, { useEffect, useState } from 'react';
import { Button, Input, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useHome from '../Home/useHome';
import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons'
//Phần 2: Các biến và hàm ngoài component


const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};


const TableAntd = () => {
    const { arrProduct } = useHome()
    const [searchText, setSearchText] = useState('');

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
                </Button>
            </div>
        ),
        onFilter: (value, record) => 
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',  //Đúng key của dataSource   
        },
        {
            title: 'name',
            dataIndex: 'name', //Đúng key của dataSource
            render: (text, record) => {
                return <NavLink to={`/detail/${record.id}`}>{text}</NavLink>
            },
            filters: arrProduct.map((prod)=> {
                return {
                    text:prod.name,
                    value:prod.name
                }
            }) ,//Miễn sao trả về value cho filter mảng [{text,value}]
            // filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.name.startsWith(value),
            ...getColumnSearchProps('name'),
        },
        {
            title: 'image',
            dataIndex: 'image', //Đúng key của dataSource
            render: (text, record) => {
                return <img src={record.image} alt={record.alias} width={50} />
            },
            // sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'price',
            dataIndex: 'price', //Đúng key của dataSource
            sorter: (a, b) => a.price - b.price,
        },
    ];
    console.log(arrProduct)

    return (
        <div className='container'>
            <h3 className='mt-2'>Data product</h3>
            <Table columns={columns} dataSource={arrProduct} onChange={onChange} />
        </div>
    )
}

export default TableAntd