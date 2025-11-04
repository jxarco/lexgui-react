// import React from 'react'

export function Button({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      className="lexbutton"
      onClick={onClick}
      style={{ padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}
    >
      {label}
    </button>
  )
}
