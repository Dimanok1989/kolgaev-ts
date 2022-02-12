import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainPage: React.FC = () => {

    return <div className="w-screen h-screen relative">

        <div className="w-full h-full" style={{ background: "url(/images/header.jpg) 50%", backgroundSize: "cover" }}>

            <div className="bg-gradient-to-b from-zinc-900 flex justify-center items-center" style={{ height: "100%", width: "100%" }}>

                <div className="text-center text-slate-100">

                    <div className="flex justify-center items-center mb-3">
                        <img src="/logo192.jpg" alt="kolgaev.ru" className="w-20 h-20 rounded mr-4 shadow-lg shadow-white/20" />
                        <h1 className="text-7xl font-mono m-0">kolgaev.ru</h1>
                    </div>

                </div>

            </div>

        </div>

        <div className="absolute flex justify-center items-center w-full bottom-0 pt-5 pb-2 bg-gradient-to-t from-zinc-900 text-white">
            <a className="opacity-60 hover:opacity-100 cursor-pointer mx-1" href="https://github.com/Dimanok1989" target="_blank">
                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
            </a>
            <a className="opacity-60 hover:opacity-100 cursor-pointer mx-1" href="https://gitlab.com/Dimanok1989" target="_blank">
                <FontAwesomeIcon icon={['fab', 'gitlab']} size="2x" className="opacity-60 hover:opacity-100 cursor-pointer mx-1" />
            </a>
            <a className="opacity-60 hover:opacity-100 cursor-pointer mx-1" href="https://www.instagram.com/dimanok1989" target="_blank">
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" className="opacity-60 hover:opacity-100 cursor-pointer mx-1" />
            </a>
            <a className="opacity-60 hover:opacity-100 cursor-pointer mx-1" href="https://vk.com/kolgaev89" target="_blank">
                <FontAwesomeIcon icon={['fab', 'vk']} size="2x" className="opacity-60 hover:opacity-100 cursor-pointer mx-1" />
            </a>
            <a className="opacity-60 hover:opacity-100 cursor-pointer mx-1" href="https://www.youtube.com/channel/UCAiealqjaAckQ4KJ22dO1GQ?view_as=subscriber" target="_blank">
                <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" className="opacity-60 hover:opacity-100 cursor-pointer mx-1" />
            </a>
        </div>

    </div>

}

export default MainPage;