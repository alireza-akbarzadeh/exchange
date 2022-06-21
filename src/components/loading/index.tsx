import { useState } from "react";
import { LoadingBar } from "./Loading-styled";
import Dialog from "../Modal";

const Loading = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Dialog
        haveAnimate={true}
        showModal={showModal}
        ModalClass="w-full max-w-screen-xss"
        ModalContetntClass="dark:bg-settingHover bg-white"
        btnClass="hover:text-secoundry-light text-Link "
        setShowModal={setShowModal}
      >
        <LoadingBar>
          <div className="middle">
            <div className="bar bar1" />
            <div className="bar bar2" />
            <div className="bar bar3" />
            <div className="bar bar4" />
            <div className="bar bar5" />
            <div className="bar bar6" />
            <div className="bar bar7" />
            <div className="bar bar8" />
          </div>
        </LoadingBar>
      </Dialog>
    </>
  );
};

export default Loading;
