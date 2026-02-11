# EmailJS Setup Guide for Contact Form

This guide will help you configure EmailJS to receive contact form submissions from the AnchorPointCompliance website.

## What is EmailJS?

EmailJS is a free service that allows you to send emails directly from client-side JavaScript without needing a backend server. It's perfect for static websites and supports up to 200 emails per month on the free plan.

## Setup Instructions

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add an Email Service

1. Once logged in, go to the **Email Services** section
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Save the Service ID** - you'll need this later

**Example Service ID:** `service_abc123xyz`

### 3. Create an Email Template

1. Go to the **Email Templates** section
2. Click "Create New Template"
3. Set up your template with the following structure:

**Template Name:** Contact Form Submission

**Subject:** New Inquiry from {{name}} - AnchorPointCompliance Website

**Content:**
```
New inquiry received from the AnchorPointCompliance website:

Name: {{name}}
Email: {{email}}
Organization: {{organization}}

Message:
{{message}}

---
This email was sent from the contact form at anchorpointcompliance.com
```

4. **Save the Template ID** - you'll need this later

**Example Template ID:** `template_xyz789abc`

### 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. **Save this key** - you'll need it for configuration

**Example Public Key:** `abcXYZ123_456DEF789`

### 5. Configure the Website

Open the file: `js/views/view.contact.js`

Find this section (around line 82):

```javascript
const emailjsConfig = {
    serviceID: 'YOUR_SERVICE_ID',     // Replace with your EmailJS Service ID
    templateID: 'YOUR_TEMPLATE_ID',   // Replace with your EmailJS Template ID
    publicKey: 'YOUR_PUBLIC_KEY'      // Replace with your EmailJS Public Key
};
```

Replace the placeholder values with your actual EmailJS credentials:

```javascript
const emailjsConfig = {
    serviceID: 'service_abc123xyz',      // Your Service ID from step 2
    templateID: 'template_xyz789abc',    // Your Template ID from step 3
    publicKey: 'abcXYZ123_456DEF789'     // Your Public Key from step 4
};
```

### 6. Test the Contact Form

1. Build and deploy your website
2. Navigate to the Contact page
3. Fill out the form with test information
4. Submit the form
5. Check your email inbox for the submission

## Template Variables

The contact form sends the following variables to EmailJS:

- `{{name}}` - Full name of the person submitting the form
- `{{email}}` - Email address
- `{{organization}}` - Organization name (optional)
- `{{message}}` - The inquiry message

You can customize your email template in EmailJS to use these variables however you like.

## Receiving Email Address

By default, emails will be sent to the email address associated with the Email Service you configured in Step 2. If you want to send to a different address:

1. Go to your Email Template in EmailJS
2. Click on "Settings"
3. Add a recipient email in the "To Email" field
4. Example: `Info@anchorpointcompliance.com`

## Free Plan Limits

EmailJS Free Plan includes:
- 200 emails per month
- 2 email templates
- 1 email service
- EmailJS branding in emails

To remove branding or increase limits, consider upgrading to a paid plan.

## Troubleshooting

### Form Not Sending
- Check browser console for errors
- Verify all three credentials (Service ID, Template ID, Public Key) are correct
- Ensure EmailJS CDN script is loading (check Network tab in browser dev tools)

### Emails Not Received
- Check spam/junk folder
- Verify email service is properly connected in EmailJS dashboard
- Check EmailJS dashboard logs for failed sends
- Ensure recipient email is correct in template settings

### Rate Limiting
- Free plan: 200 emails/month
- If exceeded, upgrade your plan or wait for next billing cycle

## Security Notes

- The Public Key is safe to expose in client-side code
- Never share your Private Key
- EmailJS handles spam protection
- Consider adding Google reCAPTCHA for additional protection

## Alternative Free Email Services

If you prefer different services:
1. **Formspree** - [https://formspree.io/](https://formspree.io/)
2. **Web3Forms** - [https://web3forms.com/](https://web3forms.com/)
3. **FormSubmit** - [https://formsubmit.co/](https://formsubmit.co/)

## Support

For EmailJS support and documentation:
- Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
