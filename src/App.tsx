import { useState } from "react";
import Alerts from "./components/Alerts";
import Button from "./components/Button";
import { ListGroup } from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
function App() {
  const [alertvisible, setAlertvisible] = useState(false);
  const taj = ["london", "paris", "tokyo", "khartoum"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <BsFillCalendarFill />
      {alertvisible && (
        <Alerts
          handleClose={() => setAlertvisible(false)}
          message="lorem eplsun"
          type="secondary"
          show={false}
        />
      )}
      <Like onClick={() => console.log("clicked")} />
      <Button onClick={() => setAlertvisible(true)}>test</Button>
      <ListGroup
        title="Helle WOrld"
        data={taj}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
