import { style } from "@vanilla-extract/css";
import { vars } from "../../app.css";

export const wrapper = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  zIndex: 10000,
});

export const modalWindow = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "800px",
  height: "max-content",
  maxHeight: "500px",
  overflowY: "auto",
  backgroundColor: vars.color.mainDarker,
  opacity: 0.95,
  borderRadius: 14,
  padding: 20,
  boxShadow: vars.shadow.basic,
  color: vars.color.brightText,
});

export const header = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "40px",
});

export const closeButton = style({
  fontSize: vars.fontSizing.T2,
  cursor: "pointer",
  marginTop: "-20px",
  ":hover": {
    opacity: 0.8,
  },
});

export const title = style({
  fontSize: vars.fontSizing.T2,
  color: vars.color.brightText,
  marginRight: "auto",
  marginBottom: vars.spacing.medium,
});

export const buttons = style({
  display: "flex",
  justifyContent: "space-around",
  marginBottom: 50,
});

export const updateButton = style({
  border: "none",
  borderRadius: 5,
  fontSize: vars.fontSizing.T4,
  padding: vars.spacing.big2,
  marginRight: vars.spacing.big1,
  backgroundColor: vars.color.updateButton,
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
});

export const deleteButton = style({
  border: "none",
  borderRadius: 5,
  fontSize: vars.fontSizing.T4,
  padding: vars.spacing.big2,
  marginRight: vars.spacing.big1,
  backgroundColor: vars.color.delectButton,
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
});

export const inputStyle = style({
  width: "100%",
  minHeight: "30px",
  border: "none",
  borderRadius: 5,
  marginBottom: vars.spacing.big2,
  padding: vars.spacing.medium,
  fontSize: vars.fontSizing.T4,
  boxShadow: vars.shadow.basic,
});
