import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">Welcome to AI-KEA!</h1>
        <p className="leading-normal text-muted-foreground">
          This is an advanced chat bot trained to make your life as an IKEA
          employee easier. Ask me anything you want to know about IKEA products
          and I'll answer to the best of my abilities.
        </p>
        <p className="leading-normal text-muted-foreground">
          This project is created by Capstone Team 15 in the course TEK830
          Digitalization and AI in practice given by Chalmers University of
          Technology.
        </p>
      </div>
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">OBS!</h1>
        <p className="leading-normal text-muted-foreground">
          To avoid paid subscriptions in creating this project, we are using
          free versions of various services. This comes with limitations to
          the text size that can be generated per query. If you bypass this 
          limit an error will occur, after which you will have to refresh to 
          continue using our product.
        </p>
      </div>
    </div>
  )
}
