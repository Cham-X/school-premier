import React from 'react'
import ConnectCard from './Resources/ConnectCard'
import User1 from "../assets/images/user-cover-4.png"
import User2 from "../assets/images/fixed-height sec-.png"
import User3 from "../assets/images/user-cover-1.png"
import User4 from "../assets/images/user-cover-2.png"

export default function ConnectSection() {
  return (
    <div className={styles}>
          <ConnectCard cardImage={ User1} cardName={"Julian Jameson"}/>
          <ConnectCard cardImage={ User2} cardName={"Julian Jameson"}/>
          <ConnectCard cardImage={ User3} cardName={"Julian Jameson"}/>
          <ConnectCard cardImage={ User4} cardName={"Julian Jameson"}/>
    </div>
  )
}
