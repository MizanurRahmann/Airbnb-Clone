'use client';

// #import section
import { useEffect, useState } from "react";

// #interface section
interface ClientOnlyProp {
    children: React.ReactNode;
}

// #main function
const ClientOnly: React.FC<ClientOnlyProp> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if(!hasMounted) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}

export default ClientOnly;