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
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

interface SidebarProps {}

const menuItems: string[] = ["Inbox", "Starred", "Sent Mail", "Drafts"];

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Drawer anchor="left" open={true} onClose={() => console.log("cerrando")}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>

        <List>
          {menuItems.map((text, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxOutlinedIcon />
                ) : (
                  <MailOutlineOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((text, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxOutlinedIcon />
                ) : (
                  <MailOutlineOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
