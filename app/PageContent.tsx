'use client'

import { useSearchParams } from 'next/navigation'

export default function PageContent() {
  const params = useSearchParams()
  const name = params.get('name') ?? 'Test'

  return <div>{name}</div>
}