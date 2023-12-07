import { useState } from "react";
function UapdatedComponent(OrignalComponent) {
    function NewComponent() {

        const [money, setMoney] = useState(10);
        const handleIncrease = () => {
            setMoney(money * 2);
        };
        return <OrignalComponent handleIncrease={handleIncrease} money={money} />
    }
    return NewComponent;
};

export default UapdatedComponent;