import React from 'react';
import styles from "./EmployeeCard.module.scss";
import Counter from "../Counter";

const EmployeeCard = (props) => {
  
  const { name, role } = props.employee;
  
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h2>{name}</h2>
        <h3>{role}</h3>
      </div>
      <Counter />
    </div>
  )
}

export default EmployeeCard
