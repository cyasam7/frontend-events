// TODO: Refactor all styles from DashboardLayout in this file
const styles = {
  listItems: {
    "& span": {
      fontSize: "0.9rem",
      letterSpacing: 0,
    },
  },
  listItem: {
    color: "#68BA3F !important",
    "&:hover": {
      backgroundColor: "#00000000",
    },
  },
  listItemIcon: {
    color: "#68BA3F !important",
  },
  menuItem: {
    paddingLeft: "62px",
  },
  submenuItem: {
    padding: ".2rem .5rem",
    cursor: "pointer",
  },
  closedIcons: {
    paddingLeft: "24px !important",
  },
  multiItemClosed: {
    paddingLeft: "8px",
  },
  closeText: {
    marginLeft: "10px",
  },
  multiItemCloseText: {
    marginLeft: "18px",
  },
  selectedBackground: {
    /* background: `${paletteColors.transparentAccent} !important`, */
    borderLeft: 3,
    borderColor: "#67BB41",
  },
} as const;

export default styles;
