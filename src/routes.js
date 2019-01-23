import Buttons from "./views/components/Buttons.jsx";
import Charts from "./views/Charts.jsx";
import ExtendedForms from "./views/forms/ExtendedForms.jsx";
import ExtendedTables from "./views/tables/ExtendedTables.jsx";
import FullScreenMap from "./views/maps/FullScreenMap.jsx";
import GoogleMaps from "./views/maps/GoogleMaps.jsx";
import GridSystem from "./views/components/GridSystem.jsx";
import Icons from "./views/components/Icons.jsx";
import LockScreen from "./views/pages/LockScreen.jsx";
import Notifications from "./views/components/Notifications.jsx";
import Panels from "./views/components/Panels.jsx";
import ReactTables from "./views/tables/ReactTables.jsx";
import RegularForms from "./views/forms/RegularForms.jsx";
import RegularTables from "./views/tables/RegularTables.jsx";
import SweetAlert from "./views/components/SweetAlert.jsx";
import Timeline from "./views/pages/Timeline.jsx";
import Typography from "./views/components/Typography.jsx";
// import UserProfile from "views/pages/UserProfile.jsx";
import ValidationForms from "./views/forms/ValidationForms.jsx";
import VectorMap from "./views/maps/VectorMap.jsx";
import Widgets from "./views/Widgets.jsx";
import Wizard from "./views/forms/Wizard.jsx";

//New routes
//Activity
import ActivityScreenshots from "./views/ActivityScreenshots.jsx";
import ActivityApps from "./views/ActivityApps.jsx";
import ActivityURLs from "./views/ActivityURLs.jsx";
import ActivityLocations from "./views/ActivityLocations.jsx";
//Timesheet
import TimesheetDaily from "./views/TimesheetDaily.jsx";
import TimesheetWeekly from "./views/TimesheetWeekly.jsx";
import TimesheetCalendar from "./views/TimesheetCalendar.jsx";
// import TimesheetApprovals from "views/TimesheetApprovals.jsx";
//Reports
import ReportsWeekly from "./views/ReportsWeekly.jsx";
import ReportsTimeActivities from "./views/ReportsTimeActivities.jsx";
import ReportsAppsUrls from "./views/ReportsAppsUrls.jsx";
import ReportsManualTimeEdit from "./views/ReportsManualTimeEdit.jsx";
import ReportsAccountsOwned from "./views/ReportsAccountsOwned.jsx";
import ReportsPayments from "./views/ReportsPayments.jsx";
import ReportsViewReports from "./views/ReportsViewReports.jsx";
//Tasks
import Tasks from "./views/Tasks.jsx";
//Invoices
import Invoices from "./views/Invoices.jsx";
//Schedules
import Schedules from "./views/Schedules.jsx";
//Time Off
import TimeOff from "./views/TimeOff.jsx";









// Redux integrated routes
import Client from "./custom_modules/Client";
import Organization from "./custom_modules/Organization";
import Login from "./custom_modules/UserLogin";
import Register from "./custom_modules/UserRegister";
import ForgotPassword from "./custom_modules/ForgotPassword";
import Dashboard from "./custom_modules/Dashboard";
import ResetPassword from "./custom_modules/ResetPassword";
import ChangePassword from "./custom_modules/ChangePassword";
import VerifyUser from "./custom_modules/VerifyUser";
import SignUpConfirmation from "./custom_modules/SignUpConfirmation";
import TimesheetApprovals from "./custom_modules/TimesheetApproval";
import MyAccount from "./custom_modules/MyAccount";
import UserProfile from "./custom_modules/UserProfile";
import Projects from "./custom_modules/Projects"

