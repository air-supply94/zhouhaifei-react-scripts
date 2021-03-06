import { Result, Button } from 'antd';
import React from 'react';

export const NotAuthority: React.FC = () => (
  <Result
    extra={(
      <Button
        href="/"
        type="primary"
      >
        回到首页
      </Button>
    )}
    status="403"
    subTitle="对不起, 您没有访问该页面的权限"
    title="403"
  />
);
