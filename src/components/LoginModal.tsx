import { useState } from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoginSuccess: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  studentId: string;
}

export function LoginModal({ open, onOpenChange, onLoginSuccess }: LoginModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const loginForm = useForm<LoginFormData>();
  const signupForm = useForm<SignupFormData>();

  const onLogin = async (data: LoginFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock authentication - in production, this would call your backend
    if (data.email && data.password) {
      console.log('Login attempt:', data);
      toast.success('Login successful! Welcome back.');
      onLoginSuccess();
      onOpenChange(false);
      loginForm.reset();
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const onSignup = async (data: SignupFormData) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Signup attempt:', data);
    toast.success('Account created successfully! You can now login.');
    signupForm.reset();
    
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[var(--navy)]" style={{ fontSize: '1.5rem' }}>
            Student Portal
          </DialogTitle>
          <DialogDescription>
            Login to access your dashboard or create a new account
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-6">
            <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
              <div>
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="student@brightfuture.edu"
                  {...loginForm.register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={loginForm.formState.errors.email ? 'border-red-500' : ''}
                />
                {loginForm.formState.errors.email && (
                  <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                    {loginForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    {...loginForm.register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                    className={loginForm.formState.errors.password ? 'border-red-500' : ''}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {loginForm.formState.errors.password && (
                  <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                    {loginForm.formState.errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <a href="#" className="text-[var(--navy)] hover:underline" style={{ fontSize: '0.875rem' }}>
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </Button>

              <div className="text-center text-gray-500" style={{ fontSize: '0.875rem' }}>
                Demo credentials: Any email and password
              </div>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="mt-6">
            <form onSubmit={signupForm.handleSubmit(onSignup)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    {...signupForm.register('firstName', { required: 'First name is required' })}
                    className={signupForm.formState.errors.firstName ? 'border-red-500' : ''}
                  />
                  {signupForm.formState.errors.firstName && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {signupForm.formState.errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    {...signupForm.register('lastName', { required: 'Last name is required' })}
                    className={signupForm.formState.errors.lastName ? 'border-red-500' : ''}
                  />
                  {signupForm.formState.errors.lastName && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {signupForm.formState.errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="student@brightfuture.edu"
                  {...signupForm.register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={signupForm.formState.errors.email ? 'border-red-500' : ''}
                />
                {signupForm.formState.errors.email && (
                  <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                    {signupForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  placeholder="e.g., BFA-2024-001"
                  {...signupForm.register('studentId', { required: 'Student ID is required' })}
                  className={signupForm.formState.errors.studentId ? 'border-red-500' : ''}
                />
                {signupForm.formState.errors.studentId && (
                  <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                    {signupForm.formState.errors.studentId.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? 'text' : 'password'}
                    {...signupForm.register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                    className={signupForm.formState.errors.password ? 'border-red-500' : ''}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {signupForm.formState.errors.password && (
                  <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                    {signupForm.formState.errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    {...signupForm.register('confirmPassword', {
                      required: 'Please confirm your password',
                    })}
                    className={signupForm.formState.errors.confirmPassword ? 'border-red-500' : ''}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {signupForm.formState.errors.confirmPassword && (
                  <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                    {signupForm.formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--navy)] hover:bg-[var(--navy-dark)] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
