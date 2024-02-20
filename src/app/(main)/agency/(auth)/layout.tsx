
import React, { PropsWithChildren } from 'react'


export default function AuthLayout({children}: PropsWithChildren) {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        {children}
    </div>
  )
}