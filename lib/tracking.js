export function trackSignIn(page, source) {
  global?.analytics?.page("signin_button_click", {
    page: `/${page}`,
    source: source,
  });
}

export function trackBookDemo(page, source) {
  global?.analytics?.page("book_demo_button_click", {
    page: `/${page}`,
    source: source,
  });
}

export function trackDiscoverKreative(page) {
  global?.analytics?.page("discover_kreative_button_click", {
    page: `/${page}`,
  });
}