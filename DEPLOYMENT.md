# Deployment Guide for crisyteban.love

## GCP Setup

### 1. Create GCP Project
```bash
# Set your project ID
export PROJECT_ID="cris-teban-invitation"
export REGION="us-central1"

# Create project
gcloud projects create $PROJECT_ID --name="Cris y Teban Invitation"

# Set as current project
gcloud config set project $PROJECT_ID

# Link billing account (required for Cloud Run)
# List billing accounts
gcloud billing accounts list

# Link billing (replace BILLING_ACCOUNT_ID with your actual ID)
gcloud billing projects link $PROJECT_ID --billing-account=BILLING_ACCOUNT_ID
```

### 2. Enable Required APIs
```bash
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  dns.googleapis.com
```

### 3. Create Service Account for GitHub Actions
```bash
# Create service account
gcloud iam service-accounts create github-actions \
  --display-name="GitHub Actions Deployment"

# Grant necessary permissions
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/storage.admin"

# Create and download key
gcloud iam service-accounts keys create ~/gcp-key.json \
  --iam-account=github-actions@$PROJECT_ID.iam.gserviceaccount.com

# Print the key (you'll need this for GitHub Secrets)
cat ~/gcp-key.json
```

### 4. Configure GitHub Secrets
Go to your GitHub repository: https://github.com/edamazzio/cris-teban-invitation/settings/secrets/actions

Add these secrets:
- **GCP_PROJECT_ID**: Your project ID (e.g., `cris-teban-invitation`)
- **GCP_SA_KEY**: The entire content of `~/gcp-key.json`
- **GCP_REGION**: Your deployment region (e.g., `us-central1`)

### 5. Domain Setup

#### Verify Domain Ownership
```bash
gcloud domains verify crisyteban.love
```
Follow the instructions to add a TXT record to your domain's DNS.

#### Map Custom Domain to Cloud Run
After first deployment:
```bash
gcloud run services add-iam-policy-binding cris-teban-invitation \
  --region=$REGION \
  --member="allUsers" \
  --role="roles/run.invoker"

gcloud run domain-mappings create \
  --service=cris-teban-invitation \
  --domain=crisyteban.love \
  --region=$REGION
```

#### Update DNS Records
After running the domain mapping command, GCP will provide DNS records. Add these to your domain registrar:

1. A record: `216.239.32.21`
2. A record: `216.239.34.21`
3. A record: `216.239.36.21`
4. A record: `216.239.38.21`
5. AAAA record: `2001:4860:4802:32::15`
6. AAAA record: `2001:4860:4802:34::15`
7. AAAA record: `2001:4860:4802:36::15`
8. AAAA record: `2001:4860:4802:38::15`

### 6. First Deployment

Push your code to GitHub:
```bash
git remote add origin https://github.com/edamazzio/cris-teban-invitation.git
git add .
git commit -m "Initial commit with deployment configuration"
git push -u origin main
```

The GitHub Actions workflow will automatically deploy your app to Cloud Run.

### 7. Verify Deployment
```bash
# Get service URL
gcloud run services describe cris-teban-invitation \
  --region=$REGION \
  --format='value(status.url)'

# Test the endpoint
curl $(gcloud run services describe cris-teban-invitation --region=$REGION --format='value(status.url)')
```

## Monitoring and Logs

### View Logs
```bash
gcloud run services logs read cris-teban-invitation --region=$REGION
```

### Monitor in Console
Visit: https://console.cloud.google.com/run?project=$PROJECT_ID

## Troubleshooting

### Build Fails
- Check GitHub Actions logs
- Verify all secrets are set correctly
- Ensure GCP APIs are enabled

### Domain Not Working
- Verify DNS records are propagated (can take up to 48 hours)
- Check domain mapping status:
  ```bash
  gcloud run domain-mappings describe --domain=crisyteban.love --region=$REGION
  ```

### Permission Errors
- Verify service account has correct roles
- Check that billing is enabled on the project
