export default function Rendercomp(props) {
    return (
        <div className="  text-left pl-[8px] shadow-lg mb-4 m-2">
            <div><p className='font-sans font-[400] text-[32px] leading-[42.24px] tracking-[-0.32px] pb-2 '>{props.p}</p></div>
            <div><p className='font-sans font-[400] text-[16px] leading-[22.12px] tracking-[-0.32px] pb-2'>{props.sen} </p></div>
        </div>
    )
}