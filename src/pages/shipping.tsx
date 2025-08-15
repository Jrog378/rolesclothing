import { Container, Typography, Box, Divider, List, ListItem, ListItemText, Alert } from "@mui/material";

export default function ShippingAndReturns() {
//   const effective = new Date().toLocaleDateString(undefined, {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Shipping & Returns – Roles Clothing
      </Typography>
      <Typography variant="subtitle1" gutterBottom>Effective Date: August 14th, 2025</Typography>

      {/* Shipping */}
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>Shipping</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary="Processing Time"
              secondary="Orders ship within 1–2 business days (Mon–Fri). Peak seasons may add 1–2 days."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Delivery Estimates"
              secondary="Standard: 3–7 business days • Expedited: 2–3 business days • Overnight: 1 business day (carrier-dependent)."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Shipping Fees"
              secondary="Shown at checkout based on destination, method, and order weight/size."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Tracking"
              secondary="A tracking link is emailed once your order ships."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Address Changes"
              secondary="Contact support@rolesclothing.com ASAP. We can’t reroute once a label is created or the carrier has the parcel."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="International"
              secondary="Duties/taxes may apply and are the customer’s responsibility unless stated otherwise at checkout."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Lost/Damaged Packages"
              secondary="Report within 7 days of the last scan/delivery. We’ll help file a carrier claim and arrange a replacement or refund when applicable."
            />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Returns */}
      <Box>
        <Typography variant="h5" gutterBottom>Returns & Exchanges</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary="Return Window"
              secondary="30 days from delivery for most items."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Eligibility"
              secondary="Unworn, unwashed items with original tags/packaging. Final sale, gift cards, and worn items are not returnable."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="How to Start"
              secondary="Email support@rolesclothing.com with your order #, item(s), and reason. We’ll issue an RMA and, when applicable, a prepaid label."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Costs"
              secondary="Prepaid return labels may be deducted from refunds unless the item was incorrect or defective."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Exchanges"
              secondary="Fastest method: place a new order and return the original for a refund. Direct size/color exchanges may be available while stock lasts."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Refunds"
              secondary="Issued to the original payment method 3–7 business days after we receive and inspect the return."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Defects/Wrong Item"
              secondary="Report within 7 days of delivery with photos. We’ll replace or refund at no cost to you."
            />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Packing & Tips */}
      <Box>
        <Typography variant="h6" gutterBottom>Packing Guidelines</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary="Condition"
              secondary="Include all accessories/packaging. Use a protective outer box or poly mailer and remove old labels."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Proof of Drop-off"
              secondary="Keep the carrier receipt until your refund is processed."
            />
          </ListItem>
        </List>
      </Box>

      <Alert severity="info" sx={{ mt: 4 }}>
        Questions? We’re here to help: <strong>support@rolesclothing.com</strong>
      </Alert>
    </Container>
  );
}
