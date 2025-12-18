import React from "react";
import LoginForm from './components/LoginForms';

function App() {
  const handleLogin = (credentials) => {
    console.log('Logging with: ', credentials);
  };

  return (
    <div className="App">
      <h1>
        Login Page
      </h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
