import { useState } from "react";
import Alerts from "./components/Alerts";
import Button from "./components/Button";
import { ListGroup } from "./components/ListGroup";
function App() {
 const [alertvisible , setAlertvisible] = useState(false)
  const taj = ["london", "paris", "tokyo", "khartoum"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      { alertvisible && <Alerts handleClose={() => setAlertvisible(false)} message="lorem eplsun" type="secondary" show={false} />}
      <Button onClick={() => setAlertvisible(true)}  >test</Button>
      <ListGroup
        title="Helle WOrld"
        data={taj}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
