
"use client"

import OnboardingPage from "@/components/onboarding-page"



export default function IndexPage() {
    return (
        <OnboardingPage title="Let's arm the good guys." subtitle="We created an omniscient political strategist." href="ai-service" >
            <img
                alt="Hero Image"
                className="object-scale-down max-h-full pb-[3vh] h-[55vh]"
                src="https://media.istockphoto.com/id/492684225/vector/the-first-day-of-creation.jpg?s=612x612&w=0&k=20&c=lSN_2JVdNmWzkWMpLgXtUBhPhip0DaxzRIJHOBgTMGE=" // Replace with your GIF file path
                style={{
                    aspectRatio: "1/1",
                    objectFit: "contain",
                }}
          />
        </OnboardingPage>
    )
}