import RegisterForm from '~/components/RegisterForm';

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: 'New React Router App' },
//     { name: 'description', content: 'Welcome to React Router!' },
//   ];
// }

export default function RegisterPage() {
  return (
    <div className='register-page min-h-screen flex flex-col justify-center items-center'>
      <div className='register-page__content'>
        <h2 className='text-xl mb-4 font-semibold'>Register to Hartetoti</h2>
        <RegisterForm />
      </div>
    </div>
  );
}
