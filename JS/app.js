function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      document.documentElement.classList.add('normal-scroll');
    });
    router.events.on('routeChangeComplete', () => {
      document.documentElement.classList.remove('normal-scroll');
    });
  }, []);
}

export default function MyApp({ Component, pageProps }) {
  useNormalScrollRoutes();
  return <Component {...pageProps} />;
}
