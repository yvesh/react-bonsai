import React from 'react';

import 'react-bonsai/dist/index.css';
import { Alert } from 'react-bonsai';

const App = () => {
  return (
    <div className="wrapper" style={{'--maxw': '960px', '--mx': 'auto'} as React.CSSProperties}>
      <h3>Alerts</h3>

      <Alert>Hello bonsai.css</Alert>

      <code>
        &lt;Alert&gt;Hello bonsai.css&lt;/Alert&gt;
      </code>

      <Alert variant="secondary">Hello bonsai.css</Alert>

      <code>
        &lt;Alert variant="secondary"&gt;Hello bonsai.css&lt;/Alert&gt;
      </code>

      <Alert variant="grey" style={{'--c': '#222'} as React.CSSProperties}>Hello bonsai.css</Alert>

      <code>
        &lt;Alert variant="grey" style={'{{'}'--c': '#222'{'}}'}&gt;Hello bonsai.css&lt;/Alert&gt;
      </code>

      <Alert variant="black">Hello bonsai.css</Alert>
      <Alert variant="green">Hello bonsai.css</Alert>
      <Alert variant="blue">Hello bonsai.css</Alert>
      <Alert variant="orange">Hello bonsai.css</Alert>
      <Alert variant="red">Hello bonsai.css</Alert>

      <h3>Dismissible alerts</h3>
      <code>
        &lt;Alert isDismissible&gt;Hello bonsai.css&lt;/Alert&gt;
      </code>
      <Alert isDismissible>Hello bonsai.css</Alert>
    </div>
  );
};

export default App;
