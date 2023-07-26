export function validateTweetContent(content: string): string[] {
  const errors: string[] = [];

  if (!content || content.trim().length === 0) {
    errors.push('Tweet content is required.');
  } else if (content.length > 100) {
    errors.push('Tweet should not exceed 100 characters.');
  }

  return errors;
}
