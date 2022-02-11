import React from "react";

const MainPage: React.FC = props => {

    return <div className="">

        <div
            style={{
                background: "url(/images/header.jpg) 50% 50%",
                width: "100%",
                height: "50vh",
            }}
        >
            <div className="bg-gradient-to-b from-zinc-900 flex justify-center items-center" style={{ height: "100%", width: "100%" }}>

                <div className="text-center text-slate-200">

                    <div className="flex justify-center items-center mb-3">
                        <img src="/logo192.jpg" alt="kolgaev.ru" className="w-12 h-12 rounded mr-4 mt-1" />
                        <h1 className="text-6xl font-bold m-0">kolgaev.ru</h1>
                    </div>

                    <div>Развивающийся портал для своих</div>

                </div>

            </div>
        </div>



    </div>

}

export default MainPage;