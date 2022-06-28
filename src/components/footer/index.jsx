/*
 * @Author: root 1433729587@qq.com
 * @Date: 2022-06-20 14:06:29
 * @LastEditors: root 1433729587@qq.com
 * @LastEditTime: 2022-06-20 17:47:05
 * @FilePath: \demo\todo-list-class\src\components\footer\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import Style from './index.module.css'

export default class Footer extends React.Component {
  render() {
    return (<div className={Style.footer}>@copyrigth <a href="//wspace.xyz" target="_blank">wsapce.xyz</a></div>)
  }
}