/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OB4LNodcYP3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'


export default function Toolbar({ title, mainPage, onCallback }: {title: string, mainPage?: boolean, onCallback?: () => void}) {
    const router = useRouter()
  return (
    <div className="flex items-center justify-between p-4 bg-white text-center sticky top-0 z-">
      <Button size="icon" variant="ghost" onClick={() => onCallback ? onCallback() : router.back()} className={`${mainPage ? 'opacity-0' : ''}`}>
        <ArrowLeftIcon className="h-4 w-4" />
        <span className="sr-only">Back</span>
      </Button>
      <h1 className="text-lg font-semibold text-center mx-auto">{title}</h1>
      <div className={`flex gap-2 ${mainPage ? 'opacity-0' : ''}`}>
        <Button size="icon" variant="ghost">
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button size="icon" variant="ghost">
          <UserIcon className="h-4 w-4" />
          <span className="sr-only">Profile</span>
        </Button>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}