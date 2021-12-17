import { routeChange } from './routeChange';

export const signIn = (user, history) => {
    sessionStorage.setItem('login', JSON.stringify(user));
    routeChange(user, history);
}