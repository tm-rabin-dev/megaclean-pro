import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import StickyMobileCTA from './StickyMobileCTA'
import ChatWidget from './ChatWidget'
import AnnouncementBar from './AnnouncementBar'
import { useRevealAll } from '../hooks/useRevealAll'

export default function Layout() {
  useRevealAll()

  const [barVisible, setBarVisible] = useState(() => {
    try { return localStorage.getItem('clenza-bar-dismissed') !== '1' } catch { return true }
  })

  const dismissBar = () => {
    setBarVisible(false)
    try { localStorage.setItem('clenza-bar-dismissed', '1') } catch {}
  }

  const navTop = barVisible ? 40 : 0

  return (
    <div className="min-h-screen flex flex-col">
      {/* Announcement bar — fixed at very top */}
      {barVisible && (
        <div className="fixed top-0 left-0 right-0 z-[70] h-10">
          <AnnouncementBar onDismiss={dismissBar} />
        </div>
      )}

      <Navbar topOffset={navTop} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <StickyMobileCTA />
      <ChatWidget />
    </div>
  )
}
