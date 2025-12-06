"use client"

import { useCallback, useState } from "react"

export const useToogle = () => {
    const [value, setValue] = useState(true);

    const toggle = useCallback(() => {
        setValue(current => !current);
    }, []);

    const setTrue = useCallback(() => {
        setValue(true);
    }, []);

    const setFalse = useCallback(() => {
        setValue(false);
    }, []);

    // Returns the state and the control functions
    return {
        isOpen: value,
        toggle,
        open: setTrue,
        close: setFalse,
    };
};