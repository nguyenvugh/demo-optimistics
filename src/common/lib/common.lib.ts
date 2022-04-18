import { isArray, isObject } from "lodash";
import { PAGE_SIZE } from "../constants/common.constant";

export function toQueryString(objParams: object) {
  const str = [];
  for (const p in objParams) {
    if (objParams.hasOwnProperty(p) && objParams[p] + "") {
      str.push(
        // @ts-ignore
        `${encodeURIComponent(p)}=${encodeURIComponent(objParams[p])}`,
      );
    }
  }

  return "?" + str.join("&");
}

export function toUrlQueryString(url: string, objParams?: object) {
  return objParams ? `${url}${toQueryString(objParams)}` : url;
}

export function replacePathParams(path: string, newData: object): string {
  let newPath = path;
  Object.keys(newData).forEach((it) => {
    newPath = newPath.replace(`:${it}`, newData[it]);
  });
  return newPath;
}

export async function fakeApiRequest<T = any>(data: any, delay: number = 1000, isErr?: boolean) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => (isErr ? reject(data) : resolve(data)), delay);
  });
}

export function toTotalPage(totalElement = 0, size = PAGE_SIZE) {
  return Math.ceil(totalElement / size);
}

export function toPresentValue(value: any) {
  if (value === undefined || value === "" || value === null) {
    return "_";
  }
  return value;
}

type NormalizeResponse<T> = { ids: string[]; results: Record<string, T | {}> };
export function toNormalize<T extends { id: string }>(list: T[] = []): NormalizeResponse<T> {
  return list.reduce(
    (rs: NormalizeResponse<T>, item: T) => {
      rs.ids = [...rs.ids, item.id];
      rs.results = { ...rs.results, [item.id]: item };
      return rs;
    },
    { ids: [], results: {} },
  );
}

export function replaceObjectById<
  T extends { id?: string | number },
  K extends { id?: string | number },
>(data: T[] | T, newObject: K, id: string | number): typeof data {
  if (isArray(data)) {
    return data.map((item) => replaceObjectById(item, newObject, id)) as typeof data;
  }

  if (isObject(data) && data.id === id) {
    return newObject as unknown as T;
  }

  if (isObject(data) && data.id !== id) {
    return Object.keys(data).reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: replaceObjectById(data[curr], newObject, id),
      }),
      {},
    ) as typeof data;
  }
  return data;
}
