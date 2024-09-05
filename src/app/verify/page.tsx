

export default function Links(): JSX.Element {

    return (
        <main className="flex h-screen w-auto items-center bg-black bg_img">
            <div className="mx-auto w-full h-full  max-w-lg rounded-lg bg-gray-900 p-2 pt-4 shadow-card  xs:p-6 xs:pt-5 ">
                <header className="navigation_tab flex flex-row gap-3">
                    <span>◄</span>
                    <span>Home</span>
                </header>
                <div className="flex flex-col gap-2 w-full items-center justify-center mt-10">
                    <p className="text-sm">You are buying :</p>
                    <div> <span className="text-4xl"><b>10.345532</b></span><span className="text-gray-500 text-bold text-xl"> <b>USDT</b> </span> </div>
                    <span className="bg-gray-700 p-1 rounded-full text-sm">#OS-023965432</span>
                </div>
                <hr className="border border-transparent bg-gray-700 mt-5 mb-5 h-2 w-full" />
                <div className="middle_section flex flex-col gap-2 text-slate-300">
                    <div className="status flex flex-row gap-2 items-center">
                        <div className="icon"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/time.png" alt="time"/></div>
                        <div className="details flex flex-col gap-1 text-sm">
                            <span className="lable text-gray-600">Status</span>
                            <span className="content">Creating order</span>
                        </div>
                    </div>
                    <hr className="border border-transparent bg-black mt-1 mb-1 h-1 w-full" />
                    <div className="important flex flex-row gap-2 items-center">
                        <div className="icon"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/time.png" alt="time"/></div>
                        <div className="details flex flex-col gap-1 text-sm">
                            <span className="lable text-gray-600">Important</span>
                            <span className="content">You must confirm the order within 10 minutes after its creation</span>
                        </div>
                    </div>
                </div>
                <hr className="border border-transparent bg-gray-700 mt-5 mb-5 h-2 w-full" />
                <div className="last_section flex flex-col gap-2 text-sm text-slate-300">
                    <div className="flex flex-row justify-between border-b-2 border-black px-1 pb-2">
                        <div className="parent">Amount</div>
                        <div className="child">500 KES</div>
                    </div>
                    <div className="flex flex-row justify-between border-b-2 border-black px-1 pb-2">
                        <div className="parent">Price per 1 USDT</div>
                        <div className="child">140.2 KES</div>
                    </div>
                    <div className="flex flex-row justify-between border-b-2 border-black px-1 pb-2">
                        <div className="parent">Payment method</div>
                        <div className="child">M-Pesa</div>
                    </div>
                    <div className="flex flex-row justify-between px-1 pb-3">
                        <div className="parent">Time limit</div>
                        <div className="child">10 minutes</div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center py-5">
                    <button className=" flex flex-row justify-center items-center w-full bg-blue-900 p-2 rounded-sm" type="submit">Create Order</button>
                </div>
                
            </div>
        </main>
    );
}