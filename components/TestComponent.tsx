import React from 'react'
import { Italic } from "lucide-react"
 
import { Toggle } from "@/components/ui/toggle"

const TestComponent = () => {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}

export default TestComponent