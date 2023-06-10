import React from 'react'

export default function Table({ data, column }) {
    const TableHeadItem = ({ item }) => <th>{item.heading}</th>

    const TableRow = ({ item, column }) => (
        <tr>
            {column.map((columnItem, index) => {
                return <td>{item[`${columnItem.value}`]}</td>
            })}
        </tr>
    )

    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        {column.map((item, index) => <TableHeadItem item={item} />)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => <TableRow item={item} column={column} />)}
                </tbody>
            </table>
        </>
    )
}
