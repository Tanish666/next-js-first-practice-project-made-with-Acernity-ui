'use client'
import React from 'react'
import { signIn, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
function Githubbtn() {
 
function handleLogin(e:any){
e.preventDefault();
signIn("github",{ callbackUrl: "http://localhost:3000" });


  }
 
    return (
    <div>
    <Button variant="outline" className="w-full"  onClick={(e) => handleLogin(e)}>
                          github
    </Button>
    </div>
  )
}

export default Githubbtn
