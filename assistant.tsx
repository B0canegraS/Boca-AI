import React, { useState } from 'react'
import { Send, Book, Code, Globe, Calculator, Microscope, Music } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

// Simulated knowledge base categories
const categories = [
  { name: "General Knowledge", icon: <Book className="w-4 h-4" /> },
  { name: "Programming", icon: <Code className="w-4 h-4" /> },
  { name: "Geography", icon: <Globe className="w-4 h-4" /> },
  { name: "Mathematics", icon: <Calculator className="w-4 h-4" /> },
  { name: "Science", icon: <Microscope className="w-4 h-4" /> },
  { name: "Arts & Music", icon: <Music className="w-4 h-4" /> },
]

// Simulated responses from Savio
const savioResponses = [
  "Interesante pregunta. Basándome en mi amplia base de conocimientos, puedo decirte que...",
  "Excelente consulta. Según la información más reciente que tengo disponible...",
  "Esa es una pregunta compleja. Permíteme analizar múltiples fuentes para darte una respuesta precisa...",
  "Gracias por tu pregunta. He procesado una gran cantidad de datos sobre este tema y puedo decirte que...",
  "Fascinante tema. Mi base de datos contiene información de diversas fuentes confiables que sugieren...",
]

export default function BocaAIAssistant() {
  const [messages, setMessages] = useState([
    { text: "Hola, soy Savio, el asistente de Boca AI. Tengo acceso a una vasta cantidad de información sobre diversos temas. ¿En qué puedo ayudarte hoy?", isBot: true },
  ])
  const [input, setInput] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("General Knowledge")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isBot: false }])
      setInput("")
      
      // Simulate bot response
      setTimeout(() => {
        const randomResponse = savioResponses[Math.floor(Math.random() * savioResponses.length)]
        const fullResponse = `${randomResponse} [Respuesta basada en la categoría: ${selectedCategory}]`
        setMessages(prev => [...prev, { text: fullResponse, isBot: true }])
      }, 1000)
    }
  }

  return (
    <div className="flex h-screen bg-blue-900 text-white">
      <div className="w-64 bg-blue-800 p-4">
        <h2 className="text-xl font-bold mb-4">Categorías de Conocimiento</h2>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex items-center w-full p-2 mb-2 rounded ${
              selectedCategory === category.name ? 'bg-blue-600' : 'hover:bg-blue-700'
            }`}
          >
            {category.icon}
            <span className="ml-2">{category.name}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-col flex-grow">
        <header className="bg-blue-800 p-4 text-center">
          <h1 className="text-2xl font-bold">Boca AI - Asistente Avanzado</h1>
        </header>
        <ScrollArea className="flex-grow p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 p-2 rounded-lg ${
                message.isBot ? "bg-blue-700 self-start" : "bg-blue-600 self-end"
              }`}
            >
              {message.isBot && <p className="font-bold">Savio:</p>}
              {message.text}
            </div>
          ))}
        </ScrollArea>
        <div className="p-4 bg-blue-800">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Haz tu pregunta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-grow bg-blue-700 text-white placeholder-blue-300 border-blue-600"
            />
            <Button onClick={handleSend} className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
