"use client"

import { useState } from "react"
import saveEmail from "../lib/saveEmail"
import Button from "./Button"


const GetEmail = () => {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState("idle")

    async function submitForm(e) {
        e.preventDefault()
        setStatus("loading")

        try {
            const successMsg = await saveEmail(email)
            console.log(successMsg)
            setStatus("success")
            setEmail("")
        } catch (error) {
            console.log(error)
            setStatus("failed")
        } finally {
            setTimeout(() => {
                setStatus("idle")
            }, 3000)
        }
    }
    return (
        <section className="bg-darkPurple text-white text-center">
            <div className="space-y-8 lg:py-8">
                <h1 className="text-2xl md:text-3xl  font-semibold">Join our newsletter</h1>
                <h2>We made mistakes when we started buying property, but we learnt. Learn from our insights and be a wise investor.</h2>
                <div className=" pb-10 max-w-md lg:max-w-xl mx-auto">
                    <form className="flex flex-wrap items-center justify-center gap-4 md:gap-y-6 " onSubmit={submitForm}>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Your email adresss" className="text-gray-800 text-base lg:text-xl p-2 md:py-4 px-4 focus:outline-gray-300 outline-gray-700 rounded w-full" type="email" name="email" id="" required />
                        <Button inverted disabled={status === "loading"}>{
                            status === "loading" ? "sending..." : "Register Email"
                        }</Button>
                    </form>
                    {status === "success" && <p className=" lowercase pt-1 text-green-400 font-medium">Sent</p>}
                    {status === "failed" && <p className="lowercase pt-1 text-red-400 font-medium">Please try again</p>}
                </div>
            </div>
        </section>
    )
}

export default GetEmail