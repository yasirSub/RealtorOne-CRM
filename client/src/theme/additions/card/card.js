import { mode } from "@chakra-ui/theme-tools";

const Card = {
  baseStyle: (props) => ({
    p: "20px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    borderRadius: "18px",
    minWidth: "0px",
    wordWrap: "break-word",
    bg: mode("#FFFFFF", "#1C1C1C")(props),
    color: mode("#2A2824", "#ECECE9")(props),
    border: "1px solid",
    borderColor: mode("rgba(123,119,101,0.18)", "rgba(255,255,255,0.08)")(props),
    boxShadow: "none",
    backgroundClip: "border-box",
  }),
};

export const CardComponent = {
  components: {
    Card,
  },
};
