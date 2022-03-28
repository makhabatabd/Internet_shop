import React from "react";
import { Spin, Alert } from "antd";

const Loading = () => {
  return (
    <div>
      <Spin size="large" tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </div>
  );
};

export default Loading;
