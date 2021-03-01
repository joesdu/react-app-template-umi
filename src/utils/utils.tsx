import { LoadingOutlined } from '@ant-design/icons';
import { PaginationProps } from 'antd/lib/pagination';

export const getImageInfo = (url: string): Promise<{ width: number; height: number }> =>
  new Promise<{ width: number; height: number }>((resolve, reject) => {
    const img: HTMLImageElement = new Image();
    img.src = url;
    if (img.naturalWidth || img.complete) resolve({ width: img.naturalWidth ?? img.width, height: img.naturalHeight ?? img.height });
    else {
      img.onload = () => resolve({ width: img.naturalWidth ?? img.width, height: img.naturalHeight ?? img.height });
      img.onerror = err => reject(err);
    }
  });

/**
 * 统一导出Modal中Form布局的布局参数
 */
export const modalFormLayout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

export const tacitPagingProps: PaginationProps = {
  style: { padding: '10px 0 0', textAlign: 'center', float: 'none', marginBottom: 10 },
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total: number, range: [number, number]) => `共 ${total} 条 第 ${range[0]}-${range[1]} 条`
};

/**
 * 获取统一的表格loading对象
 * @param loading
 */
export const LoadingObject = (loading: boolean): { spinning: boolean; indicator: JSX.Element } => ({ spinning: loading, indicator: <LoadingOutlined style={{ fontSize: 24 }} spin /> });
