import React, { useState } from 'react';
import styles from "./Counter.module.scss";

const Counter = () => {
  
  const [count, setCount ] = useState(0);
  
  return (
    <div className={styles.counter}>
      <h3>Completed Tickets</h3>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => setCount(count - 1)}
        >
        -</button>
        <p>{count}</p>
        <button
          className={styles.button}
          onClick={() => setCount(count + 1)}
        >
        +</button>
      </div>
    </div>
  )
}

export default Counter
