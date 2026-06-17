import { useState, type FC, type PropsWithChildren } from "react";

type CopyBlockProps = PropsWithChildren<{
    value?: string;
}>;

const CobyBlock: FC<CopyBlockProps> = ({ children, value }) => {
    const [showButton, setShowButton] = useState(false);
    const [copied, setCopied] = useState(false);

    const writeClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.setAttribute("readonly", "");
            textarea.style.position = "fixed";
            textarea.style.top = "-9999px";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            textarea.remove();
        }
    }

    const copyCode = async () => {
        if (value) {
            await writeClipboard(value);
            setCopied(true);
            return;
        }

        const forCopy = document.createElement('div');
        forCopy.innerHTML = (children as any).props.value;
        await writeClipboard(forCopy.innerText);
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
                className={["copyButton", showButton && "showCopyButton", copied && "copyButtonCopied"].filter(Boolean).join(" ")}
                onClick={copyCode}
            ></button>
            {children}
        </div>
    );
} 

export default CobyBlock;
