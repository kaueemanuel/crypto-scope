import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLang = headersList.get('accept-language') || '';

  // pick locale based on Accept-Language
  const lower = acceptLang.toLowerCase();
  let locale = 'pt-BR';

  if (lower.includes('pt')) locale = 'pt-BR';
  else if (lower.includes('en')) locale = 'en-US';

  // redirect to the locale root
  redirect(`/${locale}`);
}