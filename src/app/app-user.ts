export class AppUser {
  id: number;
  eMailAddress: string;
  passwordDecoded: string;
  lastLogin: string;
  resultMessage: string;

  constructor(
    id: number
    , eMailAddress: string
    , passwordDecoded: string
    , lastLogin: string;
    , resultMessage: string; 
    ) {
      this.id = id;
      this.eMailAddress = eMailAddress;
      this.passwordDecoded = passwordDecoded;
      this.lastLogin = lastLogin;
      this.resultMessage = resultMessage;
    }
}
