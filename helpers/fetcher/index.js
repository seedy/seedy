import 'isomorphic-unfetch';


const fetcher = (resource, init) => fetch(resource, init).then((r) => r.json());

export const post = (resource, init) => fetcher(resource, { method: 'POST', ...init });

export default fetcher;
