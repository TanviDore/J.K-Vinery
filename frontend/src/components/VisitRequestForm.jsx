import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, MapPin, ClipboardList, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function VisitRequestForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    address: '',
    purposeOfVisit: '',
    preferredVisitDate: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('formErrName');
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = t('formErrPhoneReq');
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.contactNumber.replace(/[\s-]/g, ''))) {
      newErrors.contactNumber = t('formErrPhoneVal');
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('formErrEmailVal');
    }
    if (!formData.address.trim()) newErrors.address = t('formErrAddress');
    if (!formData.purposeOfVisit.trim()) newErrors.purposeOfVisit = t('formErrPurpose');
    if (!formData.preferredVisitDate) {
      newErrors.preferredVisitDate = t('formErrDateReq');
    } else {
      const selectedDate = new Date(formData.preferredVisitDate);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        newErrors.preferredVisitDate = t('formErrDatePast');
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ loading: true, success: null, message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/visitors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: t('formSuccessMsg')
        });
        setFormData({
          name: '',
          contactNumber: '',
          email: '',
          address: '',
          purposeOfVisit: '',
          preferredVisitDate: ''
        });
      } else {
        throw new Error(data.message || 'Something went wrong.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus({
        loading: false,
        success: false,
        message: err.message || t('formErrorMsg')
      });
    }
  };

  return (
    <section id="visit-form" className="relative bg-stone-50 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700">
            {t('formSubTitle')}
          </span>
          <h2 className="mt-3 font-serif text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            {t('formTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            {t('formDesc')}
          </p>
        </div>

        {/* Form Container */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-white shadow-xl border border-stone-200/50 p-8 sm:p-12">
          
          {status.success === true && (
            <div className="mb-8 flex items-start space-x-3 rounded-2xl bg-green-50 p-6 border border-green-200 text-green-800">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600" />
              <div>
                <h4 className="font-bold text-lg">{t('formSuccessTitle')}</h4>
                <p className="mt-1 text-sm">{status.message}</p>
              </div>
            </div>
          )}

          {status.success === false && (
            <div className="mb-8 flex items-start space-x-3 rounded-2xl bg-red-50 p-6 border border-red-200 text-red-800">
              <AlertCircle className="h-6 w-6 shrink-0 text-red-600" />
              <div>
                <h4 className="font-bold text-lg">{t('formErrorTitle')}</h4>
                <p className="mt-1 text-sm">{status.message}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            
            {/* Full Name */}
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-semibold text-stone-700">
                {t('formLabelName')} <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('formPlaceholderName')}
                  className={`block w-full rounded-2xl border bg-stone-50 py-3.5 pl-11 pr-4 text-sm text-stone-900 placeholder-stone-400 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-stone-200 focus:ring-purple-500 focus:border-purple-500'
                  }`}
                />
              </div>
              {errors.name && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.name}</p>}
            </div>

            {/* Contact Number */}
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-semibold text-stone-700">
                {t('formLabelPhone')} <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400">
                  <Phone className="h-5 w-5" />
                </div>
                <input
                  type="tel"
                  name="contactNumber"
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder={t('formPlaceholderPhone')}
                  className={`block w-full rounded-2xl border bg-stone-50 py-3.5 pl-11 pr-4 text-sm text-stone-900 placeholder-stone-400 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.contactNumber
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-stone-200 focus:ring-purple-500 focus:border-purple-500'
                  }`}
                />
              </div>
              {errors.contactNumber && (
                <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.contactNumber}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-stone-700">
                {t('formLabelEmail')} <span className="text-stone-400 text-xs font-normal">{t('formOptional')}</span>
              </label>
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('formPlaceholderEmail')}
                  className={`block w-full rounded-2xl border bg-stone-50 py-3.5 pl-11 pr-4 text-sm text-stone-900 placeholder-stone-400 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-stone-200 focus:ring-purple-500 focus:border-purple-500'
                  }`}
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.email}</p>}
            </div>

            {/* Address */}
            <div className="sm:col-span-2">
              <label htmlFor="address" className="block text-sm font-semibold text-stone-700">
                {t('formLabelAddress')} <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder={t('formPlaceholderAddress')}
                  className={`block w-full rounded-2xl border bg-stone-50 py-3.5 pl-11 pr-4 text-sm text-stone-900 placeholder-stone-400 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.address
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-stone-200 focus:ring-purple-500 focus:border-purple-500'
                  }`}
                />
              </div>
              {errors.address && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.address}</p>}
            </div>

            {/* Purpose of Visit */}
            <div className="sm:col-span-2">
              <label htmlFor="purposeOfVisit" className="block text-sm font-semibold text-stone-700">
                {t('formLabelPurpose')} <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  name="purposeOfVisit"
                  id="purposeOfVisit"
                  value={formData.purposeOfVisit}
                  onChange={handleChange}
                  placeholder={t('formPlaceholderPurpose')}
                  className={`block w-full rounded-2xl border bg-stone-50 py-3.5 pl-11 pr-4 text-sm text-stone-900 placeholder-stone-400 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.purposeOfVisit
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-stone-200 focus:ring-purple-500 focus:border-purple-500'
                  }`}
                />
              </div>
              {errors.purposeOfVisit && (
                <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.purposeOfVisit}</p>
              )}
            </div>

            {/* Preferred Visit Date */}
            <div className="sm:col-span-2">
              <label htmlFor="preferredVisitDate" className="block text-sm font-semibold text-stone-700">
                {t('formLabelDate')} <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400">
                  <Calendar className="h-5 w-5" />
                </div>
                <input
                  type="date"
                  name="preferredVisitDate"
                  id="preferredVisitDate"
                  value={formData.preferredVisitDate}
                  onChange={handleChange}
                  className={`block w-full rounded-2xl border bg-stone-50 py-3.5 pl-11 pr-4 text-sm text-stone-900 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.preferredVisitDate
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-stone-200 focus:ring-purple-500 focus:border-purple-500'
                  }`}
                />
              </div>
              {errors.preferredVisitDate && (
                <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.preferredVisitDate}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-4 sm:col-span-2">
              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center space-x-2 rounded-2xl bg-purple-700 py-4 text-base font-bold text-white shadow-lg shadow-purple-700/20 transition-all duration-200 hover:bg-purple-800 hover:shadow-xl hover:shadow-purple-700/30 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
              >
                {status.loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>{t('formBtnSubmitting')}</span>
                  </>
                ) : (
                  <span>{t('formBtnSubmit')}</span>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
