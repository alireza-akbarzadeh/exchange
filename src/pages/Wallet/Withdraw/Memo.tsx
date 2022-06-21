import { FormControl, Input, Memo } from "./withdraw";
import { useTranslation } from "react-i18next";
const MemoCode = () => {

    const { t } = useTranslation();
    return (
        <>
            <FormControl>
                <div>
                    <label htmlFor="">Memo</label>
                    <Memo>
                        <div className={"relative"}>
                            <Input className={"w-full"} type="text" />
                        </div>
                    </Memo>
                </div>
            </FormControl>
        </>
    )
}

export default MemoCode;
