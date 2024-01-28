import { type Message } from 'ai'

export interface Chat extends Record<string, any> {
  id: string
  title: string
  createdAt: Date
  userId: string
  path: string
  messages: Message[]
  sideChats: {
    trumpId: string;
    trumpAdverseId: string;
    nikiId: string;
    nikiAdverseId: string;
  }[];
  articles: {
    title?: string;
    image?: string;
    text?: string;
    score?: number;
  }[];
  sharePath?: string
}

export type ServerActionResult<Result> = Promise<
  | Result
  | {
      error: string
    }
>
