import RegisterForm from "~/components/RegisterForm/RegisterForm";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: 'New React Router App' },
//     { name: 'description', content: 'Welcome to React Router!' },
//   ];
// }

export default function RegisterPage() {
  return (
    <div className="register-page flex min-h-screen flex-col items-center justify-center">
      <div className="register-page__content">
        <h2 className="text-center text-xl font-semibold text-white">
          Register to Hartetoti
        </h2>
        <RegisterForm />
      </div>
    </div>
  );
}
