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
          to_email: 'roswitharied@gmail.com', // Update this line
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
    <div className="max-w-4xl mx-auto p-6 bg-black/40 backdrop-blur-md rounded-2xl">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        {t('sendMessage.title')}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">
              {t('sendMessage.selectedDates')}
            </h3>
            <button 
              onClick={onBack}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
                {t('sendMessage.changeButton')}
            </button>
          </div>
          <Calendar
            selectedStartDate={new Date(checkIn)}
            selectedEndDate={new Date(checkOut)}
            readonly={true}
          />
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
              {t('sendMessage.nameLabel')}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-blue-400/10 border border-gray-600 text-white focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
              {t('sendMessage.emailLabel')}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-blue-400/10 border border-gray-600 text-white focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
              {t('sendMessage.messageLabel')}
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}  // Increased from 4 to 5
              className="w-full p-3 rounded-lg bg-blue-400/10 border border-gray-600 text-white focus:outline-none focus:border-blue-400 text-lg"  // Added text-lg
              required
            />
          </div>

          {status === 'success' && (
            <div className="text-green-400 text-sm mb-4">
              {t('sendMessage.successMessage')}
            </div>
          )}

          {status === 'error' && (
            <div className="text-red-400 text-sm mb-4">
              {t('sendMessage.errorMessage')}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg 
              transition-colors flex items-center justify-center space-x-2"
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