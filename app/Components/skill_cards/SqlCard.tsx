import SqlIcon from "../icons/SqlIcon";
import Arrow from "../icons/Arrow";
import ConnectionDot from "../icons/ConnectionDot";

const SqlCard = () => {
    return (
        <div className="absolute top-[15%] left-0 flex items-center gap-4">
            <div className="w-fit">
                <h3 className="font-josefin text-white text-4xl font-bold">SQL</h3>
                <hr className="w-full border-2" />
                <div className="flex gap-1 pt-1 items-center">
                    <Arrow />
                    <p className="font-inter text-sm font-medium opacity-50 text-white">09</p>
                </div>
            </div>

            <div className="w-50 h-50 flex justify-center items-center border-8px border-transparent rounded-10-xl shadow-sql-shadow sql-border">
                <SqlIcon />
                <ConnectionDot position="-right-9" />
            </div>
        </div>
    )
};

export default SqlCard;