# Web3Forms Setup Guide

This project uses [Web3Forms](https://web3forms.com/) for handling contact form submissions. Web3Forms is a simple, secure, and privacy-focused form backend that doesn't require any backend code.

## ⚠️ Important Security Note

**Yes, it is safe to paste your Web3Forms access key directly in the HTML code!**

Unlike traditional API keys, Web3Forms access keys are specifically designed to be public and used in client-side code. The access key acts like a public identifier (similar to an email address) that routes form submissions to your email. 

**Why it's safe:**
- ✅ The access key is **not a secret** - it's meant to be visible in your HTML
- ✅ The worst someone can do with your access key is send you form submissions (similar to knowing your email address)
- ✅ No sensitive data or account changes can be made using just the access key
- ✅ Web3Forms has built-in spam protection and rate limiting

**How to enhance security:**
- Add captcha protection (hCaptcha, reCAPTCHA, or Cloudflare Turnstile) - see below
- Enable domain restrictions (Pro feature) to only accept submissions from your website
- Monitor your Web3Forms dashboard for suspicious activity

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

**Option A: Direct Configuration (Recommended for GitHub Pages)**

Open `src/pages/contact-body.njk` and replace `YOUR_ACCESS_KEY_HERE` with your actual Web3Forms access key:

```html
<input type="hidden" name="access_key" value="YOUR_ACTUAL_ACCESS_KEY">
```

**Option B: Environment Variable (For Build-Time Configuration)**

If you prefer to keep the access key out of version control, you can use an environment variable:

1. Create a `.env` file in the root directory (already in `.gitignore`)
2. Add your access key: `VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here`
3. Update `src/pages/contact-body.njk` to use the environment variable (see Advanced Configuration below)

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

## Advanced Configuration

### Adding Spam Protection with Captcha

To add an extra layer of protection against spam, you can add captcha verification:

**Using hCaptcha (Recommended):**

1. Sign up at [hCaptcha.com](https://www.hcaptcha.com/) and get your site key
2. Add the hCaptcha script to your page header
3. Add the captcha widget to your form:

```html
<div class="h-captcha" data-captcha="true"></div>
<script src="https://web3forms.com/client/script.js" async defer></script>
```

**Using reCAPTCHA v2:**

Add this hidden field to your form:
```html
<input type="hidden" name="recaptcha_key" value="your_recaptcha_site_key">
```

**Using Cloudflare Turnstile:**

Add this hidden field to your form:
```html
<input type="hidden" name="turnstile_key" value="your_turnstile_site_key">
```

### Environment Variable Configuration

If you want to keep your access key out of version control (though not required for security), you can use environment variables:

1. **Create `.env` file** (already in `.gitignore`):
```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

2. **Update Vite config** to pass env variables to Nunjucks:

In `vite.config.js`:
```javascript
const nunjucksEnv = new nunjucks.Environment(
  new nunjucks.FileSystemLoader([resolve(__dirname, "src")]),
  { noCache: true }
);

nunjucksEnv.addGlobal('WEB3FORMS_ACCESS_KEY', process.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE');
```

3. **Update template** in `src/pages/contact-body.njk`:
```html
<input type="hidden" name="access_key" value="{{ WEB3FORMS_ACCESS_KEY }}">
```

4. **Set environment variable** for GitHub Actions in repository settings under Secrets

**Note:** This approach adds complexity and is optional. Since Web3Forms access keys are designed to be public, hardcoding them is perfectly safe.

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
- reCAPTCHA/hCaptcha/Turnstile support available (optional)
- No sensitive data is stored by Web3Forms
- Access keys are safe to expose publicly (they cannot modify your account or access sensitive data)

### Best Practices

1. **Add Captcha Protection**: While Web3Forms has built-in spam protection, adding captcha provides an extra layer of security
2. **Domain Restrictions** (Pro Plan): Restrict form submissions to only come from your domain
3. **Monitor Submissions**: Regularly check your Web3Forms dashboard for suspicious activity
4. **Rate Limiting**: Web3Forms automatically rate-limits submissions to prevent abuse
5. **Honeypot Fields**: Web3Forms automatically filters out bot submissions using honeypot techniques

### Why Web3Forms Access Keys Are Safe

Unlike traditional API keys (AWS, Stripe, etc.) that grant full access to your account and services, Web3Forms access keys:

- ✅ **Are meant to be public** - They're designed for client-side use
- ✅ **Have limited scope** - Can only submit form data to your email
- ✅ **Cannot access your account** - No ability to view settings, billing, or other forms
- ✅ **Cannot be abused financially** - No way to incur charges or access payment methods
- ✅ **Are protected by rate limiting** - Automatic protection against spam/abuse
- ✅ **Can be rotated easily** - You can generate new keys anytime in your dashboard

**Think of it like your email address** - it's public information that people need to contact you, but it doesn't give them access to your email account.

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
