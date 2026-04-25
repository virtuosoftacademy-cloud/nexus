import { Button } from "@/components/ui/button"
import Link from "next/link"


function NotFound() {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
        <Button>
          <Link href={'/'}>
            Home
          </Link>
        </Button>
      <p className="text-4xl font-light">Page Not Found</p>
    </div>
  )
}

export default NotFound