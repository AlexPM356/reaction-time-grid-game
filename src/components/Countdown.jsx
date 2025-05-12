import { useEffect, useState } from 'react';
import { GridGame } from 'components/Grid';

export function CountdownTimer () {
    const [count, setCount] = useState(3);
  
    useEffect(() => {
        if (count <= 0) return;
        
        const timer = setTimeout(() => setCount(count - 1), 1000);
        return () => clearTimeout(timer);
    }, [count]);

    return (
        <section className="cd-countdown">{count > 0 ? count : <GridGame />}</section>
    )
    
}