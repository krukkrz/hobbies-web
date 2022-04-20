export const login = (email: string, password: string): string => {
    if (areCredentialsValid(email, password)) {
        const token = 'jwt-token'
        sessionStorage.setItem('token', token)
        return token
    }
    return '';
}

const areCredentialsValid = (email: string, password: string) => (email === 'email@email.com' && password === 'Password')

