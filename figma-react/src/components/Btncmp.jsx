import { useState } from "react"

export default function Btncmp(props) {
    console.log(props);
    return (
        <div className="border-[1px] md:py-6">
            <div className="m-2  ">
                <div className={props.step.bool ? "flex justify-between" : ""}>
                    <div className="flex gap-2">
                        {!props.step.bool ? <input type="checkbox" /> : <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="3.5" width="19" height="18" fill="white" stroke="black" />
                            <mask id="mask0_3181_333" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="-3" y="-9" width="38" height="38">
                                <rect x="-3" y="-9" width="38" height="38" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_3181_333)">
                                <path d="M12.1207 19.5L3.0957 10.475L5.35195 8.21875L12.1207 14.9875L26.6478 0.460419L28.904 2.71667L12.1207 19.5Z" fill="#5BB663" />
                            </g>
                        </svg>

                        }<p className={props.step.bool ? props.step.parat : props.step.paraf}>{props.step.p}</p></div>
                    {props.step.bool && <div>
                        <p className="text-[20px] font-[400] leading-[42.24px] tracking-[-0.32px] ">{props.step.date} </p>
                    </div>}
                </div>
                {props.step.bool && <div className="pl-8">
                    <p className="text-[#4375FB] ">{props.step.firstadd}</p>
                    <p className="text-[#4375FB] text-[32px] font-[700]  ">{props.step.secondadd} </p>

                </div>}
                <div className="flex justify-end cursor-pointer">
                    <div onClick={() => { return props.call() }} className={props.step.bool ? "flex justify-evenly bg-white border-[1px] border-[#4375FB] text-center px-2 w-[100px] flex justify-end " : "bg-[#4375FB] text-center px-2 w-[100px] flex justify-end "}>
                        <div><p className={props.step.bool ? "text-[#4375FB] " : "text-[#F2F2F2] text-[12px]  p-2"}>{props.step.bool ? props.step.stept : props.step.stepf}</p></div>
                        <div>{props.step.bool && <svg className="relative top-[8px] " width="10" height="12" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10V9H8V10H0ZM4 8L0.5 3.5H2.5V0H5.5V3.5H7.5L4 8ZM4 6.375L5.45 4.5H4.5V1H3.5V4.5H2.55L4 6.375Z" fill="#4375FB" />
                        </svg>
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}