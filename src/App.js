import "./styles.css";
import Employee from "./components/Employee";
import Employees from "./components/Employees";
import Error from "./components/Error";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [loading, setLoading] = useState(true);
  const [employeesData, setEmployeesData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const getEmployeeData = (id = null) => {
    setLoading(true);
    let individualData = false;
    let acutalId = null;
    if (!!id && parseInt(id, 10) > 0) {
      actualId = parseInt(id, 10);
    }
    if (!!id) {
      individualData = true;
    }
    axios.get("https://api.matgargano.com/employees/").then((response) => {
      setEmployeesData(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <div className="App">
      {!!loading && <Loading />}
      {!loading && (
        <div>
          {!selectedEmployee && (
            <Employee selectedEmployee={selectedEmployee} />
          )}
          <Employees
            setSelectedEmployee={setSelectedEmployee}
            data={employeesData}
          />
          <Error />
        </div>
      )}
    </div>
  );
}
