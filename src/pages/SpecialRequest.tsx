import { Box, Typography, Paper, Link } from "@mui/material";

export default function SpecialRequestsPage() {
  return (
    <Box p={4} maxWidth="800px" mx="auto">
      <Typography variant="h3" gutterBottom>
        Special Requests & Shipping
      </Typography>

      {/* Special Requests Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Special Requests
        </Typography>
        <Typography variant="body1" mb={2}>
          We’re happy to accommodate unique requests for your order, including custom colors,
          special sizing, and personalized messages or gift notes.
        </Typography>
        <Typography variant="body1" mb={2}>
          To make a special request, please email us at{" "}
          <Link href="mailto:support@rolesclothing.com">
            support@rolesclothing.com
          </Link>{" "}
          with your order number and details. Our team will get back to you promptly to confirm
          availability and options.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Special requests may require additional processing time and, in some cases, an extra
          charge. We’ll confirm everything with you before your order is finalized.
        </Typography>
      </Paper>

      {/* Shipping Section */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Shipping
        </Typography>
        <Typography variant="body1" mb={2}>
          We currently ship to addresses within the United States. Shipping to other countries may
          be available upon request. Please contact us before placing an international order to
          confirm availability, shipping rates, and estimated delivery times.
        </Typography>
        <Typography variant="body1" mb={2}>
          To request shipping outside the US, email us at{" "}
          <Link href="mailto:support@rolesclothing.com">
            support@rolesclothing.com
          </Link>{" "}
          with your location and the items you’d like to purchase.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          International orders may require additional processing time and may be subject to import
          duties, taxes, and customs fees, which are the responsibility of the recipient.
        </Typography>
      </Paper>
    </Box>
  );
}
