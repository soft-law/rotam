import { FunctionComponent } from "react";
import Image from "next/image";

const Footer: FunctionComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#4d28ff",
        height: "551px",
        overflow: "hidden",
        flexShrink: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "120px 126px",
        boxSizing: "border-box",
        textAlign: "left",
        fontSize: "39px",
        color: "#eff4f6",
        fontFamily: "",
      }}
    >
      <div
        style={{
          width: "1173px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          width={227.03}
          height={228}
          style={{ position: "relative" }}
          alt=""
          src="/Rotamwheel.svg"
        />
        <Image
          width={727}
          height={162.86}
          style={{ position: "relative" }}
          alt=""
          src="/Rotamtext.svg"
        />
      </div>
      <b style={{ position: "relative", lineHeight: "120%" }}>
        2024 All Right Reserved ©
      </b>
    </div>
  );
};

export default Footer;
