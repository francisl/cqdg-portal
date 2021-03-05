import React from 'react';
import ScrollableTable from '@ferlab/ui/core/components/tables/ScrollableTable';
import { Table } from 'antd';

const TableContent = ({ columns, data, loading }: any): React.ReactElement => (
    <ScrollableTable>
        <Table
            className="files-table"
            columns={columns.filter((item: any) => !item.hidden)}
            dataSource={data}
            loading={loading}
            onHeaderRow={() => ({ className: 'table-header' })}
            pagination={{ hideOnSinglePage: true, showQuickJumper: true, showSizeChanger: true, size: 'small' }}
            rowClassName={(_, index) => (index % 2 === 0 ? 'odd' : 'even')}
            size="small"
        />
    </ScrollableTable>
);
export default TableContent;
