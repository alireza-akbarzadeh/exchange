import * as React from "react";
import { Link } from "react-router-dom";
import { Text } from "../../components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useTranslation } from "react-i18next";
interface IMessageProps {
  isRead: boolean;
}
const Message = ({ isRead }: IMessageProps) => {
  const [view, setSetView] = React.useState(false);
  const { t } = useTranslation();
  return (
    <div className="bg-gray-50 shadow-sm border-b p-4 py-2 my-4 ">
      <div
        className="flex  justify-between cursor-pointer"
        onClick={() => setSetView(!view)}
      >
        <div className="flex">
          <span
            className={`${
              isRead ? "bg-textGray" : "bg-textSuccess"
            } block  mt-1 w-3 h-3 rounded-full ltr:mr-5 rtl:ml-5`}
          />
          <div className="flex">
            <input type="checkbox" className="ltr:mr-2 mt-1 rtl:ml-2" />
            <div>
              <Text element="span">You resvie news Task</Text>
              <Text element="p" className="text-xs mt-1 text-textGray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo hic iste doloribus.
              </Text>
              {view && (
                <div className="">
                  <Text
                    element="p"
                    className="text-xs mt-1 leading-loose text-textGray"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Explicabo hic iste doloribus. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Explicabo hic iste doloribus.
                  </Text>
                  <Link to="#" className="text-primary-light text-xs">
                    {t("View_More")}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="whitespace-nowrap">
          <div>
            <span className="text-textGray">2021-05-06</span>
            <span className="text-textGray ltr:ml-2 rtl:mr-2">11:43:20</span>
          </div>
          <div
            className={`${
              t("direction") === "rtl" ? "text-left" : "text-right"
            }text-textGray`}
            onClick={() => setSetView(!view)}
          >
            {view ? (
              <IoIosArrowUp className="text-textGray" />
            ) : (
              <IoIosArrowDown className="text-textGray" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
