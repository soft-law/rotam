import React from "react";

const TestimonialsSection = () => {
  return (
    <section style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "var(--XL, 120px) 0px",
      gap: "51px",
      alignSelf: "stretch",
      background: "var(--green-50, #EFF4F6)"
    }}>
      <h1 style={{
        color: "var(--green-900, #1F353C)",
        fontFamily: "Manrope",
        fontSize: "39px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "120%",
        alignItems: "center",
      }}>
        What people are saying
      </h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px" // Adjust as needed
      }}>
        {/* Testimonial cards */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "var(--S, 20px)",
          borderRadius: "12px",
          background: "var(--green-0, #FFF)",
          boxShadow: "0px 10px 14.2px 0px rgba(0, 0, 0, 0.04)",
          width: "343px" // Limit width of each card
        }}>
          <div>
            {/* Testimonial text */}
            <p>
              Selling my car used to be a headache, but not anymore. The verification checks reassured me, and handling the paperwork was a breeze with their help.
            </p>
          </div>
          <b style={{ color: "var(--blue-700)" }}>Ana, Peru</b>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "var(--S, 20px)",
          borderRadius: "12px",
          background: "var(--green-0, #FFF)",
          boxShadow: "0px 10px 14.2px 0px rgba(0, 0, 0, 0.04)",
          width: "343px" // Limit width of each card
        }}>
          <div>
            {/* Testimonial text */}
            <p>
              Selling my car used to be a headache, but not anymore. The verification checks reassured me, and handling the paperwork was a breeze with their help.
            </p>
          </div>
          <b style={{ color: "var(--blue-700)" }}>Ana, Peru</b>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "var(--S, 20px)",
          borderRadius: "12px",
          background: "var(--green-0, #FFF)",
          boxShadow: "0px 10px 14.2px 0px rgba(0, 0, 0, 0.04)",
          width: "343px" // Limit width of each card
        }}>
          <div>
            {/* Testimonial text */}
            <p>
              Selling my car used to be a headache, but not anymore. The verification checks reassured me, and handling the paperwork was a breeze with their help.
            </p>
          </div>
          <b style={{ color: "var(--blue-700)" }}>Ana, Peru</b>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "var(--S, 20px)",
          borderRadius: "12px",
          background: "var(--green-0, #FFF)",
          boxShadow: "0px 10px 14.2px 0px rgba(0, 0, 0, 0.04)",
          width: "343px" // Limit width of each card
        }}>
          <div>
            {/* Testimonial text */}
            <p>
              Selling my car used to be a headache, but not anymore. The verification checks reassured me, and handling the paperwork was a breeze with their help.
            </p>
          </div>
          <b style={{ color: "var(--blue-700)" }}>Ana, Peru</b>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "var(--S, 20px)",
          borderRadius: "12px",
          background: "var(--green-0, #FFF)",
          boxShadow: "0px 10px 14.2px 0px rgba(0, 0, 0, 0.04)",
          width: "343px" // Limit width of each card
        }}>
          <div>
            {/* Testimonial text */}
            <p>
              Selling my car used to be a headache, but not anymore. The verification checks reassured me, and handling the paperwork was a breeze with their help.
            </p>
          </div>
          <b style={{ color: "var(--blue-700)" }}>Ana, Peru</b>
        </div>
        {/* Add more testimonial cards similarly */}
      </div>
    </section>
  );
}

export default TestimonialsSection;
