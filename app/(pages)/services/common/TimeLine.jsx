import StepWidget from "@/components/common/StepWidget";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TimeLine(timeLine) {
  const { titleParts, timeLineItems,businessOutComes } = timeLine
  return (
    <StepWidget
      heading={
        <>
          {titleParts.map((part, i) =>
            typeof part === 'string' ? (
              part
            ) : (
              <span key={i} className={part.bold ? "font-bold" : ""}>
                {" "} {part.text} {" "}
              </span>
            )
          )}
        </>
      }
      button={
        <Button asChild>
          <Link href="/">Build What’s Next</Link>
        </Button>
      }
      steps={timeLineItems}
      outComes={businessOutComes}
    />
  );
}
