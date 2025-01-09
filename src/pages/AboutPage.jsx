import { parseDoc } from "../utils/parse-doc";
import { useEffect, useState } from "react";

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
    <div className="container mx-auto p-4">
        <h1 className="heading-text">About Me</h1>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <div className="whitespace-pre-wrap">
                {content}
            </div>
        )}
    </div>
  );
}
