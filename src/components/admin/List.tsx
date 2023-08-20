import { useGetAllQuery, useRemoveProductMutation } from "@/api/product";
import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import checkAuthen from "@/utils/checkAuthen";

const List = () => {
  const { data: products, isLoading } = useGetAllQuery();
  //   console.log("Data", products);
  const [removeProduct] = useRemoveProductMutation();

  const deleteProduct = (id: number) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      removeProduct(id);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
        title: "image",
        dataIndex: "image",
        key: "image",
        render: (text: any) => <img width={"100px"} src={text} alt="" />,
      },
    
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <Button>
            <Link to={`/admin/products/edit/${record?.id}`}>Sửa</Link>
          </Button>
          {/* <a>Delete</a> */}
          <Button onClick={() => deleteProduct(record?.id)} danger>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const data = products?.map((product: any) => {
    return {
      key: product?.id,
      ...product,
    };
  });
  
  checkAuthen()

  return (
    <div>
      <Button>
        <Link to={`/admin/products/add`}>Add sản phẩm</Link>
      </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default List;
