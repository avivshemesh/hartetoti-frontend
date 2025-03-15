import LoggedInUserDashboard from "~/components/LoggedInUserDashboard/LoggedInuserDashboard";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  return <LoggedInUserDashboard />;
}
