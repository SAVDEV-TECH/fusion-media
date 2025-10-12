"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type FormState = {
  name: string
  phone: string
  email: string
  businessType: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    businessType: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState<string>("")

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!form.name || !form.email) {
      setError("Please provide your name and email.")
      return
    }

    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Network response was not ok")

      setStatus("sent")
      setForm({ name: "", phone: "", email: "", businessType: "" })
    } catch (err) {
      setStatus("error")
      setError("Could not send message. Please try again later.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
      <div>
        <label className="block text-sm font-medium text-blue-700">Full name</label>
        <Input name="name" value={form.name} onChange={onChange} required />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-700">Phone</label>
        <Input name="phone" value={form.phone} onChange={onChange} />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-700">Email</label>
        <Input type="email" name="email" value={form.email} onChange={onChange} required />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-700">Type of business</label>
        <Input name="businessType" value={form.businessType} onChange={onChange} />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" className="bg-blue-600" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Inquiry"}
        </Button>
        {status === "sent" && <p className="text-green-600">Thanks — we received your message.</p>}
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </form>
  )
}
