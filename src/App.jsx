/* eslint-disable */
import TestComponent from "./components/Test";
import {
  ScrollControls,
  Scroll,
  Environment,
  Backdrop,
  Sparkles,
  Float,
  Ring,
} from "@react-three/drei";
import { Robot } from "./models/Robot";
import baffle from "baffle";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const target = baffle(".title");
    target.set({
      characters: "░D▒e░n░i░z▒ üs░tü▒ köp░ürü░r",
      speed: 100,
    });
    target.start();
    target.reveal(600,600);
  }, []);
  return (
    <>
      <ScrollControls pages={6} damping={0.1}>
        {/* <Environment
          background // can be true, false or "only" (which only sets the background) (default: false)
          blur={0.1} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
          preset={"night"}
        /> */}
        <Robot />
        <Sparkles scale={10} count={1000} size={1} />
        <Float
          speed={3}
          rotationIntensity={3}
          floatIntensity={0.6}
          floatingRange={[1, 1]}
        >
          <Ring
            args={[0, 0.89, 64]}
            position={[0, 0, -2]}
            rotation={[0, 0, 0]}
            scale={3.5}
            receiveShadow
          >
            <meshStandardMaterial color="#7287fc" />
          </Ring>
        </Float>
        <Backdrop
          receiveShadow
          segments={50}
          floor={20.5}
          scale={[50, 31, 10]}
          position={[4, -10, 0]}
        >
          <meshStandardMaterial color="#353540" />
        </Backdrop>
        <Scroll>{/* <TestComponent /> */}</Scroll>
        <Scroll html style={{ width: "100%" }}>
          <h1
            className="title"
            style={{
              color: "#cdcbca",
              position: "absolute",
              top: `0`,
              left: "0",
              fontSize: "14em",
              width: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              userSelect: "none",
            }}
          >
            Deniz üstü köpürür
          </h1>
          <div
            className="row"
            style={{ position: "absolute", top: `130vh`, left: 0 }}
          >
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: "400px" }}>
              Featuring a sleek, metallic design inspired by advanced
              technology, this aftershave bottle is as stylish as it is
              functional. But it's not just a pretty face - inside, you'll find
              a nourishing and protective aftershave formula that will leave
              your skin feeling refreshed and hydrated.
            </p>
            <button>Read more</button>
          </div>

          <div
            className="row"
            style={{
              position: "absolute",
              top: `230vh`,
              right: 0,
            }}
          >
            <div
              className="col"
              style={{
                position: "absolute",
                right: 30,
                width: "540px",
                textAlign: "right",
              }}
            >
              <h2 style={{ textAlign: "right" }}>Tech-Savvy Side</h2>
              <p>
                Featuring a sleek, metallic design inspired by advanced
                technology, this aftershave bottle is as stylish as it is
                functional. But it's not just a pretty face - inside, you'll
                find a nourishing and protective aftershave formula that will
                leave your skin feeling refreshed and hydrated.
              </p>
              <button>Read more</button>
            </div>
          </div>
          <h2
            style={{
              position: "absolute",
              top: "350vh",
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Cutting-Edge of Grooming
          </h2>
          <button
            style={{
              position: "absolute",
              top: `590vh`,
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Buy now
          </button>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
