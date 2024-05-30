import { Box } from "@mui/material"
import Header  from "../../components/Header"
import LineChart from "../../components/LineChart"

export default function Bar() {
  return (
    <Box m="20px">
        <Header title="Line Chart" subtitle="Users Line Chart" />
        <Box height="75vh">
        <LineChart />
        </Box>
    </Box>
  )
}