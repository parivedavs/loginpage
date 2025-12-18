import React, {useState} from 'react';

const LoginForms = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPwd] = useState('');
    const [err, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            setError('Email and password are required');
            return;
        }
        setError('');
        onLogin({email, password});
    };

    return(
        <form onSubmit={handleSubmit} aria-label='login-form'>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input id="password" type='password' value={password} onChange={(e) => setPwd(e.target.value)} placeholder='Enter Password'/>                
            </div>
            {err && <p style={{color: 'red'}}>{err}</p>}
            <button type='submit'>Login</button>
        </form>
    );
}

export default LoginForms;