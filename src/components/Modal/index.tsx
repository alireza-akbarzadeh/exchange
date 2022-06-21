import React from "react";
import { useEffect } from "react";
import {
  ModalTitle,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalContent,
  Modal,
} from "./Styled";

interface IModalProps {
  title: string;
  children: React.ReactNode;
  closeTitle: string;
  saveBtn: string;
  ModalClass: string;
  btnClass: string;
  btnTitle: string;
  ModalContetntClass: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  haveAnimate: boolean;
  icon?: any;
  closeIcon?: boolean;
}

const Dialog = ({
  children,
  closeTitle,
  saveBtn,
  title,
  ModalClass,
  ModalContetntClass,
  btnClass,
  haveAnimate,
  btnTitle,
  showModal,
  closeIcon,
  setShowModal,
  icon = <></>,
}: Partial<IModalProps>) => {
  const handleCloseModal = () => setShowModal(false);
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      handleCloseModal();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.addEventListener("keydown", null, false);
    };
  }, []);

  const DynumicIcon = () => icon;
  return (
    <>
      <button
        className={`${1}`}
        type="button"
        onClick={() => setShowModal(true)}
      >
        {icon && <DynumicIcon />}
        {btnTitle}
      </button>
      {showModal ? (
        <>
          <Modal>
            <div className={`relative w-auto my-6 mx-2 ${ModalClass}`}>
              <div
                className="opacity-25 fixed inset-0 z-10 bg-black"
                onClick={() => handleCloseModal()}
              />
              {/*content*/}
              <ModalContent
                className={`z-50   ${ModalContetntClass}`}
                haveAnimate={haveAnimate}
              >
                {/*header*/}
                <ModalHeader>
                  <ModalTitle className="dark:text-gray-50">{title}</ModalTitle>
                  <button
                    className={`p-1 ltr:ml-auto rtl:mr-auto text-gray-300  text-3xl  font-semibold outline-none focus:outline-none ${closeIcon ? "visible" : "invisible"
                      }`}
                    onClick={() => handleCloseModal()}
                  >
                    <span className=" text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </ModalHeader>
                {/*body*/}
                <ModalBody className="z-50 ">{children}</ModalBody>
                {/*footer*/}
                <ModalFooter>
                  {closeTitle && (
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleCloseModal()}
                    >
                      {closeTitle}
                    </button>
                  )}
                  {saveBtn && (
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleCloseModal()}
                    >
                      {saveBtn}
                    </button>
                  )}
                </ModalFooter>
              </ModalContent>
            </div>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default Dialog;
