/*
 * @Author: kejie
 * @Date: 2022-04-14 11:08:56
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-14 11:16:44
 * @FilePath: \vue3-ts-element-plus-learn\src\hooks\useCopy.ts
 * @Description: file content
 */
import { ElMessage } from 'element-plus'

// 复制功能hook函数，传入的文本内容，可以通过ctrl+v操作粘贴
export const useCopy = (text: string) => {
  // 1、创建一个input输入框
  const input = document.createElement('input');
  // 2、将text赋值给input输入框的值
  input.value = text;
  // 3、将input输入框追加到body中
  document.body.appendChild(input)
  // 4、选中input输入框
  input.select();
  // 5、执行复制操作
  document.execCommand('copy')
  // 6、提示复制成功
  ElMessage.success('复制成功')
  // 7、移除input输入框
  document.body.removeChild(input)
}