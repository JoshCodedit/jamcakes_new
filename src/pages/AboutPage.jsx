import { parseDoc } from "../utils/parse-doc";
import { useEffect, useState } from "react";
import about1 from "../../public/images/about1.jpeg";

export default function AboutPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        parseDoc("https://docs.google.com/document/d/e/2PACX-1vQhlP0dMMf6h7VsYTa7AlFPglFZFGHGelmt9DGYXeCvAiUM-Lfe1NYItYYuN4f2mUHczn9QsDUFJS8b/pub")
            .then((content) => {
                setContent(content);
                setError(null);
            })
            .catch((error) => {
                console.error("Error fetching upscaling content:", error);
                setError("Failed to load content. Please try again later.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
  return (
    <div className="max-w-[1800px] mx-auto p-4">
        <h1 className="heading-text">About Me</h1>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <div className="flex flex-col min-[1015px]:flex-row gap-28 mt-10 items-center justify-center mx-auto">
                <div className="whitespace-pre-wrap min-[1015px]:w-1/4 text-[18px] text-center">
                    {content}
                </div>
                <div>
                    <img src={about1} alt="about" className="max-w-80 h-auto rounded-lg" />
                </div>
            </div>
        )}
    </div>
  );
}
