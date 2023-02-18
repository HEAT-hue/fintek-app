// jshint esversion:6
import "./dash_home.scss"
import { AccountCard } from "./accountCard";

import avatar from "../dashHome/assets/default_avatar_v4.png"
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const userData = {
    name: "Emmanuel"
}

const accountData = [
    {
        id: 1,
        title: 'Total Savings',
        amount: '#1000'
    },
    {
        id: 2,
        title: 'Total Savings',
        amount: '#1000'
    },
    {
        id: 3,
        title: 'Total Savings',
        amount: '#1000'
    },
    {
        id: 4,
        title: 'Total Savings',
        amount: '#1000'
    },
]

function DashHome() {
    return (
        <div className="dash-home">
            <section className="about-user">
                <div className="user">
                    <p className="font-bold text-3xl mb-2.5">{userData.name}</p>
                    <p className="text-sm text-grey">{days[new Date().getDay()]}</p>
                </div>
                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
            </section>

            <section className="user-account-details">
                <div className="refresh">
                    <div className="refresh-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                    </div>
                    <a href="" className="save_btn text-sm font-bold">+ QUICK SAVE</a>
                </div>

                <div className="account-variety">
                    {accountData.map((account) => {
                        return (<AccountCard key={account.id} title={account.title} amount={account.amount} />)
                    })}
                </div>
            </section>
        </div>
    );
}

export { DashHome };