import error from "@/assets/error.svg";
import styles from "./ErrorScreen.module.css";
import { Button } from "@/components/ui/button";

export function ErrorScreen({
  message,
  onGoBack 
}: { 
  message: string;
  onGoBack: () => void;
}) {
  const handleGoBack = () => {
    onGoBack();
  };

  return (
    <div className={styles.container}>
      <div className={styles.errorImageBox}>
        <img
          src={error}
          alt="An error occurred"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="max-w-md flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-white">
          Oops! Something went wrong
        </h2>
        <p className="text-[#ACA9AC] text-lg">
          {message}
        </p>
        <div className="w-full flex gap-4 justify-center">
          <Button
            className={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            className={styles.goBackButton}
            onClick={handleGoBack}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
