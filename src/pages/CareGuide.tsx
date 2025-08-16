import { Box, Typography, List, ListItem, ListItemText, Table, TableBody, TableCell, TableRow, Paper } from "@mui/material";

export default function CareGuide() {
  return (
    <Box p={4}>

      {/* Product Title */}
      <Typography variant="h4" gutterBottom>
        Comfort Meets Sustainability
      </Typography>

      {/* Product Description */}
      <Typography variant="body1" mb={3}>
        Stay warm, stylish, and eco-conscious with products 
        designed for everyone who values comfort and sustainability. This versatile article of clothing effortlessly 
        complements your lifestyle, whether you're relaxing at home, heading out for errands, or 
        gathering with friends. Ideal for casual outings or cozy nights in, it’s a thoughtful choice 
        for environmentally conscious individuals and a meaningful gift for any occasion, including 
        Earth Day, holidays, or winter celebrations.
      </Typography>

      {/* Features */}
      <Typography variant="h6" gutterBottom>
        Product Features:
      </Typography>
      <List>
        {[
          "Adjustable Hood: Equipped with drawstrings for a custom, comfortable fit.",
          "Kangaroo Pocket: Spacious front pocket for added warmth and convenient storage.",
          "Eco-Friendly Design: Made with a blend of cotton and recycled materials, reducing waste.",
          "Soft Fleece Lining: Provides a plush, cozy feel for ultimate comfort.",
          "Seamless Construction: Minimizes fabric waste and enhances durability."
        ].map((feature, idx) => (
          <ListItem key={idx} sx={{ py: 0 }}>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>

      {/* Care Guide */}
      <Typography variant="h6" mt={4} gutterBottom>
        Care Guide
      </Typography>
      <Typography variant="body2" mb={2}>
        To maintain the quality, comfort, and longevity of your EcoSmart® Hoodie, please follow these recommended care instructions:
      </Typography>
      <Paper sx={{ overflowX: "auto", mb: 3 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell><b>Washing</b></TableCell>
              <TableCell>Machine wash cold (max 30°C / 90°F) with similar colors. Turn inside out to preserve fabric and color.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b>Bleaching</b></TableCell>
              <TableCell>Use only non-chlorine bleach when necessary.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b>Drying</b></TableCell>
              <TableCell>Tumble dry on low heat. Remove promptly to reduce wrinkles.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b>Ironing</b></TableCell>
              <TableCell>Not required. If needed, use a cool iron on reverse side.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b>Dry Cleaning</b></TableCell>
              <TableCell>Not recommended to preserve eco-friendly fibers.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      {/* Extra Tips */}
      <Typography variant="body2">
        <b>Additional Tips:</b> Avoid fabric softeners to maintain fleece softness. 
        Wash less frequently to extend garment life and reduce environmental impact. 
        Store folded in a cool, dry place rather than hanging to prevent stretching.
      </Typography>

    </Box>
  );
}
