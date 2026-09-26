import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, Environment, Html, Lightformer, OrbitControls } from '@react-three/drei'
import { Headphones } from './Headphones'
import { Earphone } from './Earphone'

function Loader() {
  return (
    <Html center>
      <p className="text-xs tracking-[0.22em] text-white/70 uppercase">Loading</p>
    </Html>
  )
}

function Studio() {
  return (
    <Environment resolution={256}>
      <Lightformer form="rect" intensity={3.5} position={[0, 1.5, 3]} scale={[5, 3, 1]} />
      <Lightformer form="rect" intensity={2} color="#c9d8ff" position={[-3.5, 1, -1]} scale={[2, 5, 1]} />
      <Lightformer form="rect" intensity={6} position={[1.5, 3, -4]} scale={[6, 2, 1]} />
    </Environment>
  )
}

export function HeadphonesCanvas() {
  return (
    <div className="h-full w-full touch-none">
      <Canvas
        camera={{ position: [0.18, 0.06, 0.7], fov: 38 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, toneMappingExposure: 1.05 }}
        onCreated={({ gl }) => gl.setClearColor('#f3f3f3', 1)}
      >
        <ambientLight intensity={0.12} />
        <directionalLight position={[3.2, 4.5, 4]} intensity={2.6} />
        <directionalLight position={[-4, 1.5, 2.5]} intensity={0.7} />
        <directionalLight position={[-1.5, 3.5, -5]} intensity={3.4} />
        <Suspense fallback={<Loader />}>
          <Headphones />
          <Studio />
        </Suspense>
        <OrbitControls
          enablePan={false}
          autoRotate
          enableZoom={false}
          autoRotateSpeed={1.35}
          minDistance={0.725}
          maxDistance={0.725}
          minPolarAngle={0.75}
          maxPolarAngle={1.65}
        />
      </Canvas>
    </div>
  )
}

export function EarphoneCanvas() {
  return (
    <div className="h-full w-full touch-none">
      <Canvas
        camera={{ position: [0.18, 0.06, 4.8], fov: 38 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, toneMappingExposure: 1.05 }}
        onCreated={({ gl }) => gl.setClearColor('#fff', 1)}
      >
        <ambientLight intensity={0.12} />
        <directionalLight position={[3.2, 4.5, 4]} intensity={2.6} />
        <directionalLight position={[-4, 1.5, 2.5]} intensity={0.7} />
        <directionalLight position={[-1.5, 3.5, -5]} intensity={3.4} />
        <Suspense fallback={<Loader />}>
          <Center>
            <Earphone />
          </Center>
          <Studio />
        </Suspense>
        <OrbitControls
          enablePan={false}
          autoRotate
          enableZoom={false}
          autoRotateSpeed={0.8}
          minDistance={4.8}
          maxDistance={4.8}
          minPolarAngle={0.75}
          maxPolarAngle={1.65}
        />
      </Canvas>
    </div>
  )
}
