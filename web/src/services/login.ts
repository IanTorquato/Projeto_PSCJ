interface Response {
  user: {
    id: number
    nome: string
    email: string
  }
}

export function login(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        user: {
          id: 1,
          nome: 'Ian',
          email: 'iantorquato2@gmail.com'
        }
      })
    }, 2000)
  })
}