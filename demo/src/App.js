import React from "react";
// import DynamicField from "./Components/formikLib/DynamicField";
// import FormValidation from "./Components/form-demo/FormValidation";
// import BasicFormik from "./Components/formikLib/BasicFormik";
// import FormikValidation from "./Components/formikLib/FormikValidation";
// import FormikValidationYUP from "./Components/formikLib/FormikValidationYUP";
// import Chips from "./Components/form-demo/Chips";
// import FormDemo from "./Components/form-demo/FormDemo";
// import MaterialChips from "./Components/form-demo/MaterialChips";
// import MaterialDemo from "./Components/Styling/MUI/MaterialDemo";
// import BootstrapDemo from './Components/Styling/BootstrapDemo';
// import ReactBootstrapDemo from './Components/Styling/React-bootstrap-demo/ReactBootstrapDemo';
// import JssDemo from "./Components/Styling/React-Jss/JssDemo";
// import ListRendering from './Components/ListRendering/ListRendering';
// import ObjectList from './Components/ListRendering/ObjectList';
// import Styling from './Components/Styling/Styling';
// import Bulb from './Components/ConditionalRendering.js/BulbTask';
// import ConditionalRendering from './Components/ConditionalRendering.js/CondRendering';
// import EventHandling from './Components/EventHandling/EventHandling';
// import CompLifeCycle from './Components/ClassComponentLifeCycle.js/CompLifeCycle';
// import StateDemo from './Components/State/StateDemo';
import { BrowserRouter } from "react-router-dom";
// import PortalDemo from "./Components/Portal/PortalDemo";
import TableTask from "./Components/task/TableTask";
// import HooksDemo from "./Components/Hooks/HooksDemo";
// import PureComponents from "./Components/PureComponent/PureComponent";
// import Parent from "./Components/ref/methodCalling/Parent";
// import UseState from "./Components/Hooks/UseState";
// import RenderProps from "./Components/LogicSharing/RenderProps/RenderProps";
// import HocDemo from "./Components/LogicSharing/HOC/HocDemo";
// import Task2 from "./Components/task/Task2";
// import ErrorBoundaryDemo from "./Components/ErrorBoundary/ErrorBoundaryDemo";
// import RefsDemo from "./Components/ref/RefsDemo";
// import Task2 from "./Components/form-demo/task/Task2";
// import LiftingStateUp from "./Components/LifitingStateUp/LiftingStateUp";
// import ContextDemo from "./Components/propsDrilling/ContextDemo";
// import Task1 from "./Components/task/Task1";
// import RoutingDemo from "./router/RoutingDemo";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "cyan",
            backgroundColor: "black",
            padding: 2,
          }}
        >
          Hello Welcome to React Js
        </h1>
        {/* {<StateDemo/>} */}
        {/* <CompLifeCycle/> */}
        {/* <EventHandling/> */}
        {/* <ConditionalRendering/> */}
        {/* <Bulb/> */}
        {/* <ListRendering/> */}
        {/* <ObjectList/> */}
        {/* <Styling/> */}
        {/* <BootstrapDemo /> */}
        {/* <ReactBootstrapDemo/> */}
        {/* <JssDemo/> */}
        {/* <MaterialDemo /> */}
        {/* <FormDemo /> */}
        {/* <MaterialChips /> */}
        {/* <Chips /> */}
        {/* <FormValidation /> */}
        {/* <BasicFormik /> */}
        {/* <FormikValidation /> */}
        {/* <FormikValidationYUP /> */}
        {/* <DynamicField /> */}
        {/* <RoutingDemo /> */}
        {/* <Task2 /> */}
        {/* <LiftingStateUp /> */}
        {/* <ContextDemo /> */}
        {/* <Task1 /> */}
        {/* <ErrorBoundaryDemo /> */}
        {/* <RefsDemo /> */}
        {/* <HocDemo /> */}
        {/* <Task2 /> */}
        {/* <RenderProps /> */}
        {/* <UseState /> */}
        {/* <HooksDemo /> */}
        {/* <PureComponents /> */}
        {/* <Parent /> */}
        {/* <PortalDemo /> */}
        <TableTask />
      </div>
    </BrowserRouter>
  );
};

export default App;
