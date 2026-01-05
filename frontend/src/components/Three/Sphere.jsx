import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Bubble = ({ position, size }) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.position.y += 0.003;
    if (ref.current.position.y > 3) {
      ref.current.position.y = -3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color="#38bdf8"
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const Sphere = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <Bubble
          key={i}
          position={[
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 2
          ]}
          size={Math.random() * 0.25 + 0.1}
        />
      ))}
    </>
  );
};

export default Sphere;
