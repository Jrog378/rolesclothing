// TermsOfService.tsx
import { Container, Typography, Box, Divider, List, ListItem, ListItemText, Alert } from "@mui/material";

export default function TermsOfService() {
//   const effective = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>Terms of Service – Roles Clothing</Typography>
      <Typography variant="subtitle1" gutterBottom>Effective Date: August 14th, 2025</Typography>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>Acceptance</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Agreement" secondary="By using our site, you agree to these Terms." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Eligibility" secondary="Use our services only for lawful purposes." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>Products & Content</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Accuracy" secondary="We strive for accurate info but don’t guarantee it’s error-free." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Changes" secondary="We may modify or discontinue products without notice." /></ListItem>
          <ListItem disableGutters><ListItemText primary="IP Rights" secondary="All text, images, logos, and designs are owned by Roles Clothing or licensors." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Use Restrictions" secondary="No reproduction, distribution, or derivative works without permission." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>Orders, Pricing & Payment</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Orders" secondary="Provide accurate info; we may refuse/cancel at our discretion." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Pricing" secondary="Prices may change; taxes and shipping shown at checkout." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Payment" secondary="You authorize charges to the provided payment method." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>Shipping, Returns & Defects</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Shipping" secondary="See our Shipping & Returns page for timelines and fees." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Returns" secondary="30-day window for eligible items; details on the policy page." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Defects" secondary="Report within 7 days of delivery; we’ll repair/replace or refund as applicable." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>Disclaimers & Liability</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="AS IS" secondary="Services are provided “as is” and “as available.”" /></ListItem>
          <ListItem disableGutters><ListItemText primary="Limitation" secondary="We aren’t liable for indirect, incidental, or consequential damages to the extent permitted by law." /></ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h5" gutterBottom>Changes & Contact</Typography>
        <List>
          <ListItem disableGutters><ListItemText primary="Updates" secondary="We may update these Terms; continued use means acceptance." /></ListItem>
          <ListItem disableGutters><ListItemText primary="Contact" secondary="support@rolesclothing.com" /></ListItem>
        </List>
      </Box>

      <Alert severity="info" sx={{ mt: 4 }}>
        Need help with these Terms? <strong>support@rolesclothing.com</strong>
      </Alert>
    </Container>
  );
}
