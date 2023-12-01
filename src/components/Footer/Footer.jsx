import React from 'react'
import { useContext } from 'react'
import { WholeContext } from '../root'

export default function Footer() {
    const {equippedPoke}= useContext(WholeContext)
  return (
    <div>
        <button>Start Battle</button>
        <div>Equipped: {equippedPoke}</div>
    </div>
  )
}