const routes = [
  {
          path: "/login",
          name: "Login",
          mini: "L",
          component: Login,
          layout: "/auth",
          redirect:true
        },
        {
          path: "/register",
          name: "Register",
          mini: "R",
          component: Register,
          layout: "/auth",
          redirect:true
        },
        {
          path: "/forgot-password",
          name: "Forgot Password",
          mini: "F",
          component: ForgotPassword,
          layout: "/auth",
          redirect:true
        },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/api/reset_password/:confirmation_key",
    name: "ResetPassword",
    mini: "RP",
    component: ResetPassword,
    layout: "/auth",
    redirect:true
  },
  {
    path: "/api/verify_user/:id",
    name: "VerifyUser",
    mini: "VU",
    component: VerifyUser,
    layout: "/auth",
    redirect:true
  },
  {
    path: "/api/invitation_signup/:id",
    name: "invitationSignup",
    mini: "IS",
    component: SignUpConfirmation,
    layout: "/auth",
    redirect:true
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    mini: "RP",
    component: ChangePassword,
    layout: "/admin",
    redirect:true
  },
  {
    path: "/my-profile",
    name: "Profile",
    mini: "P",
    component: UserProfile,
    layout: "/admin",
    redirect:true
  },
  {
    path: "/my-account",
    name: "Account",
    mini: "AC",
    component: MyAccount,
    layout: "/admin",
    redirect:true
  },
  {
    collapse: true,
    name: "Activity",
    icon: "nc-icon nc-book-bookmark",
    state: "activityCollapse",
    views: [
      {
        path: "/activity/screenshots",
        name: "Screenshots",
        mini: "S",
        component: ActivityScreenshots,
        layout: "/admin",
      },
      {
        path: "/activity/apps",
        name: "Apps",
        mini: "A",
        component: ActivityApps,
        layout: "/admin"
      },
      {
        path: "/activity/urls",
        name: "URLs",
        mini: "U",
        component: ActivityURLs,
        layout: "/admin"
      },
      {
        path: "/activity/locations",
        name: "Locations",
        mini: "L",
        component: ActivityLocations,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Timesheets",
    icon: "nc-icon nc-book-bookmark",
    state: "timesheetCollapse",
    views: [
      {
        path: "/timesheet/daily",
        name: "Daily",
        mini: "D",
        component: TimesheetDaily,
        layout: "/admin"
      },
      {
        path: "/timesheet/weekly",
        name: "Weekly",
        mini: "W",
        component: TimesheetWeekly,
        layout: "/admin"
      },
      {
        path: "/timesheet/calendar",
        name: "Calendar",
        mini: "C",
        component: TimesheetCalendar,
        layout: "/admin"
      },
      {
        path: "/timesheet/approvals",
        name: "Approvals",
        mini: "AP",
        component: TimesheetApprovals,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Reports",
    icon: "nc-icon nc-book-bookmark",
    state: "reportsCollapse",
    views: [
      {
        path: "/reports/weekly",
        name: "Weekly",
        mini: "RW",
        component: ReportsWeekly,
        layout: "/admin"
      },
      {
        path: "/reports/time-activities",
        name: "Time & activities",
        mini: "TA",
        component: ReportsTimeActivities,
        layout: "/admin"
      },
      {
        path: "/reports/apps-urls",
        name: "Apps & URLs",
        mini: "AU",
        component: ReportsAppsUrls,
        layout: "/admin"
      },
      {
        path: "/reports/manual-time-edits",
        name: "Manual time edits",
        mini: "MT",
        component: ReportsManualTimeEdit,
        layout: "/admin"
      },
      {
        path: "/reports/accounts-owned",
        name: "Accounts owned",
        mini: "AO",
        component: ReportsAccountsOwned,
        layout: "/admin"
      },
      {
        path: "/reports/payments",
        name: "Payments",
        mini: "P",
        component: ReportsPayments,
        layout: "/admin"
      },
      {
        path: "/reports/view-reports",
        name: "View all reports",
        mini: "VR",
        component: ReportsViewReports,
        layout: "/admin"
      },
    ]
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "nc-icon nc-bank",
    component: Projects,
    layout: "/admin"
  },
  {
    path: "/tasks",
    name: "Tasks",
    icon: "nc-icon nc-bank",
    component: Tasks,
    layout: "/admin"
  },
  {
    path: "/invoices",
    name: "Invoices",
    icon: "nc-icon nc-bank",
    component: Invoices,
    layout: "/admin"
  },
  {
    path: "/schedules",
    name: "Schedules",
    icon: "fa fa-plus",
    component: Schedules,
    layout: "/admin"
  },
  {
    path: "/time-off",
    name: "Time off",
    icon: "nc-icon nc-bank",
    component: TimeOff,
    layout: "/admin"
  },
  {
          path: "/user-profile",
          name: "UserProfile",
          mini: "UP",
          component: UserProfile,
          layout: "/admin",
          redirect:true
  },
  {
    path:"/organization",
    name: "Organization",
    icon: "nc-icon nc-calendar-60",
    component: Organization,
    layout: "/admin"
   },
   {
    path:"/organization",
    name: "organization",
    icon: "nc-icon nc-calendar-60",
    component: Organization,
    layout: "/admin"
   },
   {
     path:"/client",
     name: "Client",
     icon: "nc-icon nc-calendar-60",
     component: Client,
     layout: "/admin"
   },
  // {
  //   collapse: true,
  //   name: "Pages",
  //   icon: "nc-icon nc-book-bookmark",
  //   state: "pagesCollapse",
  //   views: [
  //     {
  //       path: "/timeline",
  //       name: "Timeline",
  //       mini: "T",
  //       component: Timeline,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/login",
  //       name: "Login",
  //       mini: "L",
  //       component: Login,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/register",
  //       name: "Register",
  //       mini: "R",
  //       component: Register,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/forgot-password",
  //       name: "Forgot Password",
  //       mini: "F",
  //       component: ForgotPassword,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/lock-screen",
  //       name: "LockScreen",
  //       mini: "LS",
  //       component: LockScreen,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/user-profile",
  //       name: "UserProfile",
  //       mini: "UP",
  //       component: UserProfile,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Components",
  //   icon: "nc-icon nc-layout-11",
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       mini: "B",
  //       component: Buttons,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       mini: "GS",
  //       component: GridSystem,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       mini: "P",
  //       component: Panels,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       mini: "SA",
  //       component: SweetAlert,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       mini: "N",
  //       component: Notifications,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       mini: "I",
  //       component: Icons,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       mini: "T",
  //       component: Typography,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   icon: "nc-icon nc-ruler-pencil",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       mini: "RF",
  //       component: RegularForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       mini: "EF",
  //       component: ExtendedForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       mini: "VF",
  //       component: ValidationForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/wizard",
  //       name: "Wizard",
  //       mini: "W",
  //       component: Wizard,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Tables",
  //   icon: "nc-icon nc-single-copy-04",
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       mini: "RT",
  //       component: RegularTables,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/extended-tables",
  //       name: "Extended Tables",
  //       mini: "ET",
  //       component: ExtendedTables,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/react-tables",
  //       name: "React Tables",
  //       mini: "RT",
  //       component: ReactTables,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   state: "mapsCollapse",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/full-screen-map",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/vector-map",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   icon: "nc-icon nc-box",
  //   component: Widgets,
  //   layout: "/admin"
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: Charts,
  //   layout: "/admin"
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: "nc-icon nc-calendar-60",
  //   component: Calendar,
  //   layout: "/adminroutes
  // }
];
// export const subroute=[{
//  path:"/organization",
//  name: "Organization",
//  icon: "nc-icon nc-calendar-60",
//  component: Organization,
//  layout: "/admin"
// },
// {
//   path:"/client",
//   name: "Client",
//   icon: "nc-icon nc-calendar-60",
//   component: Client,
//   layout: "/admin"
// }]


export default routes;
