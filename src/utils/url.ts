// Prefix an internal path with the configured base (e.g. "/pages" on a
// GitHub project site, "" on a custom domain) so links work in both setups.
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${path.replace(/^\//, '')}`;
}
