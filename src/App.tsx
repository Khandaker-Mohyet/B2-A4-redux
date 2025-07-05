import { Button } from "./components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function App() {
  

  return (
    <>
      <div >
      <Button>Click me</Button>
      <Input type="email" placeholder="Email" />
      <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
    </div>
    </>
  )
}

export default App
