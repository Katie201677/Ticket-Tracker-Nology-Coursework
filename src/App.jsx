import styles from "./App.module.scss";
import team from "./data/team";
import EmployeeCard from "./components/EmployeeCard";

const App = () => {
  
  const getEmployeeJsx = (employee) => (
    <EmployeeCard 
      employee={employee}
      key={employee.id}
    />
  );
  
  return (
    <>
    <h1 className={styles.heading}>Ticket Tracker</h1>
    <div className={styles.grid}>
      {team.map(getEmployeeJsx)}
    </div>
    </>
  );
}

export default App;
