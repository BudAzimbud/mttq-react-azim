// ** Router Import
import Router from "./router/Router";
import { Connector } from "mqtt-react-hooks";
const App = () => (
  <Connector
  brokerUrl="ws://broker.emqx.io:8083/mqtt"
    options={{
      port: 8083,
      host: "broker.emqx.io:8083/mqtt",
      protocol: "ws",
      keepalive: 10,
      clientId: `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`,
    }}
  >
    <Router />
  </Connector>
);

export default App;
