import React from 'react'
import { useContext } from 'react'
import { WholeContext } from '../root'
import { Outlet, Link } from 'react-router-dom'

export default function Footer() {
    const {equippedPoke}= useContext(WholeContext)
  return (
    <div>
        <button><Link to="/battle">Start Battle</Link></button>
        <div>Equipped: {equippedPoke}</div>
    </div>
  )
}
