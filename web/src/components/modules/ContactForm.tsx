"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Integrate with EmailJS here later
        console.log(values)
        alert("Thank you! We will get back to you shortly.")
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-serif text-3xl mb-6 text-primary">Send an Inquiry</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                        {...form.register("name")}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your Name"
                    />
                    {form.formState.errors.name && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            {...form.register("email")}
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="hello@example.com"
                        />
                        {form.formState.errors.email && (
                            <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input
                            {...form.register("phone")}
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="+1 (555) 000-0000"
                        />
                        {form.formState.errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                        {...form.register("message")}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 h-32"
                        placeholder="Tell us about your event or stay..."
                    />
                    {form.formState.errors.message && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                </div>

                <Button type="submit" variant="harbour" className="w-full">
                    Send Message
                </Button>
            </form>
        </div>
    )
}
