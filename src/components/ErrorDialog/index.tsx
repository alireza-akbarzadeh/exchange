import { useState } from "react";
import Dialog from "../Modal";
interface IErrorDialog {
  content: string;
  contentClass: string;
  btnTxt: string;
  btnClass: string;
}
const ErrorDialog = ({
  content,
  btnTxt,
  btnClass,
  contentClass,
}: IErrorDialog) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div>
      <Dialog
        haveAnimate={true}
        showModal={showModal}
        ModalClass="w-full max-w-screen-xs"
        ModalContetntClass="dark:bg-settingHover bg-white"
        btnClass="hover:text-secoundry-light text-Link "
        setShowModal={setShowModal}
      >
        <p className={`${contentClass}`}>{content}</p>
        <button
          className={`rounded-md  bg-black bg-primary-light py-2 mt-4 w-full ${btnClass}`}
        >
          {btnTxt}
        </button>
      </Dialog>
    </div>
  );
};

export default ErrorDialog;
