# Web3Forms Setup Guide

This project uses [Web3Forms](https://web3forms.com/) for handling contact form submissions. Web3Forms is a simple, secure, and privacy-focused form backend that doesn't require any backend code.

## Setup Instructions

### 1. Get Your Access Key

1. Visit [web3forms.com](https://web3forms.com/)
2. Sign up for a free account (no credit card required)
3. Create a new form and get your Access Key
4. The free plan includes:
   - 250 submissions per month
   - Email notifications
   - No server configuration needed
   - GDPR compliant

### 2. Configure the Form

Open `src/pages/contact-body.njk` and replace `YOUR_ACCESS_KEY_HERE` with your actual Web3Forms access key:

```html
<input type="hidden" name="access_key" value="YOUR_ACTUAL_ACCESS_KEY">
```

### 3. Build and Deploy

```bash
npm run build
```

The contact form will now send submissions directly to Web3Forms, which will forward them to the email address associated with your Web3Forms account.

## Features

- ✅ No backend code required
- ✅ Spam protection included
- ✅ Email notifications
- ✅ Form validation
- ✅ Success/error messages
- ✅ GDPR compliant
- ✅ No external dependencies (uses native Fetch API)

## Customization

### Custom Email Subject

Add a hidden field to customize the email subject:

```html
<input type="hidden" name="subject" value="New Contact Form Submission">
```

### Redirect After Submission

Add a hidden field to redirect users after successful submission:

```html
<input type="hidden" name="redirect" value="https://yoursite.com/thank-you">
```

### Additional Fields

Web3Forms automatically captures all form fields. The current form includes:
- `name` - Full Name
- `email` - Email Address
- `organization` - Organization Name
- `message` - Message

You can add more fields as needed, and they'll automatically be included in the email.

## Security

- All submissions are sent over HTTPS
- Built-in spam protection with honeypot and rate limiting
- reCAPTCHA support available (optional)
- No sensitive data is stored by Web3Forms

## Support

For more information and advanced features, visit:
- [Web3Forms Documentation](https://docs.web3forms.com/)
- [Web3Forms Dashboard](https://web3forms.com/dashboard)

## Troubleshooting

### Form Not Submitting

1. Verify your access key is correct
2. Check browser console for errors
3. Ensure the form has `method="POST"` and `action="https://api.web3forms.com/submit"`

### Not Receiving Emails

1. Check your spam folder
2. Verify the email address in your Web3Forms dashboard
3. Check your Web3Forms dashboard for submission logs

### Rate Limiting

The free plan allows 250 submissions per month. If you exceed this, submissions will be rejected. Consider upgrading to a paid plan for higher limits.
