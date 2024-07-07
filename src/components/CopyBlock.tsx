import { useEffect, useState, type FC, type PropsWithChildren } from "react";

const CobyBlock: FC<PropsWithChildren> = ({ children }) => {
    const [showButton, setShowButton] = useState(false);
    const [copied, setCopied] = useState(false);

    const copyCode = async () => {
        const forCopy = document.createElement('div');
        forCopy.innerHTML = (children as any).props.value;
        await navigator.clipboard.writeText(forCopy.innerText);
        setCopied(true);
    }

    const handleMouseLeave = () => {
        setShowButton(false);

        const timeout = setTimeout(() => {
            setCopied(false);
            clearTimeout(timeout);
        }, 400)
    }

    return (
        <div 
            className="copyBlock"
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={handleMouseLeave}
        >
            <button 
                className={`copyButton ${showButton && 'showCopyButton'} ${copied && 'copyButtonCopied'}`}
                onClick={copyCode}
            ></button>
            {children}
        </div>
    );
} 

export default CobyBlock;
