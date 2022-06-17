import {
  createContext, useContext, useState, useEffect,
} from 'react';
import { api } from '../services';

export const DataContext = createContext({});

export function DataProvider({ children }) {
  const [apis, setApis] = useState([]);
  const [editApi, setEditApi] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filterAPi, setFilterAPi] = useState({});
  const [apiById, setApiById] = useState(null);

  async function getApis() {
    setIsLoading(true);
    const response = await api.get('/apis');
    setIsLoading(false);
    setApis(response.data);
  }

  async function getCategories() {
    const response = await api.get('/categories');
    setCategories(response.data.categories);
  }
  useEffect(() => {
    getCategories();
    getApis();
  }, []);

  async function getApiById(id) {
    const response = await api.get(`/apis/${id}`);
    setApiById(response.data);
  }

  return (
    <DataContext.Provider
      value={{
        apis,
        editApi,
        setEditApi,
        isLoading,
        setIsLoading,
        categories,
        filterAPi,
        setFilterAPi,
        getApis,
        getApiById,
        apiById,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  return context;
}
