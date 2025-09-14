"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
    isLoading: boolean;
    onComplete?: () => void;
    duration?: number;
}

export default function Loader({ isLoading, onComplete, duration = 3000 }: LoaderProps) {
    const [showLoader, setShowLoader] = useState(isLoading);

    useEffect(() => {
        if (isLoading) {
            setShowLoader(true);
        } else {
            // Add a small delay before hiding to ensure smooth transition
            const timer = setTimeout(() => {
                setShowLoader(false);
                onComplete?.();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading, onComplete]);

    return (
        <AnimatePresence>
            {showLoader && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#F0E5D6]"
                >
                    <div className="loader">
                        <div className="square">
                            <div className="mini_square sq-1"></div>
                            <div className="mini_square sq-2"></div>
                            <div className="mini_square"></div>
                            <div className="mini_square sq-4"></div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
