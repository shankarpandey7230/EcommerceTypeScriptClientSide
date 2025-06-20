import React, { useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import headImg from "../../../assets/images/head.jpg";
import tailImg from "../../../assets/images/tail.jpg";

const Toss = () => {
  const [angle, setAngle] = useState<number>(0);

  const flipCoin = () => {
    if (Math.random() > 0.5) setAngle((prev) => prev + 180);
    else setAngle((prev) => prev + 360);
  };
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Toss</h1>

        <section>
          <article
            className="tosscoin"
            onClick={flipCoin}
            style={{
              transform: `rotateY(${angle}deg)`,
            }}
          >
            <article
              className="tosscoin"
              onClick={flipCoin}
              style={{
                transform: `rotateY(${angle}deg)`,
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${headImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  position: "absolute",
                  backfaceVisibility: "hidden",
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${tailImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  position: "absolute",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(-180deg)",
                }}
              ></div>
            </article>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Toss;
