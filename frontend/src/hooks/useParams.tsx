"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

type SetParamsOptions = { replace?: boolean };

function tryParseValue(value: string | null) {
	if (value === null) return value;
	if (value === "true") return true;
	if (value === "false") return false;
	if (/^[0-9]+$/.test(value)) return Number(value);
	return value;
}

export function useParams<T extends Record<string, any> = Record<string, any>>(defaults?: Partial<T>) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const params = useMemo(() => {
		const result: Record<string, any> = { ...(defaults || {}) };
		if (!searchParams) return result as T;
		for (const key of Array.from(searchParams.keys())) {
			const values = searchParams.getAll(key);
			if (values.length > 1) {
				result[key] = values.map((v) => tryParseValue(v));
			} else {
				result[key] = tryParseValue(values[0]);
			}
		}
		return result as T;
	}, [searchParams, defaults]);

	const setParams = useCallback(
		(next: Partial<T> | ((prev: T) => Partial<T>), options?: SetParamsOptions) => {
			const nextObj = typeof next === "function" ? (next as (p: T) => Partial<T>)(params as T) : next;

			const sp = new URLSearchParams();

			// start with current params
			if (searchParams) {
				for (const key of Array.from(searchParams.keys())) {
					const vals = searchParams.getAll(key);
					for (const v of vals) sp.append(key, v);
				}
			}

			// apply overrides from nextObj
			for (const [k, v] of Object.entries(nextObj || {})) {
				sp.delete(k);
				if (v === undefined || v === null) continue;
				if (Array.isArray(v)) {
					for (const item of v) sp.append(k, String(item));
				} else {
					sp.set(k, String(v));
				}
			}

			const qs = sp.toString();
			const url = qs ? `${pathname}?${qs}` : pathname;

			if (options?.replace) router.replace(url);
			else router.push(url);
		},
		[router, searchParams, pathname, params]
	);

	const reset = useCallback(
		(options?: SetParamsOptions) => {
			const url = pathname;
			if (options?.replace) router.replace(url);
			else router.push(url);
		},
		[router, pathname]
	);

	return { params, setParams, reset };
}
