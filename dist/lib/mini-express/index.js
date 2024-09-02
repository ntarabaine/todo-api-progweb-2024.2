"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniExpress = void 0;
const http_1 = __importDefault(require("http"));
// função que recebe um objeto de solicitação (req), um objeto de resposta (res) e um callback opcional `next` que, quando chamado, passa o controle para o próximo middleware.
class MiniExpress {
    constructor() {
        this.middlewares = [];
    }
    // array para armazenar todos os middlewares registrados.
    //metodo para registrar um middleware adicionando ao array
    use(handler) {
        this.middlewares.push(handler);
        //armazena a função 'handler' no array 'mddlewares' para que possa ser chamada posteriormente, durante o processamento de uma solicitação
    }
    //metodo para iniciar o servidor e começar a ouvir em uma porta especifica
    listen(port, callback) {
        //cria um servidor http e define o comportamento ao receber uma solicitação
        const server = http_1.default.createServer((req, res) => {
            let idx = 0;
            //função interna 'next' para avançar para o proximo middleware que está sendo executado
            const next = () => {
                if (idx < this.middlewares.length) {
                    const handler = this.middlewares[idx++];
                    handler(req, res, next);
                }
                else {
                    //se não houver mais middlewares, encerra
                    res.end();
                }
            };
            //inicia a execução do primeiro middleware
            next();
        });
        //inicia o servidor na porta especificada
        server.listen(port, callback);
    }
}
exports.MiniExpress = MiniExpress;
