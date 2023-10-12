import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,

  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { appointments } from "../demo-data/appointments";
import {   Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col, } from "reactstrap";


const Appointment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: "#FFC107",
      borderRadius: "8px"
    }}
  >
    {children}
  </Appointments.Appointment>
);


export default class  Agenda extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentDate: '2023-06-27',
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
  }
  render() {
    const { data, currentDate } = this.state;

  return (

    <>
      <div className="content">
      <Row>
        <Col>
          <Card>
            <Paper>
              <Scheduler data={data} height={660}>
                <ViewState currentDate={currentDate} onCurrentDateChange={this.currentDateChange} />
                <WeekView startDayHour={9} endDayHour={19} />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments appointmentComponent={Appointment} />
              </Scheduler>
            </Paper>
              
            </Card> 
        </Col>
      </Row>  

      </div>
    </>

    );
  }
}  
