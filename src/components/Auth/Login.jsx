import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <form className="w-full max-w-md p-8 bg-white rounded shadow-md" onSubmit={onSubmit}>
        <h2 className="mb-6 text-2xl font-bold text-primary">Login</h2>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="w-full p-3 text-white rounded bg-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
