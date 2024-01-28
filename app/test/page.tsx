import Image from 'next/image'
import nytlogo from '../../public/nyt.png'
import based from '../../public/based.png'
import PollResults from '@/components/poll-results'

export default function NewYorkTimes({
  headline,
  image,
  description
}: {
  headline: string
  image?: string | null
  description: string
}) {
  return (
    <div>
      <PollResults nikki={0} trump={0} />
    </div>
  )
}
