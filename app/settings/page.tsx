/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wak8TB6fDiG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IndexPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Fine-tune Nicki's Campaign Strategy</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Start with default settings and return to this screen later to adjust as needed.
        </p>
      </header>
      <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden dark:bg-gray-800">
        <div className="px-4 py-4">
          <div className="mt-4">
            <label className="block text-gray-600 dark:text-gray-400" htmlFor="populism">
              Populism
            </label>
            <div className="mt-2">
              <Slider
                className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700"
                defaultValue={[50]}
                id="populism"
              >
                <div className="h-2 rounded-full bg-blue-500">
                  <div className="w-4 h-4 rounded-full bg-white shadow" />
                </div>
              </Slider>
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-2">
                <span>Purely fact-based</span>
                <span>Unrealistic, bombastic promises</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <label className="block text-gray-600 dark:text-gray-400" htmlFor="tone">
              Tone
            </label>
            <div className="mt-2">
              <Slider className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700" defaultValue={[100]} id="tone">
                <div className="h-2 rounded-full bg-red-500">
                  <div className="w-4 h-4 rounded-full bg-white shadow" />
                </div>
              </Slider>
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-2">
                <span>Conciliatory, hope-based</span>
                <span>Inflammatory, provocative, fear-based</span>
              </div>
            </div>
          </div>
        </div>
        <Link href={'/'}>
            <div className="px-4 py-4">
            <Button className="w-full h-12 text-white bg-black hover:bg-gray-800 rounded-md">Apply Changes</Button>
            </div>
        </Link>
      </div>
    </main>
  )
}

