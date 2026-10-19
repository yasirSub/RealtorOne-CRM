const Card = {
  baseStyle: () => ({
    p: "20px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    borderRadius: "18px",
    minWidth: "0px",
    wordWrap: "break-word",
    bg: "#1C1C1C",
    color: "#ECECE9",
    border: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "none",
    backgroundClip: "border-box",
  }),
};

export const CardComponent = {
  components: {
    Card,
  },
};
