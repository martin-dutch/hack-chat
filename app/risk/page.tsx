
"use client"

import OnboardingPage from "@/components/onboarding-page"



export default function IndexPage() {
    return (
        <OnboardingPage title="In 1962 the biggest risk to democracy was nuclear armaggedon." subtitle="A palpable threat of physical annihilation" href="actors" >
            <img
                alt="Hero Image"
                className="object-scale-down h-[70vh]"
                src="/liberty.png" // Replace with your GIF file path
                style={{
                    aspectRatio: "1/1",
                    objectFit: "contain",
                }}
          />
        </OnboardingPage>
    )
}
