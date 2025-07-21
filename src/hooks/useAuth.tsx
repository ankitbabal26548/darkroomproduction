
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AdminSession {
  username: string;
  loginTime: number;
  expires: number;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: AdminSession | null;
  logout: () => void;
  checkAuth: () => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AdminSession | null>(null);
  const navigate = useNavigate();

  const checkAuth = () => {
    const session = localStorage.getItem('admin_session');
    if (session) {
      try {
        const parsedSession: AdminSession = JSON.parse(session);
        if (Date.now() < parsedSession.expires) {
          setIsAuthenticated(true);
          setUser(parsedSession);
          return true;
        } else {
          logout();
        }
      } catch {
        logout();
      }
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('admin_session');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/admin');
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
