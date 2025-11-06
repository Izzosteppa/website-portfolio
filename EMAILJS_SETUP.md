# EmailJS Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to make it fully functional:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free tier)
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. For Gmail:
   - Click on **Gmail**
   - Click **Connect Account**
   - Sign in with your Gmail account (`siyandangqoba78@gmail.com`)
   - Allow EmailJS to send emails on your behalf
5. Copy your **Service ID** (looks like `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{name}}

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Important**: Set the template variables:
   - `{{name}}` - from form field `name`
   - `{{email}}` - from form field `email`
   - `{{message}}` - from form field `message`

5. In **Settings**, set:
   - **To Email**: `siyandangqoba78@gmail.com`
   - **From Name**: `Portfolio Contact Form`
   - **Reply To**: `{{email}}` (so you can reply directly to the sender)

6. Click **Save** and copy your **Template ID** (looks like `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like a long string)
3. Copy it

## Step 5: Update Your Code

Open `/home/siyanda/cool-portfolio-web/src/components/Contact.js` and replace:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test It!

1. Restart your development server if needed
2. Fill out the contact form on your website
3. Submit the form
4. Check your email at `siyandangqoba78@gmail.com`

## Troubleshooting

- **Not receiving emails?** Check your EmailJS dashboard logs
- **Spam folder**: Check if emails are going to spam
- **Template issues**: Make sure field names match exactly (`name`, `email`, `message`)

## Security Note

The public key is safe to expose in your frontend code - it's designed for client-side use. EmailJS has built-in rate limiting to prevent abuse.

---

Once configured, your contact form will:
✅ Send emails directly to `siyandangqoba78@gmail.com`
✅ Show success/error messages to visitors
✅ Include the sender's email so you can reply directly
✅ Reset the form after successful submission
