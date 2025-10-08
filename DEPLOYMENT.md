# Deployment Guide

## Environment Variables Setup

### Vercel Deployment

The application uses environment variables that must be configured in Vercel:

1. **Go to Vercel Dashboard**
   - Navigate to your project
   - Click "Settings" → "Environment Variables"

2. **Add Required Variables**

   | Variable | Value | Environments |
   |----------|-------|--------------|
   | `RESEND_API_KEY` | Your Resend API key | Production, Preview, Development |

3. **Get Your Resend API Key**
   - Go to https://resend.com/api-keys
   - Create a new API key
   - Copy the key and paste it in Vercel

### Local Development

For local development, create a `.env.local` file:

```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local and add your development API key
```

**⚠️ Important:**
- `.env.local` is gitignored and will never be committed
- Use a **different** API key for local development vs. production
- Never commit API keys to the repository

## Verification After Deployment

1. **Test Contact Form**
   - Go to `/contact` on your deployed site
   - Submit a test form
   - Check that email is received at `hello@charterispartners.com`

2. **Check Environment Variables**
   ```bash
   # In Vercel CLI or dashboard, verify variables are set
   vercel env ls
   ```

3. **Monitor Logs**
   - Check Vercel logs for any "RESEND_API_KEY undefined" errors
   - Verify no errors in contact form submission

## How It Works

The contact form API route (`/app/api/contact/route.ts`) uses:

```typescript
const resend = new Resend(process.env.RESEND_API_KEY);
```

This automatically reads from:
- **Vercel Environment Variables** in production/preview
- **`.env.local`** in local development
- **Never** from committed files

## Troubleshooting

### "API key is undefined" error

**Solution:** Ensure `RESEND_API_KEY` is set in Vercel environment variables

### Contact form not sending emails

1. Check Vercel logs for errors
2. Verify API key is correct in Vercel dashboard
3. Verify API key has email sending permissions in Resend
4. Check Resend dashboard for delivery status

### Different behavior locally vs. production

- Ensure you have a `.env.local` file for local development
- Verify the API key in `.env.local` is valid
- Check that local and production use different API keys

## CI/CD Pipeline

When you push to your repository:

1. **Vercel automatically deploys**
2. **Reads environment variables** from Vercel settings (not from code)
3. **Contact form uses** the production `RESEND_API_KEY`
4. **All other features** work without environment variables

No additional CI/CD configuration needed - Vercel handles everything!

## Rollback Procedure

If you need to rollback a deployment:

1. Go to Vercel Dashboard → Deployments
2. Find the previous working deployment
3. Click "Promote to Production"
4. Environment variables remain unchanged

## Security Notes

✅ **Good:**
- API keys stored in Vercel (encrypted)
- `.env.local` gitignored
- Different keys for dev/prod

❌ **Never:**
- Commit `.env.local` to git
- Share API keys in Slack/email
- Use production keys in development
- Hardcode keys in source code

---

**Last Updated:** January 2025
