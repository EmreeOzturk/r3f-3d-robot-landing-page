/* eslint-disable */
import { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect } from "react";
export function Robot(props) {
  const { nodes, materials } = useGLTF("/models/robot/security_robot.glb");
  const robot = useRef();
  const scroll = useScroll();
  const tl = useRef();
  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 4, ease: "power1.inOut" },
    });

    tl.current
      .to(robot.current.rotation, { y: -1 }, 2)
      .to(robot.current.position, { x: 1 }, 2)

      .to(robot.current.rotation, { y: 1 }, 6)
      .to(robot.current.position, { x: -1 }, 6)

      .to(robot.current.rotation, { y: 0 }, 11)
      .to(robot.current.rotation, { x: 1 }, 11)
      .to(robot.current.position, { x: 0 }, 11)

      .to(robot.current.rotation, { y: 0 }, 13)
      .to(robot.current.rotation, { x: -1 }, 13)
      .to(robot.current.position, { x: 0 }, 13)

      .to(robot.current.rotation, { y: 0 }, 16)
      .to(robot.current.rotation, { x: 0 }, 16)
      .to(robot.current.position, { x: 0 }, 16)

      .to(robot.current.rotation, { y: 0 }, 20)
      .to(robot.current.rotation, { x: 0 }, 20)
      .to(robot.current.position, { x: 0 }, 20);
  }, []);
  return (
    <group {...props} dispose={null} ref={robot}>
      <group scale={0.005}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.UVbigS2_UVbigS2_0.geometry}
          material={materials.UVbigS2}
          position={[-44.032, -13.563, -38.12]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.UVbigS1_UVbigS1_0.geometry}
          material={materials.UVbigS1}
          position={[-64.879, -66.864, 19.292]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.uvC2_uvC2_0.geometry}
          material={materials.uvC2}
          position={[0, 131.656, 76.487]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.uvC1_uvC1_0.geometry}
          material={materials.uvC1}
          position={[-22.41, 179.616, 145.749]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.UVsmallS_UVsmallS_0.geometry}
          material={materials.UVsmallS}
          position={[-139.916, -134.835, 48.696]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/robot/security_robot.glb");
