"use client";

import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        let ref = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(ref);
    }, []);

    return <div>{count}</div>;
};

export default Counter;
