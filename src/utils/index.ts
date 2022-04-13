/*
 * @Author: kejie
 * @Date: 2022-04-13 10:47:24
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-13 10:53:57
 * @FilePath: \m-comp\src\utils\index.ts
 * @Description: file content
 */
// 把驼峰转换成横杠连接
export const toLine = (value: string) => {
  return value.replace(/([A-Z])/g, '-$1').toLocaleLowerCase();
}