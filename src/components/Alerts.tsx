
interface Props {
  message: string;
  type?: string;
  show: boolean;
  handleClose : () => void
}
function Alerts({ message, type = "primary" , handleClose }: Props) {

  return (
    <>
      <div className={"alert alert-dismissible fade show alert-" + type} role="alert">
        {message}
        <button onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </>
  );
}

export default Alerts;
