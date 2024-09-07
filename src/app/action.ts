"use server"

import { signIn } from "@/auth"


export const  enter = async()=>{
    await signIn("okta")
}