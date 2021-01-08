import axios from 'axios';

// esse app usa um mock de servidor. É preciso ter json-server instalado

// parece que uma boa prática é criar um instancia do axios
const apiClient = axios.create({
  // lembrar que URL é uppercase, senao da erro
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf',
  },
});

// achei interessante esse jeito de exportar, nunca tinha visto
export default {
  getEvents() {
    // como api é uma instancia do axios posso chamar o get com a rota desejada
    return apiClient.get('/events');
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`);
  },
};
