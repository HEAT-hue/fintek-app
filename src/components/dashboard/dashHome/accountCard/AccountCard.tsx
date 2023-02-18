// jshint esversion:6
import './account-card.scss';
import { BsShield } from "react-icons/bs";

interface AccountCardProp {
    title: string,
    amount: string
}

function AccountCard({ title, amount }: AccountCardProp) {
    return (
        <a href='#' className="account-card">
            <div className="icon-container">
                <BsShield size={25} fontWeight={50} />
            </div>
            <div className="content flex flex-col gap-y-2">
                <p className="title">{title}</p>
                <p className="value font-bold text-2xl">{amount}</p>
            </div>
        </a>
    );
}

export { AccountCard };