// example code

const URL_PATH = {
  USERS: '/foo/users',
  SEARCHES: '/foo/searches',
  KEYWORDS: '/bar/keywords',
};

export const ApiMapper = {
  user_controller: {
    get: {
      APP_USERS_AUTH_LOGIN: (socialLoginType: string) =>
        `${URL_PATH.USERS}/auth/${socialLoginType}/login`,
      APP_USERS_AUTH_LOGIN_CALLBACK: (socialLoginType: string) =>
        `${URL_PATH.USERS}/auth/${socialLoginType}/login/callback`,
      APP_USERS_USER_INFO: `${URL_PATH.USERS}/userInfo`,
      APP_USERS_KEYWORD: `${URL_PATH.USERS}/keywords`,
    },
    patch: {
      APP_USERS: `${URL_PATH.USERS}`,
      APP_USERS_PROFILEIMG: `${URL_PATH.USERS}/profileImg`,
    },
    post: {
      APP_USERS_NICKNAME_DUPLICATE: `${URL_PATH.USERS}/nickname/duplicate`,
    },
    delete: {
      APP_USERS: `${URL_PATH.USERS}`,
    },
  },
  search_controller: {
    get: {
      APP_SEARCHES: `${URL_PATH.SEARCHES}`,
      APP_SEARCHES_KEYWORD: `${URL_PATH.SEARCHES}/keyword`,
    },
  },
  keyword_controller: {
    get: { APP_KEYWORDS: `${URL_PATH.KEYWORDS}` },
  },
};
