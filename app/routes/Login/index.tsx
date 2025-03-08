import LoginForm from '~/components/LoginForm';

// export function meta({ }: Route.MetaArgs) {
//   return [
//     { title: 'New React Router App' },
//     { name: 'description', content: 'Welcome to React Router!' },
//   ];
// }

export default function LoginPage() {
  return (
    <div className='login-page min-h-screen flex flex-col justify-center items-center'>
      <div className='login-page__content'>
        <h2 className='text-xl mb-4 font-semibold'>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
