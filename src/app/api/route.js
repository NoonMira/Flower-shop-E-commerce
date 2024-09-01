import axios from 'axios';

const API_URL = 'https://66d2df41184dce1713cea1bd.mockapi.io/api/flower'; // ใส่ URL ของ MockAPI ที่คุณได้รับ

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${menu}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};