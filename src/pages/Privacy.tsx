// PrivacyPolicy.tsx
import { Container, Typography, Box, Divider, List, ListItem, ListItemText, Alert } from "@mui/material";

export default function PrivacyPolicy() {
//   const effective = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>Privacy Policy – Roles Clothing</Typography>
      <Typography variant="subtitle1" gutterBottom>Effective Date: August 14th, 2025</Typography>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>What We Collect</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Personal Info" secondary="Name, email, phone, shipping/billing address, payment details." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Usage/Data" secondary="IP, device/browser type, pages viewed, cookies, and analytics events." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>How We Use It</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Orders" secondary="Process, fulfill, and support your purchases." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Communication" secondary="Send order updates and, if subscribed, promotions (opt out anytime)." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Improvement" secondary="Improve site performance, UX, and product offerings." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Security" secondary="Detect, prevent, and investigate fraud or abuse." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>Sharing</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="No Selling" secondary="We do not sell your personal information." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Service Providers" secondary="Payment processors, shipping partners, hosting, analytics—only what’s needed." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Legal" secondary="Disclosures required by law or to protect rights and safety." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>Cookies & Tracking</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Purpose" secondary="Remember preferences, analyze traffic, and personalize content." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Control" secondary="Manage cookies in your browser; some features may be limited." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>Your Rights</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Access/Update/Delete" secondary="Request a copy, correction, or deletion of your data." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Marketing Opt-Out" secondary="Use the unsubscribe link or contact support." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>Data Security</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Measures" secondary="Industry-standard safeguards; no method is 100% secure." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>Third-Party Links</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Note" secondary="External sites have their own privacy practices." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>Changes</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Updates" secondary="We’ll post updates here with a revised effective date." /></ListItem>
        </List>
      </Box>

      <Alert severity="info" sx={{ mt: 4 }}>
        Questions or requests? <strong>support@rolesclothing.com</strong>
      </Alert>
    </Container>
  );
}
