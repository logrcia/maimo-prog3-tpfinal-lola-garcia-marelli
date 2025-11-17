'use client'
import { useState } from 'react'
import { useAppContext } from '@/app/contexts/AppContext'

const SavePinModal = ({ pinId, onClose }) => {
  const { boards, addPinToBoard, createBoard } = useAppContext()
  const [showCreateBoard, setShowCreateBoard] = useState(false)
  const [newBoardName, setNewBoardName] = useState('')
  const [newBoardDescription, setNewBoardDescription] = useState('')

  const handleSaveToBoard = async (boardId) => {
    await addPinToBoard(boardId, pinId)
    onClose()
  }

  const handleCreateAndSave = async () => {
    const newBoard = await createBoard(newBoardName, newBoardDescription)
    if (newBoard) {
      await addPinToBoard(newBoard._id, pinId)
      setNewBoardName('')
      setNewBoardDescription('')
      setShowCreateBoard(false)
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Guardar en tablero</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            X
          </button>
        </div>
        
        {/* Lista de tableros */}
        <div className="space-y-2 mb-6">
          {boards.length > 0 ? (
            boards.map(board => {
              const isAlreadySaved = board.pins?.find(p => p._id === pinId);
              return (
                <button
                  key={board._id}
                  onClick={() => !isAlreadySaved && handleSaveToBoard(board._id)}
                  disabled={isAlreadySaved}
                  className={`w-full text-left p-4 rounded-lg transition flex justify-between items-center ${
                    isAlreadySaved 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-purple-50 hover:bg-purple-100 text-gray-800'
                  }`}
                >
                  <div>
                    <p className="font-medium">{board.name}</p>
                    <p className="text-sm text-gray-500">{board.pins?.length || 0} pins</p>
                  </div>
                  {isAlreadySaved && (
                    <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">Guardado</span>
                  )}
                </button>
              );
            })
          ) : (
            <p className="text-center text-gray-500 py-4">No hay tableros todavía</p>
          )}
        </div>

        {/* Crear nuevo tablero */}
        {!showCreateBoard ? (
          <button
            onClick={() => setShowCreateBoard(true)}
            className="w-full bg-white border-2 border-dashed border-purple-300 text-purple-600 py-3 rounded-lg font-medium hover:bg-purple-50 transition flex items-center justify-center gap-2"
          >
            
            Crear nuevo tablero
          </button>
        ) : (
          <div className="space-y-3">
            <input
              type="text"
              value={newBoardName}
              onChange={(e) => setNewBoardName(e.target.value)}
              placeholder="Nombre del tablero"
              className="w-full border-2 border-gray-200 rounded-lg p-3"
            />
            <textarea
              value={newBoardDescription}
              onChange={(e) => setNewBoardDescription(e.target.value)}
              placeholder="Descripción (opcional)"
              className="w-full border-2 border-gray-200 rounded-lg p-3"
            />
            <div className="flex gap-2">
              <button
                onClick={handleCreateAndSave}
                className="flex-1 bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700"
              >
                Crear y guardar
              </button>
              <button
                onClick={() => setShowCreateBoard(false)}
                className="flex-1 bg-gray-300 p-3 rounded-lg hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SavePinModal