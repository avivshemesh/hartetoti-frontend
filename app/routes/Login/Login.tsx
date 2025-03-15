import LoginForm from "~/components/LoginForm/LoginForm";

// export function meta({ }: Route.MetaArgs) {
//   return [
//     { title: 'New React Router App' },
//     { name: 'description', content: 'Welcome to React Router!' },
//   ];
// }

export default function LoginPage() {
  return (
    <div className="login-page flex flex-col items-center justify-center">
      <div className="login-page__content">
        <h2 className="text-center text-4xl font-semibold text-white">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
