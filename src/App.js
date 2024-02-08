import React, { useState, useEffect } from 'react';
import { auth, database, onAuthStateChanged, ref, onValue, push } from './firebase';
import MonthDisplay from './components/MonthDisplay';
import LogEntry from './components/LogEntry';
import LogList from './components/LogList';
import ExportButton from './components/ExportButton';
import SignInButton from './components/SignInButton';
import SignOutButton from './components/SignOutButton';

const App = () => {
  const [user, setUser] = useState(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const logsRef = ref(database, `users/${currentUser.uid}/logs`);
        onValue(logsRef, (snapshot) => {
          const logsData = snapshot.val();
          const logsList = logsData ? Object.values(logsData) : [];
          setLogs(logsList);
        });
      } else {
        setLogs([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const addLog = (newLog) => {
    if (user) {
      const logsRef = ref(database, `users/${user.uid}/logs`);
      push(logsRef, newLog);
    }
  };

  const exportLogs = () => {
    const text = logs.map(log => `${log.date}: ${log.duration}`).join('\n');
    navigator.clipboard.writeText(text);
    alert('Logs copied to clipboard!');
  };

  return (
    <div className="app">
      {user ? (
        <>
          <SignOutButton />
          <MonthDisplay logs={logs} />
          <LogEntry onAdd={addLog} />
          <LogList logs={logs} />
          <ExportButton onExport={exportLogs} />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

export default App;
