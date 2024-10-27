"use client"

import { useState } from "react"
import { Leaf, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser";
import{ toast} from "react-hot-toast";




export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [query, setQuery] = useState("")
 
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: any) => {
    if(!name || !email || !query) {
      toast.error("Please fill in all fields.");
      return;
    }
    
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      {
        from_name: name,
        to_name: process.env.NEXT_PUBLIC_TO_NAME!,
        from_email: email,
        to_email: process.env.NEXT_PUBLIC_TO_EMAIL!,
        message: query,
      },
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
    )
    .then(() => {
        setName("");
        setEmail("");
        setQuery("");
       toast.success("Message sent successfully!");
       setLoading(false);
    })
    .catch(() => {
      toast.error("Failed to send message. Please try again later.");
      setLoading(false);
    })
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-yellow-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-green-800 inline-flex items-center">
              <Leaf className="mr-2 h-12 w-12 text-green-600" />
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Have a question or inquiry? We'd love to hear from you!
            </p>
          </div>

          <div  className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
                Your Query
              </label>
              <Textarea
                id="query"
                placeholder="How can we help you?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
                className="w-full h-32"
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-lg flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Other Ways to Reach Us</h2>
            <p className="text-gray-600 mb-2">
              <Mail className="inline-block mr-2 h-5 w-5" />
              Email: contact@globexagriexport.com
            </p>
            <p className="text-gray-600">
              <Send className="inline-block mr-2 h-5 w-5" />
              Address: 123 Agri Lane, Export City, Country
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}