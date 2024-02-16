export default function Btncmp(props) {
    return (
        <div className="border-[1px] md:py-6">
            <div className="m-2  ">
                <div className="flex gap-2">
                    <input type="checkbox" /> <p className=" text-slate-300 ">{props.p}</p></div>
                <div className="flex justify-end cursor-pointer">
                    <div className="bg-[#4375FB] bg-opacity-50 text-center px-2 w-[100px] flex justify-end ">
                        <p className="text-[#F2F2F2] text-[12px]  p-2">{props.value}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}