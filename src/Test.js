import { useRef, useEffect } from 'react';

export default function Test() {
    const myRef = useRef();
    useEffect(() => {
        console.log('myRef', myRef.current);
    })
}
