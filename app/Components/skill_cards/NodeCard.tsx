import NodeIcon from "../icons/NodeIcon";
import Arrow from "../icons/Arrow";
import ConnectionDot from "../icons/ConnectionDot";

const NodeCard = () => {
    return (
        <div className="absolute bottom-[15%] right-0 flex items-center gap-4">
            <div className="w-50 h-50 flex justify-center items-center border-8px border-transparent rounded-10-xl shadow-node-shadow node-border">
                <NodeIcon />
                <ConnectionDot position="-left-9" />
            </div>

            <div className="w-fit">
                <h3 className="font-josefin text-white text-4xl font-bold">Node.js</h3>
                <hr className="w-full border-2" />
                <div className="flex gap-1 pt-1 items-center">
                    <Arrow />
                    <p className="font-inter text-sm font-medium opacity-50 text-white">10</p>
                </div>
            </div>
        </div>
    )
};

export default NodeCard;