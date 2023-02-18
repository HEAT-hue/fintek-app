// jshint esversion:6
import "./dash_home.scss"
import avatar from "../dashHome/assets/default_avatar_v4.png"
import setUpImg from "../dashHome/assets/complete-setup-v3.jpg"

import { Link } from "react-router-dom";
import { BiLike, BiLockAlt } from "react-icons/bi"

import { AccountCard } from "./accountCard";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const userData = {
    name: "Emmanuel",
    accountData: [
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
}

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
                    {userData.accountData.map((account) => {
                        return (<AccountCard key={account.id} title={account.title} amount={account.amount} />)
                    })}
                </div>
            </section>

            <section className="user-cta mt-7">

                <div className="user-setup md:hidden">
                    <p className="uppercase text-sm text-grey">Complete your setup</p>
                    <div className="setup-container">
                        <div className="setup-img-wrapper">
                            <img src={setUpImg} alt="Set up" />
                        </div>
                    </div>
                </div>

                <div className="user-todo mt-7">
                    <p className="uppercase text-sm text-grey">To-do List</p>
                    <div className="todo-wrapper">
                        <Link to={""} className="todo-link flex items-center gap-x-3 p-4">
                            <span className="round-icon"></span>
                            <span className="text-xs">Verify your Email Address</span>
                        </Link>

                        <Link to={""} className="todo-link flex items-center gap-x-3 p-4">
                            <span className="round-icon"></span>
                            <span className="text-xs">Add your BVN or NIN now!</span>
                        </Link>

                        <Link to={""} className="todo-link flex items-center gap-x-3 p-4">
                            <span className="round-icon"></span>
                            <span className="text-xs">Tell us more about your self</span>
                        </Link>

                        <Link to={""} className="todo-link flex items-center gap-x-3 p-4">
                            <span className="round-icon"></span>
                            <span className="text-xs">Securely add a valid debit card</span>
                        </Link>

                        <Link to={""} className="todo-link flex items-center gap-x-3 p-4">
                            <span className="round-icon"></span>
                            <span className="text-xs">Set your security question now</span>
                        </Link>

                        <Link to={""} className="todo-link flex items-center gap-x-3 p-4">
                            <span className="round-icon"></span>
                            <span className="text-xs">Refer your friend and earn #1000 bonus</span>
                        </Link>
                    </div>
                    <div className="extra-todo-wrapper mt-7 flex flex-col gap-y-5">
                        <Link to={""} className="todo-link flex items-center gap-x-3 p-4">
                            <span><BiLike size={25} color="blue" /></span>
                            <span className="flex flex-col gap-y-1">
                                <span className="text-blue text-sm font-bold">See your recent activities</span>
                                <span className="text-xs">Add your BVN or NIN now!</span>
                            </span>
                        </Link>
                        <Link to={""} className="todo-link flex items-center gap-x-3 p-4">
                            <span><BiLockAlt size={25} color="rgb(34, 149, 242)" /></span>
                            <span className="flex flex-col gap-y-1">
                                <span className="text-blue text-sm font-bold" style={{ color: 'rgb(34, 149, 242)' }}>Create a safe lock</span>
                                <span className="text-xs">Avoid spending temptations. Tap to create a safe lock</span>
                            </span>
                        </Link>
                    </div>
                </div>


                <p className="uppercase mt-7 md:hidden">#Welcome to finteK</p>

                <div className="user-setup mt-7 md:visible">
                    <p className="uppercase text-sm text-grey">Complete your setup</p>
                    <div className="setup-container">
                        <div className="setup-img-wrapper">
                            <img src={setUpImg} alt="Set up" />
                        </div>
                        <p className="uppercase mt-7">#Welcome to finteK</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export { DashHome };