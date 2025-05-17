"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Page() {
  const [name, setName] = React.useState("")
  const [contact, setContact] = React.useState("")
  const [date, setDate] = React.useState("")
  const [pkg, setPkg] = React.useState("")
  const [email, setEmail] = React.useState("")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, contact, date, pkg, email }),
    })

    if (res.ok) {
      alert("Appointment booked and email sent.")
      setName("")
      setContact("")
      setDate("")
      setPkg("")
      setEmail("")
    } else {
      alert("Failed to send email.")
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-blend-hue">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center text-xl">Book Appointment</CardTitle>
          <CardDescription className="text-center">Book Your Slot Now.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                 <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="contact">Contact No</Label>
                <Input
                  id="contact"
                  placeholder="Write your Contact No"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

       <div className="flex flex-col space-y-1.5 relative">
  <Label htmlFor="date">Date</Label>
  <div className="relative">
    <Input
      id="date"
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="pr-10" // Add padding to prevent text overlap with icon
    />
    <button
      type="button"
      onClick={() => (document.getElementById('date') as HTMLInputElement | null)?.showPicker()}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    </button>
  </div>
</div>


              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="package">Package</Label>
                <Select value={pkg} onValueChange={setPkg}>
                  <SelectTrigger id="package">
                    <SelectValue placeholder="Select Package" />
                  </SelectTrigger>
                  <SelectContent className="bg-black text-white">
                    <SelectItem value="ritual">Radiance Ritual - $20 </SelectItem>
                    <SelectItem value="revival">Luxe Hair Revival - $30</SelectItem>
                    <SelectItem value="henna">Henna Elegance - $15</SelectItem>
                    <SelectItem value="glow">Royal Duo Glow - $25</SelectItem>
                    <SelectItem value="escape">Serenity Escape - $40</SelectItem>
                    <SelectItem value="bridal">Bridal Luxe Signature - $100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <CardFooter className="flex justify-center mt-4">
              <Button type="submit" className="border border-1 hover:bg-white hover:text-black">Submit</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
