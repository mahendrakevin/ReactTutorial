import {useState} from "react";

interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({children, maxChars = 100}: Props) => {
    const [text, setText] = useState(children.slice(0, maxChars));
    if (children.length <= maxChars) {
        return <p>{children}</p>;
    }


    return (
        <>
            <p>
                {text}...
            </p>
            <button onClick={() => setText(children)}>Read more</button>
        </>
    );
}

export default ExpandableText;