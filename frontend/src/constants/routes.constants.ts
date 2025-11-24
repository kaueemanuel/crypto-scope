export const ROUTES = {
  HOME: '/',
  COINS: {
    LIST: '/coins',
    DETAIL: (id: string | number) => `/coins/${id}`,
  },
} as const;

