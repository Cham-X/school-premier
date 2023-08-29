import React from 'react'
import styles from "./Sidebar.module.css"
import Button from './Resources/Button';
import arrow from "../assets/images/icn arrow-right .icn-xs.png"
import { FaTimes, FaTimesCircle } from "react-icons/fa";
import { useGlobalContext } from '../Context';


export default function Sidebar() {
    const { isSideBarOpen, closeSideBar } = useGlobalContext();
  return (
    <aside className={`${styles.sidebar} ${isSideBarOpen ? styles.showSidebar : ''}`}>

    <div className={styles.sidebarHeader}>
    <h3 className={styles.logotext}>School-Premier <br /> Shamsudeen</h3>
      <button className={styles.closeBtn} onClick={closeSideBar}>
        <FaTimesCircle/>
      </button>
    </div>
    <ul className={styles.links}>
           <li><a href="/#">Home</a></li>
            <li><a href="/#">Products</a></li>
            <li><a href="/#">Pricing</a></li>
            <li><a href="/#">Contect</a></li>
    </ul>
    <ul>
            <li><a href="/#">Login</a></li>
            <Button type="submit">JOIN US <span><img src={arrow} alt="arrow" /></span></Button>
          </ul>
  </aside>
  )
}
