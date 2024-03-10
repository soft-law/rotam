"use client"
import { polkprovider } from "./functions/Polkprovider";

const Verification = () => {

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#2f505a",
        height: "35rem",
        overflow: "hidden",
        flexShrink: "0",
        textAlign: "left",
        fontSize: "95px",
        color: "#d0dfe4",
        fontFamily: "",
      }}
    >
      <img
        style={{
          width:"30%",
          position: "absolute",
          top: "15.02%",
          right: "58.24%",
          bottom: "12.87%",
          left: "9.22%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
          objectFit: "cover",
        }}
        alt=""
        src="/carfold.png"
      />

      <div
        style={{
          position: "absolute",
          top: "62px",
          left: "368px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
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
            textAlign: "right",
            display: "inline-block",
          }}
        >
          <p style={{ margin: "" }}>{`Start selling `}</p>
          <p style={{ margin: "" }}>{`your car your way `}</p>
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
            borderRadius: "60px",
            backgroundColor: "#d0dfe4",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "10px 40px",
            cursor: "pointer",
            fontSize: "16px",
            color: "#1f353c",
          }}
        >
          <div onClick={polkprovider} style={{ position: "relative" }}>Ask for Verification</div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
