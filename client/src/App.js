import React, { useState, useEffect } from "react";
import Customer from "./components/Customer";
import { Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from '@mui/material';

function App() {
  const [customers, setCustomers] = useState([]);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch('/api/customer');
      const body = await response.json();
      return body;
    }

    const progress = () => {
      setCompleted(prevCompleted => prevCompleted >= 100 ? 0 : prevCompleted + 1);
    }

    const timer = setInterval(progress, 200);

    callApi()
      .then(res => {
        setCustomers(res);
        progress(); 
      })
      .catch(err => console.log(err));

    return () => clearInterval(timer);
  }, []);



  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.length > 0 ? customers.map((c) => (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )) : 
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress variant="determinate" value={completed} />
            </TableCell>
          </TableRow>}
        </TableBody>
      </Table>
    </>
  );
}

export default App;
