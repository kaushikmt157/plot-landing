'use client'

export default function PageContent() {
  const params = new URLSearchParams(
    typeof window !== 'undefined' ? window.location.search : ''
  )

  const name = params.get('name') ?? 'Test'

  return <div>{name}</div>
}