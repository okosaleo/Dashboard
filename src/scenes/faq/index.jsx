import { Box, Typography, useTheme, Accordion, AccordionSummary, AccordionDetails, } from "@mui/material";
import Header from "../../components/Header";
import { ExpandMore } from "@mui/icons-material";
import { tokens  } from "../../theme";

export default function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px" >
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque repellat nihil quae. Distinctio nam illo, tempore, modi officia deserunt sit provident iste beatae odio error tenetur, quas nostrum quam?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Follow up question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque repellat nihil quae. Distinctio nam illo, tempore, modi officia deserunt sit provident iste beatae odio error tenetur, quas nostrum quam?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Qustion about product
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque repellat nihil quae. Distinctio nam illo, tempore, modi officia deserunt sit provident iste beatae odio error tenetur, quas nostrum quam?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
           Question for Leo?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque repellat nihil quae. Distinctio nam illo, tempore, modi officia deserunt sit provident iste beatae odio error tenetur, quas nostrum quam?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque repellat nihil quae. Distinctio nam illo, tempore, modi officia deserunt sit provident iste beatae odio error tenetur, quas nostrum quam?
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  )
}
