import BankTransferIcon from '../assets/svg/icons/BankTransferIcon';
import CheckBalanceIcon from '../assets/svg/icons/CheckBalanceIcon';
import PayByUPIIdIcon from '../assets/svg/icons/PayByUPIIdIcon';
import PayByPhoneNumber from '../assets/svg/icons/PayPhoneNumberIcon';
import SelfTransferIcon from '../assets/svg/icons/SelfTransferIcon';
import BankTransfer from '../assets/svg/icons/UtilityIcons/BankTransfer';
import CheckBalance from '../assets/svg/icons/UtilityIcons/CheckBalance';
import PayPhoneNumber from '../assets/svg/icons/UtilityIcons/PayPhoneNumber';
import PayUPIId from '../assets/svg/icons/UtilityIcons/PayUPIId';
import SelfTransfer from '../assets/svg/icons/UtilityIcons/SelfTransfer';

const utilityData = [
    {
        id:1,
        name:"Self Transfer",
        icon: <SelfTransfer/>
    },
    {
        id:2,
        name:"Pay phone number",
        icon:<PayPhoneNumber/>
    },
    {
        id:3,
        name:"Bank Transfer",
        icon: <BankTransfer/>
    },
    {
        id:4,
        name:"Pay UPI ID or number",
        icon:<PayUPIId/>,
    },
    {
        id:5,
        name:"Check Balance",
        icon:<CheckBalance/>
    }

]

export default utilityData;