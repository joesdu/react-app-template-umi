import React, { CSSProperties } from 'react';

export interface ColumnTitleProps {
  style?: CSSProperties;
  name: string;
}

/**
 * 统一处理表格表头样式.
 * @param name 表头名称
 */
export default ({ style, name }: ColumnTitleProps): React.ReactElement => <div style={{ fontWeight: 'bold', ...style }}>{name}</div>;
