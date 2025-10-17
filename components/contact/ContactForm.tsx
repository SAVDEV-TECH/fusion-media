"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type FormState = {
  name: string
  phone: string
  email: string
  businessType: string
  whatsapp?: string
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
        console.log(err)
      setStatus("error")
      setError("Could not send message. Please try again later.")
    }
  }

  return (
    // <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
    //   <div>
    //     <label className="block text-sm font-medium text-blue-700">Full name</label>
    //     <Input name="name" value={form.name} onChange={onChange} required />
    //   </div>

    //   <div>
    //     <label className="block text-sm font-medium text-blue-700">Phone</label>
    //     <Input name="phone" value={form.phone} onChange={onChange} />
    //   </div>

    //   <div>
    //     <label className="block text-sm font-medium text-blue-700">Email</label>
    //     <Input type="email" name="email" value={form.email} onChange={onChange} required />
    //   </div>

    //   <div>
    //     <label className="block text-sm font-medium text-blue-700">Type of business</label>
    //     <Input name="businessType" value={form.businessType} onChange={onChange} />
    //   </div>
    //     <div>
    //     <label className="block text-sm font-medium text-blue-700">whatsapp contact</label>
    //     <Input name="whatsapp" value={form.whatsapp} onChange={onChange} />
    //   </div>

    //   <div className="flex items-center gap-4">
    //     <Button type="submit" className="bg-blue-600" disabled={status === "sending"}>
    //       {status === "sending" ? "Submitting..." : "Submit"}
    //     </Button>
    //     {status === "sent" && <p className="text-green-600">Thanks — we received your message.</p>}
    //     {error && <p className="text-red-600">{error}</p>}
    //   </div>
    // </form>
   
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contact Fusion Midea
      </h1>

     <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-3xl mx-auto">
  <div className="relative w-full" style={{ paddingTop: "125%" }}> 
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdy5by-DBZ_AAdnGLFAQO9-q_OkPFHusCNS0CEcNQsfvF8F4A/viewform?usp=header"
      className="absolute top-0 left-0 w-full h-full rounded-lg"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      allowFullScreen
    >
      Loading…
    </iframe>
  </div>
</div>

    </section>
  );
}

  
