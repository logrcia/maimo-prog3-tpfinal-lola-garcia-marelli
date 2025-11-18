'use client'
import { useState } from 'react'
import { useAppContext } from '@/app/contexts/AppContext'

const SavePinModal = ({ pinId, onClose }) => {
  const { boards, addPinToBoard, createBoard } = useAppContext()
  const [showCreateBoard, setShowCreateBoard] = useState(false)
  const [newBoardName, setNewBoardName] = useState('')

  const handleSaveToBoard = async (boardId) => {
    await addPinToBoard(boardId, pinId)
    onClose()
  }

  const handleCreateAndSave = async () => {
    const newBoard = await createBoard(newBoardName)
    console.log(newBoardName);
    if (newBoard) {
      await addPinToBoard(newBoard._id, pinId)
      setNewBoardName('')
      setShowCreateBoard(false)
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Save to board</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            X
          </button>
        </div>

        <div className="mb-6">
          {boards.length > 0 ? (
            boards.map((board) => {
              const isAlreadySaved = board.pins?.find((p) => p._id === pinId);
              return (
                <button
                  key={board._id}
                  onClick={() =>
                    !isAlreadySaved && handleSaveToBoard(board._id)
                  }
                  disabled={isAlreadySaved}
                  className={`w-full text-left p-4 rounded-lg transition flex justify-between items-center mb-2 ${
                    isAlreadySaved
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-pink-50 hover:bg-pink-100 text-gray-800"
                  }`}
                >
                  <div>
                    <p className="font-medium text-xl">{board.name}</p>
                    <p className="text-sm text-gray-500">
                      {board.pins?.length || 0} pins
                    </p>
                  </div>
                  {isAlreadySaved && (
                    <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                      Saved
                    </span>
                  )}
                </button>
              );
            })
          ) : (
            <p className="text-center text-gray-500 py-4">No boards yet</p>
          )}
        </div>

        {!showCreateBoard ? (
          <button
            onClick={() => setShowCreateBoard(true)}
            className="w-full bg-white border-2 border-pink-300 text-pink-600 py-3 rounded-lg font-medium hover:bg-pink-50 transition flex items-center justify-center gap-2"
          >
            Create new board
          </button>
        ) : (
          <div className="space-y-3">
            <input
              type="text"
              value={newBoardName}
              onChange={(e) => setNewBoardName(e.target.value)}
              placeholder="Board name"
              className="w-full border-2 border-gray-200 rounded-xl p-3"
            />
        
            <div className="flex gap-2">
              <button
                onClick={() => {
                  handleCreateAndSave();
                  setShowCreateBoard(false);
                }}
                className="flex-1 bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700"
              >
                Create and save
              </button>
              <button
                onClick={() => setShowCreateBoard(false)}
                className="flex-1 bg-gray-300 p-3 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SavePinModal