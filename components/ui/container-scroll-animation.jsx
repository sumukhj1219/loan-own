"use client";
import React from "react";
import { motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
    return (
        <>
            <Header titleComponent={titleComponent} />

            <div className="h-[60rem] md:h-[55rem] flex items-center justify-center relative p-2 md:p-20">
                <div
                    className=" w-full relative"
                    style={{
                        perspective: "1000px",
                    }}
                >
                    <Card>{children}</Card>
                </div>
            </div>
        </>

    );
};

export const Header = ({ titleComponent }) => {
    return (
        <div className="div max-w-5xl mx-auto text-center">
            {titleComponent}
        </div>
    );
};

export const Card = ({ children }) => {
    return (
        <motion.div
            style={{
                boxShadow: `
      0 0 #00FF004d, 
      0 9px 20px #00FF004a, 
      0 37px 37px #00FF0042, 
      0 84px 50px #00FF0026, 
      0 149px 60px #00FF000a, 
      0 233px 65px #00FF0003
    `,
            }}
            className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-sky-100 p-2 md:p-6 bg-yellow-400 rounded-[30px] shadow-2xl"
        >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
                {children}
            </div>
        </motion.div>
    );
};
