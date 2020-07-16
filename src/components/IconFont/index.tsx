import { IconFontProps } from '@ant-design/icons/lib/components/IconFont';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFontScriptUrl: string | Array<string> = '';
/**
 * 使用IconFont字体图标
 */
const IconFont: React.FC<IconFontProps> = createFromIconfontCN({ scriptUrl: IconFontScriptUrl });

export default IconFont;
