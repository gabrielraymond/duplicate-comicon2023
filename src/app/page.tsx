import Hero from '@/features/hero/ui'
import Image from 'next/image'

export default function Home() {
  return (
    <main
      className="  min-h-screen "
      // onMouseMove={(e: any) => {
      //   setMouseMovement(e);
      // }}
    >
      <div id="main">
        <Hero />
      </div>
    </main>
  )
}
