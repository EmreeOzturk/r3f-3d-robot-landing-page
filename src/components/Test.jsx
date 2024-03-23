/* eslint-disable */
import { Canvas } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
const TestComponent = () => {
  const boxRef = useRef();
  useFrame((state, delta) => {
    boxRef.current.rotation.x += delta;
    boxRef.current.rotation.y += delta;
  });
  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <RoundedBox
        ref={boxRef}
        args={[2, 2, 2]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.05} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
      >
        <meshPhongMaterial color="#333" />
      </RoundedBox>
    </>
  );
};

export default TestComponent;
