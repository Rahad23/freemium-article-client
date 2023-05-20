import { createBrowserRouter } from "react-router-dom";
import {
  Notification,
  MessageLayout,
  DashboardLayout,
  WelcomeDashboard,
  Main,
  ErrorPage,
  Home,
  Login,
  Register,
  EditArticle,
  WriteStories,
  AskMeAnything,
  Messages,
  ImportStory,
  HistoryAns,
  PaymentFail,
  PaymentForm,
  PaymentSuccess,
  AdminRoute,
  Profile,
  Settings,
  PrivateRoute,
  ApplyToThePartnerProgram,
  DasAddCategory,
  ArticlesDetails,
  DasReCharts,
  DasReportedStory,
  DashbordCategory,
  DashbordEditors,
  DashbordStory,
  GiftMembership,
  List,
  MemberShipPage,
  OurStory,
  RefineRecommendations,
  Search,
  SelectCategorySection,
  Stats,
  Stories,
  UpdateCategory,
  PendingArticles,
  PendingArticlesDetailsCard,
  SearchResults,
} from "../Pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home/:id",
        element: <Home />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/import-story",
        element: (
          <PrivateRoute>
            <ImportStory />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoute>
            <Settings></Settings>
          </PrivateRoute>
        ),
      },
      {
        path: "/write-stories",
        element: <WriteStories />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <PaymentForm></PaymentForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/fail",
        element: <PaymentFail />,
      },
      {
        path: "/our-story",
        element: <OurStory></OurStory>,
      },

      {
        path: "/search",
        element: <SearchResults></SearchResults>,
      },

      {
        path: "/view-story/:id",
        element: <ArticlesDetails></ArticlesDetails>,
        // loader: async ({ params }) =>
        //   await fetch(
        //     `${process.env.REACT_APP_API_URL}/view-story/${params.id}`
        //   ),
      },
      {
        path: "/checkArticle/:id",
        element: <PendingArticlesDetailsCard />,
        loader: async ({ params }) =>
          await fetch(
            `${process.env.REACT_APP_API_URL}/view-story/${params.id}`
          ),
      },
      {
        path: "edit-article/:id",
        element: <EditArticle></EditArticle>,
        loader: async ({ params }) =>
          await fetch(
            `${process.env.REACT_APP_API_URL}/view-story/${params.id}`
          ),
      },
      {
        path: "/list",
        element: (
          <PrivateRoute>
            <List></List>
          </PrivateRoute>
        ),
      },
      {
        path: "/notifications",
        element: (
          <PrivateRoute>
            <Notification />
          </PrivateRoute>
        ),
      },
      {
        path: "/stories",
        element: (
          <PrivateRoute>
            <Stories></Stories>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:categoryName",
        element: <SelectCategorySection />,
        loader: async ({ params }) =>
          await fetch(
            `${process.env.REACT_APP_API_URL}/category/${params.categoryName}`
          ),
      },
      {
        path: "/stats",
        element: (
          <PrivateRoute>
            <Stats />
          </PrivateRoute>
        ),
      },
      {
        path: "/refineRecommendations",
        element: (
          <PrivateRoute>
            <RefineRecommendations></RefineRecommendations>
          </PrivateRoute>
        ),
      },
      {
        path: "/applyToThePartnerProgram",
        element: (
          <PrivateRoute>
            <ApplyToThePartnerProgram></ApplyToThePartnerProgram>
          </PrivateRoute>
        ),
      },
      {
        path: "/giftMembership",
        element: (
          <PrivateRoute>
            <GiftMembership></GiftMembership>
          </PrivateRoute>
        ),
      },
      {
        path: "/membership",
        element: <MemberShipPage />,
      },
      {
        path: "/updateCategory/:id",
        element: <UpdateCategory></UpdateCategory>,
      },
    ],
  },

  {
    path: "/hexa-ai",
    element: (
      <PrivateRoute>
        <MessageLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/hexa-ai",
        element: (
          <PrivateRoute>
            <AskMeAnything />
          </PrivateRoute>
        ),
        children: [{}],
      },
      {
        path: "/hexa-ai/:id",
        element: (
          <PrivateRoute>
            <HistoryAns />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`${process.env.REACT_APP_API_URL}/hexa-ai/${params.id}`),
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <MessageLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "/login",
  //       element: <Login />,
  //     },
  //   ],
  // },
  // {
  //   path: "/register",
  //   element: <MessageLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "/register",
  //       element: <Register />,
  //     },
  //   ],
  // },
  {
    path: "/messages",
    element: (
      <PrivateRoute>
        <MessageLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/messages",
        element: (
          <PrivateRoute>
            <Messages />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <WelcomeDashboard />
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <WelcomeDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/category",
        element: (
          <AdminRoute>
            <DashbordCategory />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/storys",
        element: (
          <AdminRoute>
            <DashbordStory />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/editors",
        element: (
          <AdminRoute>
            <DashbordEditors />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/pendingArticle",
        element: (
          <AdminRoute>
            <PendingArticles />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/charts",
        element: (
          <AdminRoute>
            <DasReCharts />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedStory",
        element: (
          <AdminRoute>
            <DasReportedStory />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addCategory",
        element: (
          <AdminRoute>
            <DasAddCategory />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
