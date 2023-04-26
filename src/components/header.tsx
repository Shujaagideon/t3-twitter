"use client"

import React from "react"
import Link from "next/link"
import rareplugLogo from '~/images/rareplugLogo.png'

import { cn } from "~/lib/utils"
import Image from "next/image"
import { UserBtns } from "./topbar"
import Nav from "./nav"

export function Header() {
  return (
    <>
      <div className="relative h-24 flex justify-between items-center px-4 lg:px-10 bg-slate-50 dark:bg-gray-900">
        <Image className="w-auto hidden md:block h-10" src={rareplugLogo} alt=""/>
        <Nav/>
        <UserBtns/>
      </div>
    </>
  )
}
