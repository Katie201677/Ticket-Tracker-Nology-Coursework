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
    <section className={styles.app}>
      <h1 className={styles.heading}>Ticket Tracker</h1>
      <div className={styles.grid}>
        {team.map(getEmployeeJsx)}
      </div>
    </section>
  );
}

export default App;
