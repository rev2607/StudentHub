# Backend Scripts

## Setup

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Ensure your `.env` file is in the project root with the following variables:
   ```
   SUPABASE_URL=https://bdhqbjrjazdfkoulwduo.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```

## Running Scripts

### Insert Synthetic Questions

```bash
node scripts/insert_synthetic_questions.js
```

This script will:
- Create 4 synthetic papers for 2025 (JEE Mains, JEE Advanced, EAMCET, NEET)
- Insert 10 questions per paper (7 single MCQ, 2 multi-correct, 1 numeric)
- Create topics and choices as needed
- Print summary of created papers and questions

## Security Notes

- **Never commit** the `.env` file or service role keys
- If keys are exposed, rotate them immediately in Supabase dashboard
- The service role key has full database access - keep it secure
