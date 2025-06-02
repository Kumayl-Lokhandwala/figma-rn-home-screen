import BankTransferIcon from '../assets/svg/BankTransferIcon';
import CheckBalanceIcon from '../assets/svg/CheckBalanceIcon';
import PayByUPIIdIcon from '../assets/svg/PayByUPIIdIcon';
import PayByPhoneNumber from '../assets/svg/PayPhoneNumberIcon';
import SelfTransferIcon from '../assets/svg/SelfTransferIcon';

const utilityData = [
    {
        id:1,
        name:"Self Transfer",
        icon: <SelfTransferIcon/>
    },
    {
        id:2,
        name:"Pay phone number",
        icon:<PayByPhoneNumber/>
    },
    {
        id:3,
        name:"Bank Transfer",
        icon: <BankTransferIcon/>
    },
    {
        id:4,
        name:"Pay UPI ID or number",
        icon:<PayByUPIIdIcon/>,
    },
    {
        id:5,
        name:"Check Balance",
        icon:<CheckBalanceIcon/>
    }

]

export default utilityData;