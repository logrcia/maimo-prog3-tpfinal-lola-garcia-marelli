'use client'
import { useState } from 'react'
import { useAppContext } from '@/app/contexts/AppContext'

const CreateBoardModal = ({ onClose }) => {
  const { createBoard } = useAppContext()
  const [boardName, setBoardName] = useState('')

  const handleCreate = async () => {
    if (!boardName.trim()) return;
    
    await createBoard(boardName);
    setBoardName('');
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Create new board</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            X
          </button>
        </div>
        
        <input
          type="text"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          placeholder="Board name (e.g., Logo Inspiration)"
          className="w-full border-2 border-gray-200 rounded-lg p-4 mb-6 focus:border-purple-500 focus:outline-none text-lg"
          autoFocus
          onKeyPress={(e) => e.key === 'Enter' && handleCreate()}
        />
        
        <div className="flex gap-3">
          <button
            onClick={handleCreate}
            disabled={!boardName.trim()}
            className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Create Board
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateBoardModal