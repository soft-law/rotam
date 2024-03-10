import React from "react";
import Image from "next/image";

const TeamSection = () => {
  // Define team members
  const teamMembers = [
    { name: "Mario Andrade", role: "Founder, CEO", image: "/mario.png" },
    {
      name: "Nagra Rohit",
      role: "Smart-Contract Developer",
      image: "/rohit1.png",
    },
    { name: "Pat Sinma", role: "Product-Designer", image: "/pat.png" },
    { name: "Ganesh Oli", role: "Back-End Developer", image: "/ganesh.png" },
    // { name: "Rishad", role: "Front-End Developer", image: "/rishad.jpg" },
  ];

  // Calculate the alignment based on the number of team members
  const alignHeading = teamMembers.length > 0 ? "flex-start" : "center";

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "var(--XL, 120px)",
        gap: "10px",
        background: "#E3D6FF",
      }}
    >
      <h1
        style={{
          width: "100%",
          color: "#1F353C",
          fontFamily: "",
          fontSize: "39px",
          fontWeight: "700",
          lineHeight: "120%",
          textAlign: "center",
          alignSelf: alignHeading, // Align heading according to the first person's name
          marginBottom: "30px", // Add margin bottom to the heading
        }}
      >
        Meet the team
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "60px",
          width: "100%",
        }}
      >
        {/* Render team member cards */}
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              color: "#4D28FF",
              minWidth: "300px",
              maxWidth: "300px", // Limit width to avoid overflow on smaller screens
              paddingTop: "8px", // Add some padding to separate the line from the text
              textAlign: "left", // Center align the text
              borderTop: "3px solid #8975EA",
            }}
          >
            <div
              style={{
                width: "177px",
                height: "177px",
                borderRadius: "50%",
                overflow: "hidden",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              {member.image && (
                <Image
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                  alt={member.name}
                  src={member.image}
                />
              )}
            </div>
            <h2
              style={{
                fontWeight: "700",
                fontSize: "39px",

                paddingTop: "8px", // Add some space above the name
              }}
            >
              {member.name}
            </h2>

            <p
              style={{
                fontWeight: "450",
                fontSize: "15px",
              }}
            >
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
