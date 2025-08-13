import axios from 'axios';

const BASE_URL = ' http://localhost:8000';

export const getStudents = () => axios.get(`${BASE_URL}/students`);
export const getStudentById = (id) => axios.get(`${BASE_URL}/students/${id}`);
export const addStudent = (student) => axios.post(`${BASE_URL}/students`, student);
export const updateStudent = (id, student) => axios.put(`${BASE_URL}/students/${id}`, student);
export const deleteStudent = (id) => axios.delete(`${BASE_URL}/students/${id}`);
