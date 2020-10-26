// src/access.ts
// 这个文件用于权限管理,属于约定文件,不可随便更改文件名.
interface AccessState {
  canAdmin: boolean;
  canTest: boolean;
}

const access = (initialState: { access?: any }): AccessState => {
  const { access } = initialState || {};

  return {
    canAdmin: access?.findIndex((x: { name: string }) => x.name === 'admin')! > -1,
    canTest: true
  };
};

export default access;
