interface Props {
  message: string;
  type?: string;
  show: boolean
}
function Alerts({ message, type = "primary" , show }: Props) {
  return (
    <>
      <div className={"alert  alert-dismissible fade show alert-" + type} role="alert">
        {message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </>
  );
}

export default Alerts;
