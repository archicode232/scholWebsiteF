import { useState } from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ApplicationFormData {
  studentFirstName: string;
  studentLastName: string;
  dateOfBirth: string;
  grade: string;
  parentFirstName: string;
  parentLastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  previousSchool: string;
  reasonForApplying: string;
}

export function ApplicationForm({ open, onOpenChange }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ApplicationFormData>();

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Application submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast.success('Application submitted successfully! We\'ll contact you within 2-3 business days.');
    
    setTimeout(() => {
      setIsSuccess(false);
      reset();
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[var(--navy)]" style={{ fontSize: '1.5rem' }}>
            Application Form
          </DialogTitle>
          <DialogDescription>
            Complete the form below to apply to BrightFuture Academy. All fields marked with * are required.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-green-600 mb-2">Application Submitted!</h3>
            <p className="text-gray-600 text-center">
              Thank you for your interest in BrightFuture Academy.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Student Information */}
            <div>
              <h3 className="text-[var(--navy)] mb-4 pb-2 border-b">Student Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="studentFirstName">First Name *</Label>
                  <Input
                    id="studentFirstName"
                    {...register('studentFirstName', { required: 'First name is required' })}
                    className={errors.studentFirstName ? 'border-red-500' : ''}
                  />
                  {errors.studentFirstName && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.studentFirstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="studentLastName">Last Name *</Label>
                  <Input
                    id="studentLastName"
                    {...register('studentLastName', { required: 'Last name is required' })}
                    className={errors.studentLastName ? 'border-red-500' : ''}
                  />
                  {errors.studentLastName && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.studentLastName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    {...register('dateOfBirth', { required: 'Date of birth is required' })}
                    className={errors.dateOfBirth ? 'border-red-500' : ''}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.dateOfBirth.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="grade">Grade Applying For *</Label>
                  <Input
                    id="grade"
                    placeholder="e.g., 9th Grade"
                    {...register('grade', { required: 'Grade is required' })}
                    className={errors.grade ? 'border-red-500' : ''}
                  />
                  {errors.grade && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.grade.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div>
              <h3 className="text-[var(--navy)] mb-4 pb-2 border-b">Parent/Guardian Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="parentFirstName">First Name *</Label>
                  <Input
                    id="parentFirstName"
                    {...register('parentFirstName', { required: 'Parent first name is required' })}
                    className={errors.parentFirstName ? 'border-red-500' : ''}
                  />
                  {errors.parentFirstName && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.parentFirstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="parentLastName">Last Name *</Label>
                  <Input
                    id="parentLastName"
                    {...register('parentLastName', { required: 'Parent last name is required' })}
                    className={errors.parentLastName ? 'border-red-500' : ''}
                  />
                  {errors.parentLastName && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.parentLastName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    {...register('phone', { required: 'Phone number is required' })}
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div>
              <h3 className="text-[var(--navy)] mb-4 pb-2 border-b">Address</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    {...register('address', { required: 'Address is required' })}
                    className={errors.address ? 'border-red-500' : ''}
                  />
                  {errors.address && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      {...register('city', { required: 'City is required' })}
                      className={errors.city ? 'border-red-500' : ''}
                    />
                    {errors.city && (
                      <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      {...register('state', { required: 'State is required' })}
                      className={errors.state ? 'border-red-500' : ''}
                    />
                    {errors.state && (
                      <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                        {errors.state.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="zipCode">Zip Code *</Label>
                    <Input
                      id="zipCode"
                      {...register('zipCode', { required: 'Zip code is required' })}
                      className={errors.zipCode ? 'border-red-500' : ''}
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                        {errors.zipCode.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-[var(--navy)] mb-4 pb-2 border-b">Additional Information</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="previousSchool">Previous School</Label>
                  <Input
                    id="previousSchool"
                    {...register('previousSchool')}
                  />
                </div>

                <div>
                  <Label htmlFor="reasonForApplying">Why are you interested in BrightFuture Academy? *</Label>
                  <Textarea
                    id="reasonForApplying"
                    rows={4}
                    {...register('reasonForApplying', { required: 'Please tell us why you\'re interested' })}
                    className={errors.reasonForApplying ? 'border-red-500' : ''}
                  />
                  {errors.reasonForApplying && (
                    <p className="text-red-500 mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.reasonForApplying.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
