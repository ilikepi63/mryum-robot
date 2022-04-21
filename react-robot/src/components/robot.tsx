import React from "react";

interface RobotProps {
    direction?: "NORTH" | "SOUTH" | "EAST" | "WEST"
}

function Robot({ direction }: RobotProps) {
    return (
        <div className="flex flex-row w-full h-full justify-center items-center">
            {direction === "NORTH" && <TopArrow />}
            {direction === "SOUTH" && <BottomArrow />}
            {direction === "EAST" && <RightArrow />}
            {direction === "WEST" && <LeftArrow />}
        </div>
    );
}

const TopArrow = () => (<div className="border w-0 h-0 border-l-transparent border-r-transparent border-b-gray-300 border-l-[20px] border-r-[20px] border-b-[20px]"></div>);

const RightArrow = () => (<div className="border w-0 h-0 border-b-transparent border-t-transparent border-l-gray-300 border-b-[20px] border-t-[20px] border-l-[20px]"></div>);

const LeftArrow = () => (<div className="border w-0 h-0 border-b-transparent border-t-transparent border-r-gray-300 border-b-[20px] border-t-[20px] border-r-[20px]"></div>);

const BottomArrow = () => (<div className="border w-0 h-0 border-l-transparent border-r-transparent border-t-gray-300 border-l-[20px] border-r-[20px] border-t-[20px]"></div>);


export default Robot;
