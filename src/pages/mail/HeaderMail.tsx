import * as React from "react";
import { useTranslation } from "react-i18next";
import { NotifactionHead, List, ListItem, Title, Bell } from "./Notifications";
import { VscSettingsGear } from "react-icons/vsc";
import { AiOutlineCheck } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { Text, Tooltip } from "../../components";
import { BsBellFill } from "react-icons/bs";

import { GoTrashcan } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";
import Dialog from "components/Modal";
const HeaderMail = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <NotifactionHead>
      <Title>{t("Notifications")}</Title>
      <div className="flex items-center ">
        <label htmlFor="" className="ltr:mr-4 rtl:ml-4 ">
          <input type="checkbox" className="ltr:mr-2  rtl:ml-2" />
          <Text element="span" className="text-xs">
            {t("Hide_Read_Notifications")}
          </Text>
        </label>
        <List>
          <ListItem>
            <div className="Hover_List">
              <VscSettingsGear />
            </div>
          </ListItem>
          <ListItem>
            <div className="Hover_List">
              <Tooltip
                className="bg-TooltipHover py-2 w-44"
                displyTitle={t("Mark_ALL_AZ_READ")}
                icon={<AiOutlineCheck />}
              />
            </div>
          </ListItem>
          <ListItem>
            <div className="Hover_List" onClick={() => setShowMore(!showMore)}>
              <Tooltip
                className="bg-TooltipHover py-2 w-44"
                displyTitle={t("More_Options")}
                icon={<BsThreeDots />}
              />
            </div>
            {showMore && (
              <Dialog
                showModal={showModal}
                icon={<GoTrashcan className="mt-1" />}
                btnClass=" flex border py-1 px-2 absolute top-9  whitespace-nowrap"
                ModalClass="w-full max-w-md  bg-white"
                ModalContetntClass="bg-white "
                haveAnimate={true}
                setShowModal={setShowModal}
                btnTitle={t("Clear_All")}
              >
                <div className="space-y-16">
                  <div className="relative ">
                    <RiDeleteBin5Line className="mx-auto w-32 h-32 font-mono z-10" />
                    <Bell>
                      <BsBellFill />
                    </Bell>
                  </div>
                  <p className="text-center">
                    {t("Are_you_sure_to_clear_all_notifications")}
                  </p>
                  <div className="mx-4 flex">
                    <button
                      onClick={() => setShowModal(false)}
                      className="w-full rounded py-2 px-2 border border-grey-400 text-grey-400 ltr:mr-3 rtl:ml-3"
                    >
                      {t("Cancel")}
                    </button>
                    <button className="w-full rounded py-2 px-2 border border-red-400 text-red-400">
                      {t("Ok")}
                    </button>
                  </div>
                </div>
              </Dialog>
            )}
          </ListItem>
        </List>
      </div>
    </NotifactionHead>
  );
};

export default HeaderMail;
