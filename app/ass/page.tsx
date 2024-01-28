'use client'

import { useState, useEffect } from 'react'
import Chat from '.'

export default function Chats() {
  const [headline, setHeadline] = useState('')
  const [firstMessage, setFirstMessage] = useState('')
  const [submitClicked, setSubmitClicked] = useState(false)
  const [chatResponse, setChatResponse] = useState('')

  const handleChatResponse = response => {
    setChatResponse(response)
  }

  const handleSubmit = () => {
    setFirstMessage(headline)
    setSubmitClicked(true)
  }

  useEffect(() => {
    if (submitClicked) {
      setSubmitClicked(false)
    }
  }, [submitClicked])

  return (
    <div>
      <input
        type="text"
        value={headline}
        placeholder="Enter your headline"
        onChange={e => setHeadline(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <Chat
        person="trump"
        first_message={firstMessage}
        submitClicked={submitClicked}
        onChatResponse={handleChatResponse}
        otherChatResponse={chatResponse}
      />
      <Chat
        person="advisor"
        onChatResponse={handleChatResponse}
        otherChatResponse={chatResponse}
      />
    </div>
  )
}
