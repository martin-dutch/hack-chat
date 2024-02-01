// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Chat/ChatMessage.tsx
import './Markdown.css';

import { Message } from 'ai'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

import { cn } from '@/lib/utils'
import { CodeBlock } from '@/components/ui/codeblock'
import { MemoizedReactMarkdown } from '@/components/markdown'
import { IconOpenAI, IconUser, ImageIcon } from '@/components/ui/icons'
import { ChatMessageActions } from '@/components/chat-message-actions'
import MyLoader from './textLoader';

export interface ChatMessageProps {
  message: Message
  size?: 'small' | 'large'
  trump: boolean
}

export function ChatMessage({ message,size, trump, ...props }: ChatMessageProps) {
  const small = size === 'small'
  console.log('message.content',message.content)
  return (
    <div
      className={cn('group relative mb-4 flex items-start md:-ml-12 px-8')}
      {...props}
    >
      <div
        className={cn(
          'flex size-8 shrink-0 select-none items-center justify-center rounded-md border shadow',
          message.role === 'user'
            ? 'bg-background'
            : 'bg-primary text-primary-foreground'
        )}
      >
        {message.role === 'user' ? trump?  <ImageIcon imageUrl={"https://thumbs.dreamstime.com/b/june-donald-trump-president-united-states-portrait-orange-face-hair-clip-art-icon-isolated-red-background-republican-186436485.jpg"} /> : <ImageIcon imageUrl={"https://cdn1.vectorstock.com/i/1000x1000/94/70/brunette-girl-icon-flat-style-vector-12459470.jpg"} />  : <ImageIcon imageUrl={"https://icons.veryicon.com/png/o/business/financial-icon-1/financial-adviser.png"} />}  
      </div>
      <div className={`flex-1 px-1 ml-4 space-y-2 overflow-hidden radius rounded-lg ${message.role === 'user' ? 'bg-slate-200' : 'bg-slate-300'}  `}>
        <MemoizedReactMarkdown
          className={`prose p-3 break-words prose-p:leading-relaxed prose-pre:p-0`}
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>
            },
            code({ node, inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == '▍') {
                  return (
                    <span className="mt-1 cursor-default animate-pulse">▍</span>
                  )
                }

                children[0] = (children[0] as string).replace('`▍`', '▍')
              }

              const match = /language-(\w+)/.exec(className || '')

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              )
            }
          }}
        >
          {`**${message.role === 'user' ? trump ? 'TRUMP' : 'NIKI' : 'ADVISOR'} SAYS** \n\n` + message.content}
        </MemoizedReactMarkdown>
        {
          message.content.length === 0 ? (<MyLoader/>) : (<></>)
        }
        <ChatMessageActions message={message} />
      </div>
    </div>
  )
}
