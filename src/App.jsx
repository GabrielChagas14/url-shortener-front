import { useState } from 'react'
import Input from './components/input'
import './App.css'
import Button from './components/button'

function App() {

  const [originalUrl, setOriginalUrl] = useState("")
  const [responseData, setResponseData] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:8080/api/url/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl }),
      })

      if (!response.ok) {
        throw new Error("Erro na requisição")
      }

      const data = await response.json()
      setResponseData(data)

    } catch (error) {
      console.error('Erro ao encurtar URL:', error)
      setResponseData(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

      {/* Só aparece se houver resposta válida */}
      {responseData && (
        <div className='max-w-md p-6 mx-auto bg-green-200 rounded-lg shadow-md mb-6 text-center text-green-800 font-bold text-md'>
          Seu Link Encurtado:{" "}
          <a 
            href={responseData.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {responseData.shortUrl}
          </a>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <Input
          label="URL:"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <Button text="Enviar" onClick={handleSubmit} />
      </div>

    </div>
  )
}

export default App