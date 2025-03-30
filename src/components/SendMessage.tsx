import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from './Calendar';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Add this at the top of your file, after imports
emailjs.init('8HVe4AYI4Zs7qo6s4'); // initialize with your public key

interface SendMessageProps {
  checkIn: string;
  checkOut: string;
  onBack?: () => void;  // Add this prop
}

export function SendMessage({ checkIn, checkOut, onBack }: SendMessageProps) {
  const { t, i18n } = useTranslation();  // Add i18n
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  // Generate default message with dates
  React.useEffect(() => {
    // Create formatted dates using the current locale
    const formatDate = (dateStr: string) => {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat(i18n.language === 'gr' ? 'el' : 'en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(date);
    };

    const startDateFormatted = formatDate(checkIn);
    const endDateFormatted = formatDate(checkOut);

    // Create the message using direct string replacement
    const templateMessage = t('sendMessage.defaultMessage')
      .replace('{startDate}', startDateFormatted)
      .replace('{endDate}', endDateFormatted);

    setMessage(templateMessage);
  }, [checkIn, checkOut, t, i18n.language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      await emailjs.send(
        'service_x9gm8d8',
        'template_w1sr54t',
        {
          to_email: 'roswitharied@gmail.com',
          from_name: name,
          from_email: email,
          message: message,
          check_in: checkIn,
          check_out: checkOut,
        }
      );

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="section-title text-3xl font-semibold text-gray-900 mb-8 text-center">
        {t('sendMessage.title')}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">
              {t('sendMessage.selectedDates')}
            </h3>
            <button 
              onClick={onBack}
              className="text-sm text-[#006CE4] hover:text-[#0052b3] transition-colors flex items-center gap-2"
            >
              {t('sendMessage.changeButton')}
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <Calendar
              selectedStartDate={new Date(checkIn)}
              selectedEndDate={new Date(checkOut)}
              readonly={true}
            />
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {t('sendMessage.nameLabel')}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-[#006CE4] focus:ring-1 focus:ring-[#006CE4]"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('sendMessage.emailLabel')}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-[#006CE4] focus:ring-1 focus:ring-[#006CE4]"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              {t('sendMessage.messageLabel')}
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-[#006CE4] focus:ring-1 focus:ring-[#006CE4]"
              required
            />
          </div>

          {status === 'success' && (
            <div className="text-green-600 text-sm mb-4 bg-green-50 p-3 rounded-lg">
              {t('sendMessage.successMessage')}
            </div>
          )}

          {status === 'error' && (
            <div className="text-red-600 text-sm mb-4 bg-red-50 p-3 rounded-lg">
              {t('sendMessage.errorMessage')}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#006CE4] hover:bg-[#0052b3] disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg 
              transition-colors flex items-center justify-center space-x-2 shadow-md"
          >
            {isLoading ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Send size={20} />
            )}
            <span>{isLoading ? t('sendMessage.sending') : t('sendMessage.submit')}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
