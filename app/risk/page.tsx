
"use client"

import OnboardingPage from "@/components/onboarding-page"



export default function IndexPage() {
    return (
        <OnboardingPage title="In 1962 the biggest risk to democracy was nuclear armaggedon." subtitle="A palpable threat of physical annihilation" href="actors" >
            <img
                alt="Hero Image"
                className="object-scale-down h-[100vh] mb-[-20vh]"
                src="/output-onlinegiftools.gif" // Replace with your GIF file path
                style={{
                    aspectRatio: "2/1",
                    objectFit: "contain",
                }}
          />
        </OnboardingPage>
    )
}
