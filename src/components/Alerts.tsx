interface Props {
  message: string;
  type?: string;
}
function Alerts({ message, type = "primary" }: Props) {
  return (
    <>
      <div className={"alert alert-" + type} role="alert">
        {message}
      </div>
    </>
  );
}

export default Alerts;
