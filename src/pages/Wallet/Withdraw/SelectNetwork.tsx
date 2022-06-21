import Dialog from 'components/Modal'
import { FormControl, Input } from 'pages/Login/Styled.Login'
import { useState } from 'react'
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io"
import { AiFillCheckCircle } from "react-icons/ai"
import { useTranslation } from "react-i18next"
import styled from 'styled-components'
import tw from 'twin.macro'


const Success = styled.div`
 ${tw`bg-green-100 p-3 w-full my-6 flex space-x-2.5  rounded-md`};
  svg{
${tw`text-green-400 w-7 h-7 `}}

span{
${tw`text-green-500 text-base`}
}

`;
const Error = styled.span`
${tw`bg-red-200 p-1 ltr:ml-2 rtl:mr-2 text-red-500 text-xs`};
`;

const SelectNetwork = () => {
    const [showModal, setShowModal] = useState(false)
    const { t } = useTranslation()
    return (
        <>
            <FormControl className="relative">
                <label className="dark:text-gray-50" htmlFor="">{t('NetWork')}</label>
                <Input onClick={() => setShowModal((showModal) => !showModal)} type="text" />
                {showModal ? (
                    <IoMdArrowDropup
                        className={`absolute top-10 ${t("direction") === "rtl" ? "left-4" : "right-4"
                            } `}
                    />
                ) : (
                    <IoMdArrowDropdown
                        className={`absolute top-10 ${t("direction") === "rtl" ? "left-4" : "right-4"
                            } `}
                    />
                )}
            </FormControl>
            <Dialog
                haveAnimate={true}
                showModal={showModal}
                ModalClass="w-full max-w-xl"
                ModalContetntClass="dark:bg-settingHover bg-white"
                btnClass="hover:text-secoundry-light text-Link"
                setShowModal={setShowModal}
                title={t('Select_Network')}
                closeIcon={true}
            >
                <p className="my-5 dark:text-gray-50">{t('Ensure_the_network_matches')}</p>
                <Success>
                    <AiFillCheckCircle className="mx-2" />
                    <span>
                        {t('Unmatched_Network_automatically')}
                    </span>
                </Success>

                <div className="flex my-5 flex-wrap justify-between w-full">
                    <div className="flex-1 dark:text-gray-50">
                        <span>BSC</span>
                        <p>binance smart chaine</p>
                        <span className="block">
                            (BEP20)
                        </span>
                    </div>
                    <div className="flex-1 dark:text-gray-50">
                        <span>BSC</span>
                        <p>binance smart chaine</p>
                        <span className="block">
                            (BEP20)
                        </span>
                    </div>
                </div>
                <div className="flex my-8 justify-between">
                    <div className="flex-1 text-sm text-textGray">
                        <span>
                            BNB
                            <Error>{t('NetWork_suspended')}</Error>
                        </span>
                        <p className="mt-3">Binace Chain (BEP2)</p>
                    </div>
                    <div className="flex-1 text-sm dark:text-gray-50">
                        <span>
                            {t('setNetwork_recovery_notification_reminder')}
                        </span>
                        <span className="text-Link block mt-2">{t('Set_reminer')}</span>
                    </div>
                </div>
                <div className="flex items-end justify-end my-2">
                    <button className="underline text-textGray">{t('Rules')}</button>
                </div>
            </Dialog>
        </>
    )
}

export default SelectNetwork
