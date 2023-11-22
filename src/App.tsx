import Alerts from "./components/Alerts";
import { ListGroup } from "./components/ListGroup";
function App() {
  const taj = ["london", "paris", "tokyo", "khartoum"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <Alerts message="lorem eplsun" type="secondary" />
      <ListGroup
        title="Helle WOrld"
        data={taj}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
