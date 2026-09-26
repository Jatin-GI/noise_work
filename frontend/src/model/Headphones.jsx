import React, { useLayoutEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Headphones(props) {
  const { scene } = useGLTF('/headphones.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  useLayoutEffect(() => {
    materials.black.metalness = 0.7
    materials.black.roughness = 0.28
    materials.black.envMapIntensity = 1.15
    materials.white.metalness = 0.02
    materials.white.roughness = 0.4
    materials.white.envMapIntensity = 0.7
  }, [materials])
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.black} skeleton={nodes.Object_8.skeleton} rotation={[-1.57, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.white} skeleton={nodes.Object_9.skeleton} rotation={[-1.57, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/headphones.glb')
