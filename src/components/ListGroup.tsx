import { useState } from "react";
interface Props {
  data: string[];
  title: string;
  onSelectItem: (item: string) => void;
}
export function ListGroup({ data, title, onSelectItem }: Props) {
  const [selected, setSelected] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      <ol className="list-group">
        {data.map((list, index) => (
          <ol
            className={(selected == index)
              ? "list-group-item active"
              : "list-group-item"}
            onClick={() => {
              onSelectItem(list);
            }}
          >
            {list}
          </ol>
        ))}
      </ol>
    </>
  );
}
