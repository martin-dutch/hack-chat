'use client'

import {
  Message,
  // import as useAssistant:
  experimental_useAssistant as useAssistant
} from 'ai/react'

import { useEffect } from 'react'

const roleToColorMap: Record<Message['role'], string> = {
  system: 'red',
  user: 'black',
  function: 'blue',
  assistant: 'green',
  data: 'orange'
}

export default function Chat({
  person,
  first_message,
  submitClicked,
  onChatResponse,
  otherChatResponse
}: {
  person: string
  first_message?: string
  submitClicked?: boolean
  onChatResponse: (response: string) => void
  otherChatResponse: string
}) {
  const {
    status,
    messages,
    setInput,
    input,
    submitMessage,
    handleInputChange,
    threadId
  } = useAssistant({ api: `/api/assistant_${person}` })

  useEffect(() => {
    if (submitClicked && first_message) {
      setInput(first_message)
      submitMessage()
    }
  }, [submitClicked, first_message, setInput, submitMessage])

  useEffect(() => {
    // When a message is sent, call onChatResponse
    if (submitClicked) {
      onChatResponse(first_message ?? '')
    }
  }, [submitClicked, first_message, onChatResponse])

  useEffect(() => {
    // React to messages from the other chat
    if (otherChatResponse) {
      // Do something with otherChatResponse...
    }
  }, [otherChatResponse])

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h1>{`${person} - HQ`}</h1>
      {messages.map((m: Message) => (
        <div
          key={m.id}
          className="whitespace-pre-wrap"
          style={{ color: roleToColorMap[m.role] }}
        >
          <strong>{`${m.role}: `}</strong>
          {m.role !== 'data' && m.content}
          {m.role === 'data' && (
            <>
              {/* here you would provide a custom display for your app-specific data:*/}
              {(m.data as any).description}
              <br />
              <pre className={'bg-gray-200'}>
                {JSON.stringify(m.data, null, 2)}
              </pre>
            </>
          )}
          <br />
          <br />
        </div>
      ))}

      {status === 'in_progress' && (
        <div className="h-8 w-full max-w-md p-2 mb-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
      )}

      {/* <form onSubmit={submitMessage}>
        <input
          disabled={status !== 'awaiting_message'}
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="What is the temperature in the living room?"
          onChange={handleInputChange}
        />
      </form> */}
    </div>
  )
}
