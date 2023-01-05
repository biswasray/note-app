export default class Fetcher {
  static baseUrl: string = "";
  static get<R>(
    url = this.baseUrl,
    headers?: HeadersInit,
    option?: RequestInit
  ) {
    return new Promise<R>((resolve, reject) => {
      fetch(url, { ...option, method: "GET", headers })
        .then((response) => response.json())
        .then((value: R) => resolve(value))
        .catch((e) => reject(e));
    });
  }
  static post<T, R>(
    url = this.baseUrl,
    data: Partial<T>,
    headers: HeadersInit = {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    option: RequestInit = {
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin",
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
  ) {
    return new Promise<R>((resolve, reject) => {
      fetch(url, {
        ...option,
        method: "POST",
        headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((value: R) => resolve(value))
        .catch((e) => reject(e));
    });
  }
  static put<T, R>(
    url = this.baseUrl,
    data: Partial<T>,
    headers: HeadersInit = {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    option: RequestInit = {
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin",
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
  ) {
    return new Promise<R>((resolve, reject) => {
      fetch(url, {
        ...option,
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((value: R) => resolve(value))
        .catch((e) => reject(e));
    });
  }
  static remove<R>(
    url = this.baseUrl,
    headers?: HeadersInit,
    option?: RequestInit
  ) {
    return new Promise<R>((resolve, reject) => {
      fetch(url, { ...option, method: "DELETE", headers })
        .then((response) => response.json())
        .then((value: R) => resolve(value))
        .catch((e) => reject(e));
    });
  }
}
