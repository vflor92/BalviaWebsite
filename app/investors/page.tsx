"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Investors() {
    const router = useRouter();

    useEffect(() => {
        router.push('/investors/login');
    }, [router]);

    return null;
}
