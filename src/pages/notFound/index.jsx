import React, { useEffect } from 'react';
import { Button } from 'antd'
import st from "./notfound.module.scss";
// import st from './notFound.less';

export default function () {
  const cWidth = document.documentElement.clientWidth || document.body.clientWidth;
  const cHeight = document.documentElement.clientHeight || document.body.clientHeight;
  useEffect(() => {

  });
  return (
    <div className={st.container} style={{
      width: cWidth + 'px',
      height: cHeight + 'px'
    }}>
      <strong>404</strong>
      <p>抱歉，你访问的页面22不存33w在11q</p>
      <Button type="primary">Button</Button>
    </div>
  );
}
