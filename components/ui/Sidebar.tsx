import { useContext } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { UIContext } from "../../context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);
  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((data: string, index: number) => (
            <ListItem button key={data}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={data} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((data: string, index: number) => (
            <ListItem button key={data}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={data} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
