import { FunctionComponent } from "react";

import Image from "next/image";

const Partner: FunctionComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#2a1496",
        height: "512px",
        overflow: "hidden",
        flexShrink: "0",
        textAlign: "left",
        fontSize: "95px",
        color: "#cebcff",
        fontFamily: "",
      }}
    >
      <Image
        width={666.19}
        height={668.53}
        style={{
          position: "absolute",
          top: "-88.17px",
          left: "762.96px",
          objectFit: "contain",
        }}
        alt=""
        src="/dao.png"
      />

      <div
        style={{
          position: "absolute",
          top: "62px",
          left: "126px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "40px 0px",
        }}
      >
        <div
          style={{
            width: "954px",
            position: "relative",
            lineHeight: "97%",
            fontWeight: "600",
            display: "inline-block",
          }}
        >
          Become our partner of Rotam’s Dao
        </div>
        <div
          style={{
            width: "396px",
            position: "relative",
            fontSize: "20px",
            color: "#eff4f6",
            display: "inline-block",
          }}
        >
          We handle the paperwork and delivery. Once everything is finalized,
          receive your payment seamlessly and securely.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "0px 40px",
            fontSize: "16px",
            color: "#1f353c",
          }}
        >
          <div
            style={{
              borderRadius: "60px",
              backgroundColor: "#cebcff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px 40px",
            }}
          >
            <div style={{ position: "relative" }}>Mechnical Verifier</div>
          </div>
          <div
            style={{
              borderRadius: "60px",
              backgroundColor: "#cebcff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px 40px",
            }}
          >
            <div style={{ position: "relative" }}>Aesthetic</div>
          </div>
          <div
            style={{
              borderRadius: "60px",
              backgroundColor: "#cebcff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px 40px",
            }}
          >
            <div style={{ position: "relative" }}>Legal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
