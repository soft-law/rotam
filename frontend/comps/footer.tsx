import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer style={{
      display: "flex",
      height: "551px",
      padding: "var(--XL, 120px) 126px",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-end",
      alignSelf: "stretch",
      background: "var(--blue-700, #4D28FF)",
      color: "#ffffff" // Text color
    }}>
      <div style={{ width: "100%", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "30px" }}>
        <Image
          width={227}
          height={228}
          alt="rotamlogo"
          src="/Rotamwheel.svg"
        />
        <div style={{ height: "195.4px", width: "720px", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingTop: "45px", paddingRight: "0", paddingBottom: "32.5px" }}>
          <Image
             width={550}
             height={100}
             
            alt="rotam"
            src="/Rotamtext.svg" // You need to replace this with your image source
          />
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
        <h1 style={{ margin: "0",marginRight: "170px", position: "relative", lineHeight: "120%", fontWeight: "bold", fontSize: "30px", fontFamily: "inherit" }}>2024 All Right Reserved ©</h1>
      </div>
    </footer>
  );
}

export default Footer;
