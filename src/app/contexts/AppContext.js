'use client'
import {useState, useEffect, useContext, createContext, useCallback} from 'react'
import axios from 'axios'

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
//funciones custom
    const [ pins, setPins ] = useState([]);
    const [ pin, setPin ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ boards, setBoards ] = useState([]);

    const getAllPins = useCallback(async () => {
        try {
            const res = await axios.get(`http://localhost:4000/pins`);
            setPins(res.data.pins)
        } catch (error) {
            console.log(error)
        }
    }, [])

    const getOnePin = useCallback(async (id) => {
      try {
        const res = await axios.get(`http://localhost:4000/pins/${id}`)
        setPin(res.data.pin)
        return res.data.pin
      } catch (error) {
        console.log(error)
      }
    }, [])

    const getCategories = useCallback(async (category) => {
    try {
      const res = await axios.get(`http://localhost:4000/categories`);
      setCategories(res.data.categories);
      return res.data.categories;
    } catch (error) {
      console.log(error);
    }
  }, [])

  const getAllBoards = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4000/boards`);
      setBoards(res.data.boards);
      console.log(res.data.boards);
      return res.data.boards
    } catch (error) {
      console.log(error);
    }
  }, [])

   const createBoard = async (name, description = '') => {
        try {
            const res = await axios.post(`${API_URL}/boards`, { name, description });
            setBoards([...boards, res.data.board]);
            return res.data.board;
        } catch (error) {
            console.log(error);
        }
    }

    const addPinToBoard = async (boardId, pinId) => {
      try {
        await axios.post(`http://localhost:4000/boards/${boardId}/pins/${pinId}`);
        getAllBoards();
      } catch (error) {
        console.log(error);
      }
    }

    const deletePinFromBoard = async (boardId, pinId) => {
      try {
        await axios.delete(`http://localhost:4000/boards/${boardId}/pins/${pinId}`);
        getAllBoards();
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        getAllPins()
        getAllBoards() 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <AppContext.Provider
      value= {{
        pins,
        getAllPins,
        pin,
        getOnePin,
        getCategories,
        categories,
        getAllBoards,
        boards,
        createBoard,
        addPinToBoard,
        deletePinFromBoard
      }}
    >
      {children}
    </AppContext.Provider>

  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if(!context){
    throw new Error ('useAppContext must be used within a AppContextProvider')
  }
  return context;
}