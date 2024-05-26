import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    role: 'BUYER',
  });

  const navigate = useNavigate();

  const { firstName, lastName, email, phone, password, role } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateFormData = () => {
    const { firstName, lastName, email, phone, password, role } = formData;
  
    if (!firstName || !lastName || !email || !phone || !password || !role) {
      return false;
    }
  
    // Add more validation logic as needed, such as checking if the email is valid
  
    return true;
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateFormData()) {
      console.error('Invalid form data');
      return;
    }
  
    try {
      console.log('Registering user...', formData);
      const res = await api.post('/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <form className="w-full max-w-md p-8 bg-white rounded shadow-md" onSubmit={onSubmit}>
        <h2 className="mb-6 text-2xl font-bold text-primary">Register</h2>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange}
          placeholder="First Name"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChange}
          placeholder="Last Name"
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
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
          type="text"
          name="phone"
          value={phone}
          onChange={onChange}
          placeholder="Phone"
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
        <select
          name="role"
          value={role}
          onChange={onChange}
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
        >
          <option value="SELLER">Seller</option>
          <option value="BUYER">Buyer</option>
        </select>
        <button type="submit" className="w-full p-3 text-white rounded bg-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
