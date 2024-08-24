import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useEffect, ReactNode } from 'react';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { isLoggedIn, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push('/login');
    }
  }, [loading, isLoggedIn, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? <>{children}</> : null;
};

export default PrivateRoute;
