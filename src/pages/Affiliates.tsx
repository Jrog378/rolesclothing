// Affiliates.tsx
import { Container, Typography, Box, Divider, List, ListItem, ListItemText, Alert, Button, Stack } from "@mui/material";

export default function Affiliates() {
//   const effective = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  // Quick config (edit to match your program)
  const CONFIG = {
    commissionRate: "10%",       // default commission per qualified order
    cookieDays: 30,              // attribution window
    payoutSchedule: "Monthly",   // payout cadence
    payoutThreshold: "$50",      // minimum to get paid
    networkName: "Roles Affiliate Portal",
    contact: "support@rolesclothing.com",
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>Affiliate Program – Roles Clothing</Typography>
      <Typography variant="subtitle1" gutterBottom>Effective Date: August 14th, 2025</Typography>

      {/* Overview */}
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>Overview</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary="What It Is"
              secondary="Earn commissions by promoting Roles Clothing with your unique tracking links or codes."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Commission"
              secondary={`Standard commission: ${CONFIG.commissionRate} per qualified order attributed to your link.`}
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Attribution Window"
              secondary={`Cookie duration: ${CONFIG.cookieDays} days (last-click unless otherwise specified).`}
            />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Eligibility */}
      <Box>
        <Typography variant="h5" gutterBottom>Eligibility</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary="Who Can Apply"
              secondary="Creators, publishers, and community leaders with original content and an engaged audience."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Content Standards"
              secondary="No hateful, illegal, or misleading content. Family-friendly and brand-safe spaces preferred."
            />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* How It Works */}
      <Box>
        <Typography variant="h5" gutterBottom>How It Works</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="Apply" secondary="Submit your application; we review brand fit and audience quality." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Get Your Links" secondary={`Upon approval, access links, banners, and assets in the ${CONFIG.networkName}.`} />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Promote" secondary="Share links on your site, socials, email newsletter, or videos." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Earn" secondary="You earn a commission on qualified purchases made through your link within the cookie window." />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Payments */}
      <Box>
        <Typography variant="h5" gutterBottom>Payouts</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="Schedule" secondary={`${CONFIG.payoutSchedule} payouts after returns/refunds clear (typically 7–14 days post-order).`} />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Minimum" secondary={`Minimum payout: ${CONFIG.payoutThreshold}. Unpaid earnings roll over.`} />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Method" secondary="Paid via the affiliate portal (e.g., bank transfer or PayPal depending on your region)." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Taxes" secondary="Affiliates are responsible for any applicable tax forms and filings." />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Branding & Promotion */}
      <Box>
        <Typography variant="h5" gutterBottom>Branding & Promotion Guidelines</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="Accurate Claims" secondary="Do not make false or unsupported product claims or pricing promises." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Creative Assets" secondary="Use approved logos, product images, and banners from the affiliate portal." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Discount Codes" secondary="Only share codes provided to you or publicly available on our site." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Paid Ads" secondary="Bidding on our brand terms or impersonating official accounts is prohibited unless expressly approved." />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Compliance */}
      <Box>
        <Typography variant="h5" gutterBottom>Disclosures & Compliance</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="FTC Disclosure" secondary="Clearly disclose affiliate relationships (e.g., “This post contains affiliate links…”)." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Privacy & Data" secondary="Follow local privacy laws and platform rules; no spam or unsolicited messaging." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Prohibited Content" secondary="No adult, hateful, violent, or illegal content; no coupon scraping or fake reviews." />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Termination & Changes */}
      <Box>
        <Typography variant="h5" gutterBottom>Termination & Changes</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="Program Changes" secondary="We may update rates, rules, or assets; updates apply after notice in the portal or by email." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Removal" secondary="We may suspend/terminate participation for policy violations or misuse." />
          </ListItem>
        </List>
      </Box>

      <Alert severity="info" sx={{ mt: 4 }}>
        Questions or partnership ideas? <strong>{CONFIG.contact}</strong>
      </Alert>

      <Stack direction="row" spacing={2} mt={3}>
        <Button disabled variant="contained" href="">Apply Now</Button>
      </Stack>
    </Container>
  );
}
