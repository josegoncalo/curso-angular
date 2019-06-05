export class User{
    name = '';
    username = '';
    password = '';
    phone = '';
    avatar = '';

    constructor({nome,userName,senha,telefone, avatar}){
        this.name = nome;
        this.username = userName;
        this.password = senha;
        this.phone = telefone;
        this.avatar = avatar;
    }
}