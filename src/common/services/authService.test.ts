import {login} from "./authService";

test('login returns token', () => {
    const email = 'email@email.com'
    const password = 'Password'

    const actual = login(email, password)

    expect(actual).not.toBe('')
})