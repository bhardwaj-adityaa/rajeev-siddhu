import { CONTACT_CONFIG } from '../config/contactConfig';

/**
 * Submits student trial lesson inquiry to the teacher's email inbox
 * via Web3Forms or Formspree without requiring a backend server.
 *
 * @param {Object} data - Form data containing student's details
 * @returns {Promise<{success: boolean, service?: string, demoMode?: boolean, message?: string}>}
 */
export async function submitStudentInquiry(data) {
  const { WEB3FORMS_ACCESS_KEY, FORMSPREE_ID } = CONTACT_CONFIG;

  // 1. Check if Formspree is configured
  if (FORMSPREE_ID && FORMSPREE_ID !== 'YOUR_FORMSPREE_ID') {
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _subject: `New Student Assessment: ${data.name || 'Student'} (${data.track || 'General Fluency'})`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || errorData.message || 'Form submission failed');
    }
    return { success: true, service: 'Formspree' };
  }

  // 2. Check if Web3Forms is configured
  if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Student Assessment: ${data.name || 'Student'} (${data.track || 'General Fluency'})`,
        from_name: 'Rajiv Singh Sidhu Portfolio',
        ...data,
      }),
    });

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.message || 'Web3Forms submission failed');
    }
    return { success: true, service: 'Web3Forms' };
  }

  // 3. Fallback / Test Mode when user has not added their key yet
  console.info(
    '%c[Contact Form]%c To receive real inquiries in your inbox, set your free key in src/config/contactConfig.js',
    'background: #D4AF37; color: #000; font-weight: bold; padding: 2px 6px; border-radius: 4px;',
    'color: #F5D77F; font-size: 12px;'
  );

  // Simulate network round-trip for pleasant UI feel
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { success: true, demoMode: true };
}
