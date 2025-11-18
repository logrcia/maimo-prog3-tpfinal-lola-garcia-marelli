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
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pins`);
            setPins(res.data.pins)
        } catch (error) {
            console.log(error)
        }
    }, [])

    const getOnePin = useCallback(async (id) => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pins/${id}`)
        setPin(res.data.pin)
        return res.data.pin
      } catch (error) {
        console.log(error)
      }
    }, [])

    const getCategories = useCallback(async (category) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
      setCategories(res.data.categories);
      return res.data.categories;
    } catch (error) {
      console.log(error);
    }
  }, [])

  const getAllBoards = useCallback(async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/boards`);
      setBoards(res.data.boards);
      console.log(res.data.boards);
      return res.data.boards
    } catch (error) {
      console.log(error);
    }
  }, [])

   const createBoard = async (name = '') => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/boards`, { name });
            setBoards(prev => [...prev, res.data.board]);
            return res.data.board;
        } catch (error) {
            console.log(error);
        }
    }

    const addPinToBoard = async (boardId, pinId) => {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/boards/${boardId}/pins/${pinId}`);
        getAllBoards();
      } catch (error) {
        console.log(error);
      }
    }

    const deletePinFromBoard = async (boardId, pinId) => {
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/boards/${boardId}/pins/${pinId}`);
        getAllBoards();
      } catch (error) {
        console.log(error);
      }
    }

    const getPinsByCategory = useCallback(async (categoryId) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}/pins`);
      setPins(res.data.pins);
      return res.data.pins;
    } catch (error) {
      console.log(error);
    }
  }, [])

    const addCommentToPin = async (pinId, values) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/pins/${pinId}/comments`, values);
    setPin(res.data.pin); // actualiza el pin en el estado global
    return res.data.pin;
  } catch (error) {
    console.log(error);
  }
};

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
        deletePinFromBoard,
        getPinsByCategory,
        addCommentToPin
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